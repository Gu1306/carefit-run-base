import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Zap, Target, Users, Play, ArrowRight } from "lucide-react";

const Servicos = () => {
  const servicos = [
    {
      icon: Heart,
      title: "Recovery",
      subtitle: "Recuperação ativa e regeneração",
      description: "Banheiras de imersão, botas de compressão pneumática e liberação miofascial. Tecnologia avançada para acelerar sua recuperação e otimizar performance.",
      features: [
        "Banheiras de imersão com controle de temperatura",
        "Botas de compressão pneumática NormaTec",
        "Liberação miofascial com equipamentos profissionais",
        "Protocolos personalizados de recuperação"
      ],
      color: "from-accent to-earth",
      videoPlaceholder: "recovery-video"
    },
    {
      icon: Zap,
      title: "Fortalecimento",
      subtitle: "Treino funcional especializado",
      description: "Treinos funcionais específicos para corredores, focados na prevenção de lesões e melhoria da performance através do fortalecimento inteligente.",
      features: [
        "Avaliação biomecânica completa",
        "Exercícios funcionais específicos para corrida",
        "Fortalecimento de core e estabilidade",
        "Prevenção ativa de lesões comuns"
      ],
      color: "from-secondary to-primary",
      videoPlaceholder: "strength-video"
    },
    {
      icon: Target,
      title: "Nutrição",
      subtitle: "Alimentação conectada ao treino",
      description: "Acompanhamento nutricional integrado ao seu ciclo de treinos, com estratégias personalizadas para cada fase da sua preparação e objetivos.",
      features: [
        "Plano nutricional personalizado",
        "Estratégias de hidratação e suplementação",
        "Nutrição periodizada conforme treinos",
        "Acompanhamento contínuo de resultados"
      ],
      color: "from-warm to-accent",
      videoPlaceholder: "nutrition-video"
    },
    {
      icon: Users,
      title: "Treinamento Mental",
      subtitle: "Mente preparada, performance elevada",
      description: "Desenvolvimento de foco, consistência, autocuidado e capacidade de superação. Ferramentas mentais para potencializar sua performance na corrida e na vida.",
      features: [
        "Técnicas de visualização e foco",
        "Estratégias de controle de ansiedade",
        "Desenvolvimento de autoconfiança",
        "Mindfulness aplicado ao esporte"
      ],
      color: "from-earth to-secondary",
      videoPlaceholder: "mental-video"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Cuidado integrado que vai além do tratamento. Performance construída com ciência, acolhimento e dedicação.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content Side */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${servico.color} rounded-full flex items-center justify-center`}>
                      <servico.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-primary">
                        {servico.title}
                      </h2>
                      <p className="text-accent font-medium">
                        {servico.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {servico.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {servico.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  >
                    Agendar consulta
                  </Button>
                </div>

                {/* Video/Image Side */}
                <div className="lg:w-1/2">
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className={`relative w-full h-80 bg-gradient-to-br ${servico.color} flex items-center justify-center`}>
                        {/* Video placeholder */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                            <p className="text-lg font-medium">Vídeo explicativo</p>
                            <p className="text-sm opacity-80">Em breve</p>
                          </div>
                        </div>
                        {/* Future YouTube embed space */}
                        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                          {servico.videoPlaceholder}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-warm to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para elevar sua performance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nossos fisioterapeutas especializados estão prontos para guiar sua jornada de evolução como corredor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Agende sua avaliação
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              Conhecer a jornada de 12 semanas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;