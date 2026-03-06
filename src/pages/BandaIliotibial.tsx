import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Shield, Activity, Heart, CheckCircle, AlertTriangle, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

const causas = [
  "Fraqueza muscular nos glúteos e estabilizadores do quadril",
  "Aumento rápido do volume de treino, especialmente treinos longos",
  "Corrida em descidas ou superfícies inclinadas",
  "Encurtamento da banda iliotibial e tensor da fáscia lata",
  "Pisada pronada ou alterações biomecânicas",
  "Falta de fortalecimento específico para corrida",
];

const sintomas = [
  "Dor na lateral externa do joelho",
  "Dor que piora durante treinos longos ou em descidas",
  "Dor que aparece após um tempo de corrida e aumenta progressivamente",
  "Sensação de queimação ou pontada na lateral do joelho",
];

const tratamentos = [
  { title: "Liberação Miofascial", desc: "Liberação da banda iliotibial, tensor da fáscia lata e glúteos para reduzir tensão e atrito." },
  { title: "Fortalecimento de Glúteos", desc: "Exercícios específicos para estabilizadores do quadril, fundamentais para corrigir a causa da síndrome." },
  { title: "Correção Biomecânica", desc: "Análise e ajuste da mecânica de corrida para reduzir o atrito da banda iliotibial sobre o côndilo femoral." },
  { title: "Controle de Carga", desc: "Ajuste do volume de treino com atenção especial a longões e treinos em descida." },
];

const prevencao = [
  "Fortalecimento regular dos glúteos e estabilizadores do quadril",
  "Alongamento do tensor da fáscia lata e banda iliotibial",
  "Progressão gradual do volume de treino",
  "Evitar aumento súbito de treinos em descida",
  "Integração com recovery entre sessões",
  "Avaliação biomecânica periódica",
];

const faqItems = [
  {
    question: "O que é a síndrome da banda iliotibial?",
    answer: "É uma lesão por sobrecarga causada pelo atrito da banda iliotibial sobre o côndilo femoral lateral, gerando dor na parte externa do joelho. É comum em corredores de longa distância.",
  },
  {
    question: "Quanto tempo leva para tratar?",
    answer: "O tempo varia conforme a gravidade. Com fisioterapia e ajustes de treino, muitos corredores melhoram em 4 a 8 semanas.",
  },
  {
    question: "Posso correr com dor na lateral do joelho?",
    answer: "Depende da intensidade. Continuar correndo com dor intensa pode agravar o quadro. Uma avaliação especializada define os ajustes necessários no treino.",
  },
  {
    question: "Foam roller ajuda na banda iliotibial?",
    answer: "O foam roller pode auxiliar na liberação de tensão, mas não trata a causa. O fortalecimento dos glúteos e a correção biomecânica são fundamentais.",
  },
  {
    question: "A síndrome da banda iliotibial volta?",
    answer: "Se os fatores de risco não forem corrigidos, sim. O fortalecimento contínuo e a avaliação periódica são essenciais para prevenir recidivas.",
  },
];

const BandaIliotibial = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5516996008849&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20tratamento%20da%20s%C3%ADndrome%20da%20banda%20iliotibial.", "_blank");
  };
  const handleAgendar = () => {
    window.open("https://api.whatsapp.com/send?phone=5516996008849&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20banda%20iliotibial.", "_blank");
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Síndrome da Banda Iliotibial em Corredores: tratamento da dor lateral no joelho em Ribeirão Preto
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Tratamento especializado para síndrome da banda iliotibial em corredores em Ribeirão Preto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleAgendar}>Agendar avaliação</Button>
            <Button variant="whatsapp" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">O que é a Síndrome da Banda Iliotibial?</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A síndrome da banda iliotibial é uma <Link to="/lesoes-na-corrida" className="text-accent hover:underline">lesão comum em corredores</Link> que causa dor na lateral do joelho, especialmente em treinos longos ou descidas.
            </p>
            <p>
              Na <strong className="text-foreground">CareFit Run Base</strong>, em Ribeirão Preto, tratamos essa condição com <Link to="/fisioterapia-para-corredores-ribeirao-preto" className="text-accent hover:underline">fisioterapia esportiva</Link> focada na correção biomecânica e no fortalecimento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Causas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {causas.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Sintomas</h2>
          </div>
          <div className="space-y-4">
            {sintomas.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Tratamento Fisioterapêutico</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O tratamento na CareFit é integrado com <Link to="/fortalecimento-para-corredores-ribeirao-preto" className="text-accent hover:underline">fortalecimento</Link> e <Link to="/recovery-corredores-ribeirao-preto" className="text-accent hover:underline">recovery</Link>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {tratamentos.map((item, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Prevenção</h2>
          </div>
          <div className="space-y-4">
            {prevencao.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border-0 px-6">
                <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Agende sua Avaliação na CareFit Run Base</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Se você está com dor na lateral do joelho, nossa equipe de fisioterapia esportiva em Ribeirão Preto pode ajudar no seu tratamento e retorno à corrida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleAgendar}>Agendar avaliação</Button>
            <Button variant="whatsapp" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-6">Av. Áurea Aparecida Bragheto Machado, 241 — Ribeirão Preto, SP</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BandaIliotibial;
