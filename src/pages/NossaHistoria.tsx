import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Home } from "lucide-react";

const NossaHistoria = () => {
  useEffect(() => {
    // Set page meta tags
    document.title = "Nossa História & Valores | CareFit Run Base - HUB do Corredor";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Conheça a história da CareFit Run Base, nossa missão, visão e os valores que guiam nosso cuidado especializado com corredores.");
    }
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <nav 
        aria-label="Breadcrumb" 
        className="fixed top-20 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </li>
            <li>
              <span className="text-foreground font-medium">Nossa História</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - 100vh */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"
          aria-hidden="true"
        />
        
        {/* Overlay for better text readability */}
        <div 
          className="absolute inset-0 bg-black/45"
          aria-hidden="true"
        />
        
        {/* Decorative elements */}
        <div 
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
          <div className="animate-fade-in">
            {/* Desktop: Left-aligned | Mobile/Tablet: Centered */}
            <div className="lg:max-w-2xl lg:text-left text-center">
              {/* Headline */}
              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-montserrat"
              >
                Por que esperar a dor chegar?
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 font-poppins leading-relaxed">
                A CareFit Run Base nasceu de uma pergunta simples. Gustavo, maratonista apaixonado, 
                percebeu que corredores sofrem com cuidado fragmentado, lesões evitáveis e falta de 
                especialização. <span className="text-earth font-semibold">Existe um caminho melhor.</span>
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 mb-10 font-poppins max-w-xl lg:max-w-none mx-auto lg:mx-0">
                Somos especialistas em corrida cuidando de corredores. 
                <br className="hidden sm:block" />
                <span className="text-gold font-medium">Prevenção</span>, não reação. 
                <span className="text-gold font-medium"> Integração</span>, não isolamento. 
                <span className="text-gold font-medium"> Transformação</span>, não apenas tratamento.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-montserrat font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={scrollToNextSection}
                >
                  Descubra Nossa Solução
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors cursor-pointer group"
          aria-label="Rolar para próxima seção"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-poppins opacity-70 group-hover:opacity-100 transition-opacity">
              Role para descobrir
            </span>
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </div>
        </button>
      </section>

      {/* SEÇÃO 2: TIMELINE (será adicionada aqui) */}
      
      {/* SEÇÃO 3: EQUIPE (será adicionada aqui) */}
      
      {/* SEÇÃO 4: VALORES (será adicionada aqui) */}
      
      {/* SEÇÃO 5: DIFERENCIAL (será adicionada aqui) */}
      
      {/* SEÇÃO 6: CTA FINAL (será adicionada aqui) */}

      {/* Placeholder section for scroll demonstration */}
      <section className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-muted-foreground text-lg font-poppins">
            Próximas seções em desenvolvimento...
          </p>
        </div>
      </section>
    </main>
  );
};

export default NossaHistoria;
