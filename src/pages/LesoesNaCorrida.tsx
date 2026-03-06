import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Shield, Activity, Heart, CheckCircle, AlertTriangle, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

const lesoes = [
  {
    title: "Canelite",
    description: "Dor na região da canela causada por sobrecarga repetitiva.",
    link: "/canelite-ribeirao-preto",
  },
  {
    title: "Fascite Plantar",
    description: "Inflamação na fáscia plantar que gera dor no calcanhar.",
    link: "/fascite-plantar-ribeirao-preto",
  },
  {
    title: "Tendinite do Aquiles",
    description: "Lesão comum em corredores causada por sobrecarga no tendão de Aquiles.",
    link: "/tendinite-aquiles-ribeirao-preto",
  },
  {
    title: "Dor no Joelho na Corrida",
    description: "Também conhecida como síndrome patelofemoral ou joelho do corredor.",
    link: "/dor-no-joelho-corrida-ribeirao-preto",
  },
  {
    title: "Síndrome da Banda Iliotibial",
    description: "Dor na lateral do joelho causada por atrito da banda iliotibial.",
    link: "/banda-iliotibial-ribeirao-preto",
  },
  {
    title: "Fratura por Estresse",
    description: "Microfraturas ósseas causadas por sobrecarga repetitiva.",
    link: "/fratura-por-estresse-ribeirao-preto",
  },
];

const faqItems = [
  {
    question: "Quais são as lesões mais comuns na corrida?",
    answer: "As lesões mais comuns incluem canelite, fascite plantar, tendinite do Aquiles, dor no joelho do corredor e síndrome da banda iliotibial.",
  },
  {
    question: "É possível continuar correndo com dor?",
    answer: "Depende do tipo de lesão e da intensidade dos sintomas. Uma avaliação com fisioterapeuta esportivo é fundamental para definir a melhor estratégia.",
  },
  {
    question: "Como evitar lesões na corrida?",
    answer: "O ideal é combinar fortalecimento, controle de carga de treino, recuperação adequada e avaliação periódica.",
  },
];

const LesoesNaCorrida = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5516996008849&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20tratamento%20de%20les%C3%B5es%20na%20corrida.",
      "_blank"
    );
  };

  const handleAgendar = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5516996008849&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20les%C3%A3o%20na%20corrida.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Lesões na Corrida: causas, prevenção e tratamento para corredores em Ribeirão Preto
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Conheça as principais lesões na corrida, suas causas e como tratar. Centro especializado em fisioterapia para corredores em Ribeirão Preto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleAgendar}>
              Agendar avaliação
            </Button>
            <Button variant="whatsapp" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Por que corredores se lesionam?
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A corrida é um dos esportes mais populares do mundo, mas também está entre aqueles com maior incidência de lesões por sobrecarga.
            </p>
            <p>
              Estudos indicam que entre <strong className="text-foreground">60% e 80% dos corredores</strong> sofrerão algum tipo de lesão ao longo do ano. A maioria dessas lesões ocorre por aumento rápido de volume de treino, desequilíbrios musculares ou falhas na recuperação.
            </p>
            <p>
              Na <strong className="text-foreground">CareFit Run Base</strong>, em Ribeirão Preto, trabalhamos com fisioterapia esportiva especializada em corrida para tratar lesões, prevenir recidivas e ajudar corredores a voltarem aos treinos com segurança.
            </p>
            <p>
              Atendemos corredores de 5 km, 10 km, meia maratona, maratona e também triatletas que buscam tratar lesões, prevenir recidivas e melhorar sua performance na corrida.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {[
              "Aumento rápido do volume de treino",
              "Falta de fortalecimento específico",
              "Recuperação insuficiente entre treinos",
              "Biomecânica de corrida alterada",
              "Calçados inadequados",
              "Treinos em excesso sem periodização",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principais Lesões */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Principais Lesões na Corrida
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as lesões mais comuns entre corredores e acesse o conteúdo completo sobre cada uma delas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lesoes.map((lesao, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    <Link to={lesao.link} className="hover:text-accent transition-colors">
                      {lesao.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{lesao.description}</p>
                  <Link to={lesao.link} className="text-accent hover:underline text-sm font-medium inline-flex items-center gap-1">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como prevenir */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Como Prevenir Lesões na Corrida
            </h2>
          </div>
          <div className="space-y-4 mb-10">
            {[
              "Fortalecimento específico para corredores",
              "Controle de carga de treino",
              "Recuperação adequada entre sessões",
              "Avaliação biomecânica da corrida",
              "Planejamento de treinos progressivos",
              "Integração com fisioterapia preventiva",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/fortalecimento-para-corredores-ribeirao-preto" className="block p-4 bg-muted rounded-lg text-center hover:shadow-md transition-shadow">
              <span className="text-accent font-medium">Fortalecimento para Corredores →</span>
            </Link>
            <Link to="/recovery-corredores-ribeirao-preto" className="block p-4 bg-muted rounded-lg text-center hover:shadow-md transition-shadow">
              <span className="text-accent font-medium">Recovery para Corredores →</span>
            </Link>
            <Link to="/avaliacao-do-corredor-ribeirao-preto" className="block p-4 bg-muted rounded-lg text-center hover:shadow-md transition-shadow">
              <span className="text-accent font-medium">Avaliação do Corredor →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tratamento na CareFit */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Tratamento de Lesões na CareFit Run Base
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A <strong className="text-foreground">CareFit Run Base é um centro especializado em fisioterapia para corredores em Ribeirão Preto</strong>. Nosso tratamento é integrado e individualizado, combinando diferentes abordagens para garantir o melhor resultado.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Avaliação Específica para Corrida", desc: "Análise completa da biomecânica, força, mobilidade e histórico do corredor." },
              { title: "Terapia Manual", desc: "Mobilização articular, liberação miofascial e técnicas de tecidos moles." },
              { title: "Exercícios Terapêuticos", desc: "Protocolos de reabilitação específicos para cada lesão e fase do tratamento." },
              { title: "Fortalecimento Funcional", desc: "Exercícios direcionados para corrigir desequilíbrios e prevenir recidivas." },
              { title: "Protocolos de Recovery", desc: "Banheiras de imersão, botas de compressão e crioterapia para acelerar a recuperação." },
              { title: "Retorno Progressivo à Corrida", desc: "Progressão segura de volume e intensidade com critérios claros para cada fase." },
            ].map((item, i) => (
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

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted rounded-lg border-0 px-6">
                <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Agende sua Avaliação na CareFit Run Base
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Se você é corredor ou triatleta em Ribeirão Preto e está lidando com dor ou lesão na corrida, nossa equipe especializada pode ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleAgendar}>
              Agendar avaliação
            </Button>
            <Button variant="whatsapp" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Av. Áurea Aparecida Bragheto Machado, 241 — Ribeirão Preto, SP
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LesoesNaCorrida;
