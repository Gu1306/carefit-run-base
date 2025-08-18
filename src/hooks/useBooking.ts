import { useState } from 'react';
import { getCalendarAvailability, bookAppointment } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

interface AvailableSlot {
  start: string;
  end: string;
  label: string;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  datetime: string;
  duration: number;
  notes?: string;
}

export const useBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<AvailableSlot[]>([]);
  const { toast } = useToast();

  const loadAvailability = async (date: string) => {
    try {
      setIsLoading(true);
      const response = await getCalendarAvailability(date);
      setAvailableSlots(response.availableSlots || []);
    } catch (error: any) {
      console.error('Erro ao buscar disponibilidade:', error);
      toast({
        title: "Erro ao carregar horários",
        description: "Não foi possível carregar os horários disponíveis. Tente novamente.",
        variant: "destructive",
      });
      setAvailableSlots([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBooking = async (data: BookingData) => {
    setIsLoading(true);
    
    try {
      const response = await bookAppointment(data);
      
      toast({
        title: "Agendamento confirmado!",
        description: "Seu agendamento foi realizado com sucesso. Você receberá um e-mail de confirmação.",
      });

      // Track analytics event
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'appointment_booked', {
          event_category: 'engagement',
          event_label: data.service,
          value: data.duration
        });
      }

      return { success: true, data: response };
    } catch (error: any) {
      console.error('Erro ao fazer agendamento:', error);
      
      let errorMessage = 'Erro ao processar agendamento. Tente novamente.';
      
      if (error.response?.data?.errors) {
        // Handle validation errors
        const validationErrors = error.response.data.errors;
        errorMessage = validationErrors.map((err: any) => err.msg).join(', ');
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      }
      
      toast({
        title: "Erro no agendamento",
        description: errorMessage,
        variant: "destructive",
      });

      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleBooking,
    loadAvailability,
    isLoading,
    availableSlots
  };
};