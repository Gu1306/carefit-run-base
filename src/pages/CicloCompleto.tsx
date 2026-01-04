import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

      {/* SEÇÃO 2: PROMESSA + DIFERENCIAL (será adicionada aqui) */}
      
      {/* SEÇÃO 3: O QUE VOCÊ RECEBE (será adicionada aqui) */}
      
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
      <section className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p className="text-2xl font-semibold mb-4">Próximas seções em desenvolvimento...</p>
          <p className="text-lg">Continue para ver a transformação completa</p>
        </div>
      </section>
    </main>
  );
};

export default CicloCompleto;
