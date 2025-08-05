import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Target, Calendar, Trophy } from "lucide-react";

const Jornada = () => {
  const etapas = [
    { 
      semana: 1, 
      titulo: "Avaliação Inicial", 
      descricao: "Mapeamento completo da sua condição física e objetivos",
      destaque: "Primeira impressão"
    },
    { 
      semana: 2, 
      titulo: "Construção da Base", 
      descricao: "Início do fortalecimento e adaptação aos protocolos",
      destaque: null
    },
    { 
      semana: 3, 
      titulo: "Ritmo e Consistência", 
      descricao: "Estabelecimento de rotinas e hábitos saudáveis",
      destaque: "Checkpoint 1"
    },
    { 
      semana: 4, 
      titulo: "Primeira Evolução", 
      descricao: "Primeiros resultados mensuráveis e ajustes",
      destaque: null
    },
    { 
      semana: 5, 
      titulo: "Intensificação", 
      descricao: "Aumento gradual da complexidade dos treinos",
      destaque: null
    },
    { 
      semana: 6, 
      titulo: "Meio da Jornada", 
      descricao: "Reavaliação e celebração do progresso",
      destaque: "Pirâmide da Performance"
    },
    { 
      semana: 7, 
      titulo: "Aprofundamento", 
      descricao: "Foco em pontos específicos de melhoria",
      destaque: null
    },
    { 
      semana: 8, 
      titulo: "Resistência Mental", 
      descricao: "Desenvolvimento de estratégias psicológicas",
      destaque: "Checkpoint 2"
    },
    { 
      semana: 9, 
      titulo: "Pico de Performance", 
      descricao: "Máximo desenvolvimento das capacidades",
      destaque: "Quebra de Pedra"
    },
    { 
      semana: 10, 
      titulo: "Refinamento", 
      descricao: "Polimento das técnicas e estratégias",
      destaque: null
    },
    { 
      semana: 11, 
      titulo: "Preparação Final", 
      descricao: "Últimos ajustes e preparação mental",
      destaque: null
    },
    { 
      semana: 12, 
      titulo: "Celebração e Planejamento", 
      descricao: "Entrega do símbolo e planejamento futuro",
      destaque: "Mural dos Corredores"
    }
  ];

  const rituais = [
    {
      icon: Target,
      titulo: "Pirâmide da Performance",
      semana: 6,
      descricao: "Marco simbólico que representa a construção sólida das suas capacidades como corredor.",
      color: "from-accent to-earth"
    },
    {
      icon: Award,
      titulo: "Quebra de Pedra",
      semana: 9,
      descricao: "Ritual de superação que simboliza quebrar barreiras mentais e físicas.",
      color: "from-secondary to-primary"
    },
    {
      icon: Users,
      titulo: "Mural dos Corredores",
      semana: 12,
      descricao: "Seu nome eternizado no mural, junto aos símbolos entregues pela jornada completa.",
      color: "from-warm to-accent"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Jornada de 12 Semanas
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Uma transformação estruturada que vai além do físico. Cada semana é um passo na construção da sua melhor versão como corredor.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Sua Jornada de Transformação
            </h2>
            <p className="text-xl text-muted-foreground">
              Cada etapa foi pensada para construir uma base sólida e duradoura
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 bg-gradient-to-b from-accent to-primary h-full hidden lg:block"></div>

            <div className="space-y-12">
              {etapas.map((etapa, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-5/12">
                    <Card className={`${etapa.destaque ? 'border-accent shadow-lg' : ''} hover:shadow-md transition-all duration-300`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl text-primary">
                            Semana {etapa.semana}
                          </CardTitle>
                          {etapa.destaque && (
                            <Badge variant="secondary" className="bg-accent text-white">
                              {etapa.destaque}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {etapa.titulo}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {etapa.descricao}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="lg:w-2/12 flex justify-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      etapa.destaque 
                        ? 'bg-gradient-to-r from-accent to-earth' 
                        : 'bg-secondary'
                    }`}>
                      {etapa.destaque ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <span className="text-white font-bold text-sm">
                          {etapa.semana}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rituais Especiais */}
      <section className="py-20 bg-gradient-to-r from-warm/20 to-accent/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Rituais Simbólicos
            </h2>
            <p className="text-xl text-muted-foreground">
              Momentos especiais que marcam sua evolução e fortalecem seu compromisso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rituais.map((ritual, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <CardHeader>
                  <div className={`w-20 h-20 bg-gradient-to-br ${ritual.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <ritual.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {ritual.titulo}
                  </CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    Semana {ritual.semana}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {ritual.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features da Jornada */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              O que torna nossa jornada única
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Mapa Mental Individual</h3>
                  <p className="text-muted-foreground">CRM humanizado que acompanha cada detalhe da sua evolução</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Fisioterapeuta como Guia</h3>
                  <p className="text-muted-foreground">Profissional especializado acompanha toda sua jornada</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Experiências Sensoriais</h3>
                  <p className="text-muted-foreground">Momentos únicos que marcam sua transformação</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Checkpoints Regulares</h3>
                  <p className="text-muted-foreground">Avaliações constantes para ajustar o curso da jornada</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Comunidade de Apoio</h3>
                  <p className="text-muted-foreground">Clube de corredores que entende sua jornada</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Celebração da Conquista</h3>
                  <p className="text-muted-foreground">Reconhecimento simbólico no mural dos corredores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Trophy className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            12 semanas para transformar não apenas sua corrida, mas sua relação com o cuidado e a performance.
          </p>
          <Button 
            variant="warm" 
            size="lg"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            <Calendar className="w-5 h-5" />
            Agende sua avaliação inicial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Jornada;