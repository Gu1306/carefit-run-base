import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle, Link2, Compass, BarChart3, Check } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Hook para detectar quando elemento entra no viewport
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// SEÇÃO 2: PROMESSA + DIFERENCIAL
const Section2Diferenciais = () => {
  const { ref, isInView } = useInView(0.2);

  const diferenciais = [
    {
      icon: Link2,
      title: "Equipe Integrada",
      description: "Não você com 3 profissionais isolados. Você com 1 equipe que conversa, alinha e trabalha junto. Fisioterapia, fortalecimento, nutrição e mente em sintonia.",
      color: "#1a7a7a",
    },
    {
      icon: Compass,
      title: "100% Customizado",
      description: "Cada corredor é único. Seu ciclo é feito para VOCÊ. Ajustes semanais, avaliações contínuas, planos que evoluem com você.",
      color: "#e67e22",
    },
    {
      icon: BarChart3,
      title: "Resultados Mensuráveis",
      description: "4 avaliações físicas, métricas claras, evolução visível. Você não apenas sente a mudança — você a vê, mede e celebra.",
      color: "#1a7a7a",
    },
  ];

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Por Que o Ciclo Completo é Diferente
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/70">
            Integração que transforma
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`
                  bg-white rounded-lg p-8 shadow-md
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{
                  borderTop: `3px solid ${item.color}`,
                  transitionDelay: isInView ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: item.color }} />
                </div>

                {/* Title */}
                <h3 
                  className="text-lg font-semibold text-[#1a1a1a] mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// SEÇÃO 3: O QUE VOCÊ RECEBE
const Section3OQueRecebe = () => {
  const { ref, isInView } = useInView(0.2);

  const duranteCiclo = [
    "Atendimento semanal (presencial ou híbrido)",
    "Fisioterapeuta exclusivo (Agente Pessoal de Performance)",
    "4 avaliações físicas completas",
    "12 planilhas semanais de fortalecimento customizadas",
    "12 sessões de recovery personalizadas",
    "Plano de nutrição individualizado com 3 consultas",
    "3 experiências guiadas para foco mental e resiliência",
    "Rituais simbólicos que marcam evolução",
  ];

  const depoisCiclo = [
    "Corpo mais forte e resiliente",
    "Confiança para correr sem medo de lesão",
    "Autonomia para continuar evoluindo",
    "Comunidade de corredores transformados",
    "Acesso a próximos ciclos com desconto",
    "Seu nome no Mural dos Corredores (eternizado)",
    "Identidade de corredor consolidada",
    "Propósito claro na corrida",
  ];

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Seu Investimento Inclui
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/70">
            Tudo que você precisa para se transformar
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Durante o Ciclo */}
          <div 
            className={`
              bg-gradient-to-br from-[#1a7a7a]/5 to-transparent rounded-2xl p-6 md:p-10
              transition-all duration-700
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
            `}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 
              className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="w-10 h-10 rounded-full bg-[#1a7a7a] flex items-center justify-center">
                <span className="text-white text-sm font-bold">12</span>
              </span>
              Durante as 12 Semanas
            </h3>

            <ul className="space-y-3">
              {duranteCiclo.map((item, index) => (
                <li 
                  key={index}
                  className={`
                    flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]/80
                    transition-all duration-500
                    ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                  `}
                  style={{ transitionDelay: isInView ? `${200 + index * 50}ms` : '0ms' }}
                >
                  <Check className="w-5 h-5 text-[#1a7a7a] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Depois do Ciclo */}
          <div 
            className={`
              bg-gradient-to-br from-[#e67e22]/5 to-transparent rounded-2xl p-6 md:p-10
              transition-all duration-700
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 
              className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="w-10 h-10 rounded-full bg-[#e67e22] flex items-center justify-center">
                <span className="text-white text-sm">∞</span>
              </span>
              Depois das 12 Semanas
            </h3>

            <ul className="space-y-3">
              {depoisCiclo.map((item, index) => (
                <li 
                  key={index}
                  className={`
                    flex items-start gap-3 text-sm md:text-base text-[#1a1a1a]/80
                    transition-all duration-500
                    ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                  `}
                  style={{ transitionDelay: isInView ? `${300 + index * 50}ms` : '0ms' }}
                >
                  <Check className="w-5 h-5 text-[#e67e22] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CicloCompleto = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "CAREFIT - Ciclo Completo | Transformação em 12 Semanas";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Programa de 12 semanas com equipe integrada de especialistas em corrida. Fisioterapia, fortalecimento, nutrição e mentalidade. Transformação real com resultados mensuráveis.");
    }

    // Add Open Graph tags
    const ogTags = [
      { property: "og:title", content: "CAREFIT - Ciclo Completo | Transformação em 12 Semanas" },
      { property: "og:description", content: "Programa de 12 semanas com equipe integrada de especialistas em corrida. Fisioterapia, fortalecimento, nutrição e mentalidade." },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5516996008849", "_blank");
  };

  return (
    <main className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">
                  Ciclo Completo
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* SEÇÃO 1: HERO SECTION - TRANSFORMACIONAL */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in"
        style={{ paddingTop: "80px" }}
      >
        {/* Background Gradient with Split Effect */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #0E3C41 0%, #1a7a7a 40%, #C8643D 80%, #e67e22 100%)"
            }}
          />
          
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/45" />
          
          {/* Subtle Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Programa Exclusivo de 12 Semanas
            </span>
          </div>

          {/* Headline H1 */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            De Lesionado a Invencível
            <br />
            <span className="text-[#d4af37]">em 12 Semanas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold mb-6">
            Transformação Estruturada com Especialistas em Corrida
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Não é treino. Não é fisioterapia isolada. É a <strong className="text-white">integração completa</strong> de 
            fisioterapia, fortalecimento, nutrição e mentalidade. 
            <br className="hidden sm:block" />
            Você corre com <span className="text-[#d4af37] font-semibold">segurança</span>, <span className="text-[#d4af37] font-semibold">performance</span> e <span className="text-[#d4af37] font-semibold">propósito</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={scrollToNextSection}
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ 
                background: "linear-gradient(135deg, #1a7a7a 0%, #0E3C41 100%)",
                color: "white"
              }}
            >
              Veja Sua Transformação Possível
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 border-white/80 text-white bg-transparent hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale com um Especialista
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNextSection}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer group"
            aria-label="Scroll para próxima seção"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Descubra mais
              </span>
              <ChevronDown className="w-8 h-8 animate-bounce" />
            </div>
          </button>
        </div>
      </section>

      {/* SEÇÃO 2 e 3: PROMESSA + O QUE RECEBE ✅ COMPLETA */}
      
      {/* SEÇÃO 2: PROMESSA + DIFERENCIAL */}
      <Section2Diferenciais />
      
      {/* SEÇÃO 3: O QUE VOCÊ RECEBE */}
      <Section3OQueRecebe />
      
      {/* SEÇÃO 4: 12 SEMANAS INTERATIVAS (será adicionada aqui) */}
      
      {/* SEÇÃO 5: RITUAIS SIMBÓLICOS (será adicionada aqui) */}
      
      {/* SEÇÃO 6: DEPOIMENTOS + TRANSFORMAÇÃO (será adicionada aqui) */}
      
      {/* SEÇÃO 7: PARA QUEM É (será adicionada aqui) */}
      
      {/* SEÇÃO 8: COMO FUNCIONA (será adicionada aqui) */}
      
      {/* SEÇÃO 9: COMPARAÇÃO (será adicionada aqui) */}
      
      {/* SEÇÃO 10: INVESTIMENTO (será adicionada aqui) */}
      
      {/* SEÇÃO 11: DEPOIMENTOS DE EQUIPE (será adicionada aqui) */}
      
      {/* SEÇÃO 12: CTA FINAL (será adicionada aqui) */}

      {/* Placeholder Section - Para visualização do scroll */}
      <section className="py-20 bg-background flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p className="text-2xl font-semibold mb-4">Próximas seções em desenvolvimento...</p>
          <p className="text-lg">Continue para ver a transformação completa</p>
        </div>
      </section>
    </main>
  );
};

export default CicloCompleto;
