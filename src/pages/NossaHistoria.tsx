import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Home, Lightbulb, Handshake, Dumbbell, PersonStanding } from "lucide-react";

// Timeline Item Component
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "primary" | "accent";
  position: "left" | "right";
  delay: number;
}

const TimelineItem = ({ year, title, description, icon, variant, position, delay }: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const colorClasses = variant === "primary" 
    ? "bg-primary text-white border-primary" 
    : "bg-earth text-white border-earth";

  const yearColorClass = variant === "primary" ? "text-primary" : "text-earth";

  return (
    <div 
      ref={itemRef}
      className={`relative flex items-start lg:items-center transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex items-start w-full">
        {/* Icon Circle */}
        <div 
          className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full ${colorClasses} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110`}
        >
          {icon}
        </div>
        
        {/* Content Card */}
        <div 
          className="ml-6 sm:ml-8 flex-1 bg-background rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-border/50"
        >
          <span className={`text-xl sm:text-2xl font-bold ${yearColorClass} font-poppins`}>
            {year}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-2 mb-3 font-poppins">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground font-poppins leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 w-full items-center">
        {/* Left Side */}
        <div className={`${position === "left" ? "text-right pr-12" : ""}`}>
          {position === "left" && (
            <div 
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-border/50 inline-block max-w-lg ml-auto"
            >
              <span className={`text-2xl font-bold ${yearColorClass} font-poppins`}>
                {year}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 font-poppins">
                {title}
              </h3>
              <p className="text-base text-muted-foreground font-poppins leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>

        {/* Center Icon */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-full ${colorClasses} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110`}
        >
          {icon}
        </div>

        {/* Right Side */}
        <div className={`${position === "right" ? "pl-12" : ""}`}>
          {position === "right" && (
            <div 
              className="bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-border/50 inline-block max-w-lg"
            >
              <span className={`text-2xl font-bold ${yearColorClass} font-poppins`}>
                {year}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 font-poppins">
                {title}
              </h3>
              <p className="text-base text-muted-foreground font-poppins leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

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

      {/* SEÇÃO 2: TIMELINE - Origem + Solução */}
      <section 
        className="py-20 lg:py-28 bg-muted/30"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 
              id="timeline-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 font-poppins"
            >
              Nossa Evolução
            </h2>
            <p className="text-lg text-muted-foreground font-poppins max-w-2xl mx-auto">
              Marcos importantes na construção da CareFit Run Base
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - Desktop */}
            <div 
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-earth to-primary transform -translate-x-1/2"
              aria-hidden="true"
            />
            
            {/* Vertical Line - Mobile/Tablet */}
            <div 
              className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-earth to-primary"
              aria-hidden="true"
            />

            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-16">
              {/* Marco 1 - 2022 */}
              <TimelineItem
                year="2022"
                title="O Despertar"
                description="Gustavo percebe que o cuidado com o corredor é fragmentado. Das longas distâncias e dores veio a pergunta que mudaria tudo: 'Por que esperar a dor chegar?'"
                icon={<Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />}
                variant="primary"
                position="left"
                delay={0}
              />

              {/* Marco 2 - 2023 */}
              <TimelineItem
                year="2023"
                title="Os Primeiros Passos"
                description="Nasce a CareFit Recovery. Gustavo e Lívia (fisioterapeuta especializada em corrida) unem ciência e propósito para transformar o recovery em parceiro da performance. Cuidar antes de precisar tratar."
                icon={<Handshake className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />}
                variant="accent"
                position="right"
                delay={100}
              />

              {/* Marco 3 - 2024 */}
              <TimelineItem
                year="2024"
                title="Crescimento e Validação"
                description="Chegam Guilherme (fortalecimento) e Arthur (nutrição), completando o time. Força, nutrição e fisioterapia integradas tornam a CareFit referência em prevenção e performance."
                icon={<Dumbbell className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />}
                variant="primary"
                position="left"
                delay={200}
              />

              {/* Marco 4 - 2025 */}
              <TimelineItem
                year="2025"
                title="O Hub do Corredor"
                description="Surge a CareFit Run Base, um espaço 100% preparado para a jornada do atleta. O sonho se torna real: um centro de transformação que une ciência, cuidado e propósito."
                icon={<PersonStanding className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />}
                variant="accent"
                position="right"
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* SEÇÃO 3: EQUIPE (será adicionada aqui) */}
      
      {/* SEÇÃO 4: VALORES (será adicionada aqui) */}
      
      {/* SEÇÃO 5: DIFERENCIAL (será adicionada aqui) */}
      
      {/* SEÇÃO 6: CTA FINAL (será adicionada aqui) */}
    </main>
  );
};

export default NossaHistoria;
