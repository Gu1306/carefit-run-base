import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays, isBefore, startOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useBooking } from "@/hooks/useBooking";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date | undefined;
  time: string;
  duration: number;
  notes: string;
}

const services = [
  { value: "avaliacao", label: "Avaliação Postural", duration: 60 },
  { value: "fisioterapia", label: "Fisioterapia Esportiva", duration: 60 },
  { value: "treino", label: "Treino Funcional", duration: 90 },
  { value: "recuperacao", label: "Terapia de Recuperação", duration: 45 },
];

export const BookingForm = () => {
  const { handleBooking, isLoading, availableSlots, loadAvailability } = useBooking();
  
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: undefined,
    time: '',
    duration: 60,
    notes: '',
  });

  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleInputChange = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // When service changes, update duration
    if (field === 'service') {
      const selectedService = services.find(s => s.value === value);
      if (selectedService) {
        setFormData(prev => ({ ...prev, duration: selectedService.duration }));
      }
    }
    
    // When date changes, load available times
    if (field === 'date' && value) {
      loadAvailability(format(value, 'yyyy-MM-dd'));
      setFormData(prev => ({ ...prev, time: '' })); // Reset time selection
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.date || !formData.time) return;
    
    const [hours, minutes] = formData.time.split(':');
    const datetime = new Date(formData.date);
    datetime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const bookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: services.find(s => s.value === formData.service)?.label || formData.service,
      datetime: datetime.toISOString(),
      duration: formData.duration,
      notes: formData.notes,
    };
    
    const result = await handleBooking(bookingData);
    if (result.success) {
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: undefined,
        time: '',
        duration: 60,
        notes: '',
      });
    }
  };

  const minDate = startOfDay(new Date());
  const maxDate = addDays(new Date(), 60); // 60 days from now

  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.service && formData.date && formData.time;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="w-6 h-6 text-accent" />
          Agendamento Online
        </CardTitle>
        <CardDescription>
          Agende seu atendimento de forma rápida e prática
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">WhatsApp *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(16) 99999-9999"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <Label htmlFor="service">Serviço *</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleInputChange('service', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o serviço" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label} ({service.duration}min)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Data *</Label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? (
                      format(formData.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                    ) : (
                      "Selecione a data"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => {
                      handleInputChange('date', date);
                      setCalendarOpen(false);
                    }}
                    disabled={(date) => 
                      isBefore(date, minDate) || date > maxDate
                    }
                    locale={ptBR}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Horário *</Label>
              <Select
                value={formData.time}
                onValueChange={(value) => handleInputChange('time', value)}
                disabled={!formData.date}
              >
                <SelectTrigger>
                  <SelectValue placeholder={
                    formData.date ? "Selecione o horário" : "Primeiro selecione a data"
                  } />
                </SelectTrigger>
                <SelectContent>
                  {availableSlots.map((slot) => (
                    <SelectItem key={slot.start} value={slot.label.replace(':00', ':00')}>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {slot.label}
                      </div>
                    </SelectItem>
                  ))}
                  {availableSlots.length === 0 && formData.date && (
                    <SelectItem value="no-slots" disabled>
                      Nenhum horário disponível
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Observações (opcional)</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Alguma informação adicional..."
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? "Agendando..." : "Confirmar Agendamento"}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            * Você receberá uma confirmação por e-mail com os detalhes do agendamento
          </p>
        </form>
      </CardContent>
    </Card>
  );
};