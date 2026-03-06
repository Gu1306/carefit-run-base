import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Activity, MessageCircle, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

const causas = [
  "Aumento rápido de volume de treino",
  "Falta de fortalecimento",
  "Recuperação insuficiente",
  "Biomecânica alterada",
  "Excesso de intensidade",
];

const estrategias = [
  { texto: "Fortalecimento muscular específico", link: "/fortalecimento-para-corredores-ribeirao-preto" },
  { texto: "Progressão gradual do volume de treino", link: "" },
  { texto: "Avaliação biomecânica da corrida", link: "/biomecanica-da-corrida-ribeirao-preto" },
  { texto: "Recuperação adequada", link: "/recovery-para-corredores-ribeirao-preto" },
  { texto: "Acompanhamento fisioterapêutico", link: "/fisioterapia-para-corredores-ribeirao-preto" },
];

const PrevencaoLesoes = () => {
  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=5516996008849', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prevenção de Lesões na Corrida
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Estratégias para correr com mais segurança e reduzir o risco de lesões.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              Agendar avaliação
            </Button>
            <Button variant="whatsapp" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Por que corredores se lesionam */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-warm to-accent rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Por que corredores se lesionam?
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Grande parte das <Link to="/lesoes-na-corrida" className="text-accent hover:underline">lesões na corrida</Link> está associada a:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {causas.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted p-4 rounded-lg shadow-sm">
                <Activity className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estratégias */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Estratégias para prevenir lesões
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            As principais estratégias incluem:
          </p>
          <div className="space-y-4">
            {estrategias.map((item, index) =>
              item.link ? (
                <Link key={index} to={item.link} className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-accent hover:underline font-medium">{item.texto}</span>
                </Link>
              ) : (
                <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item.texto}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-accent to-earth">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Agende sua Avaliação na CareFit Run Base
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Se você é corredor e quer prevenir lesões com acompanhamento especializado em Ribeirão Preto, nossa equipe pode ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              Agendar avaliação
            </Button>
            <Button variant="whatsapp" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <MapPin className="w-5 h-5" />
            <span>Av. Áurea Aparecida Bragheto Machado, 241 — Ribeirão Preto, SP</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrevencaoLesoes;
