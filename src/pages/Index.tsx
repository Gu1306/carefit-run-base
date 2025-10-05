import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Heart, Zap, Target, Users, MapPin, Calendar, Star, Award, Clock, CheckCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
const Index = () => {
  const navigate = useNavigate();
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5516996008849", "_blank");
  };
  const pilares = [{
    icon: Heart,
    title: "Recovery",
    subtitle: "Recuperar também é treinar",
    description: "Técnicas avançadas de recuperação muscular e prevenção de lesões para manter você sempre em movimento."
  }, {
    icon: Zap,
    title: "Fortalecimento",
    subtitle: "Base forte, corrida sem dor",
    description: "Fortalecimento específico para corredores, focando nos grupos musculares essenciais para performance."
  }, {
    icon: Target,
    title: "Nutrição",
    subtitle: "Combustível para a performance",
    description: "Orientação nutricional especializada para otimizar seu rendimento e acelerar a recuperação."
  }, {
    icon: Users,
    title: "Mente",
    subtitle: "Foco, consistência, superação",
    description: "Suporte psicológico e mental para desenvolver a mentalidade vencedora do corredor de alta performance."
  }];
  const numeros = [{
    numero: 167,
    suffix: "+",
    texto: "Corredores transformados",
    animated: true
  }, {
    numero: 29,
    suffix: "+",
    texto: "Maratonistas",
    animated: true
  }, {
    numero: 7,
    suffix: "+",
    texto: "Ultramaratonistas",
    animated: true
  }, {
    numero: 3,
    suffix: "",
    texto: "Anos de jornada",
    animated: false
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/src/assets/hero-runners.jpg')`
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Corra com propósito. Evolua com ciência. <span className="text-earth">
Viva com equilíbrio.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-poppins font-light">
            Com planos de 12 semanas, transformamos corredores vulneráveis em atletas resilientes — com a ciência, o cuidado e o propósito de quem vive essa jornada na pele.
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-montserrat font-semibold" onClick={handleWhatsApp}>
              Agende sua Primeira Sessão
            </Button>
          </div>
        </div>
      </section>

      {/* Nossa Jornada de Crescimento */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">A Jornada que nos trouxe até aqui:</h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
          </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[{
            ano: "2022",
            titulo: "O Despertar",
            descricao: "Gustavo percebe a fragmentação do cuidado",
            icon: Star
          }, {
            ano: "2023",
            titulo: "Os Primeiros Passos",
            descricao: "Nasce a CareFit Recovery",
            icon: CheckCircle
          }, {
            ano: "2024",
            titulo: "Crescimento e Validação",
            descricao: "Mais de 100 corredores transformados",
            icon: Award
          }, {
            ano: "2025",
            titulo: "O HUB DO CORREDOR",
            descricao: "Espaço 100% preparado para sua Jornada",
            icon: MapPin
          }].map((marco, index) => <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <marco.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-montserrat font-bold text-earth mb-2">{marco.ano}</div>
                  <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">{marco.titulo}</h3>
                  <p className="text-primary/70 font-poppins">{marco.descricao}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pilares de Cuidado */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Onde prevenção encontra performance
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
              Nossos 4 pilares de cuidado integrado para corredores
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pilares.map((pilar, index) => <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pilar.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-2">{pilar.title}</h3>
                  <p className="text-secondary font-montserrat font-semibold mb-4">{pilar.subtitle}</p>
                  <p className="text-primary/70 font-poppins leading-relaxed">{pilar.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Histórias que inspiram
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto font-poppins">
              Mais de 100 jornadas transformadas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {numeros.map((item, index) => <div key={index} className="text-center">
                {item.animated ? <AnimatedCounter end={item.numero} suffix={item.suffix} duration={2500} /> : <div className="text-5xl md:text-6xl font-montserrat font-bold text-earth mb-4">
                    {item.numero}
                  </div>}
                <p className="text-lg font-poppins opacity-90">{item.texto}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Corredores cuidando de corredores
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
              Nossa equipe é formada por corredores que entendem suas dores porque vivem isso na pele
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-montserrat font-bold text-white">GR</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary mb-2">Gustavo Rosa</h3>
                <p className="text-secondary font-montserrat font-semibold mb-4">Fundador</p>
                <p className="text-primary/70 font-poppins">Com mais de 20 Ultramaratonas e Maratonas. Criador da metodologia CareFit e especialista em transformação de corredores.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-montserrat font-bold text-white">L</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary mb-2">Lívia Dias</h3>
                <p className="text-secondary font-montserrat font-semibold mb-4">Fisioterapeuta & Agente da Performance</p>
                <p className="text-primary/70 font-poppins">Especialista em prevenção e recovery, corredora apaixonada que une ciência e sensibilidade no cuidado de cada atleta.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-montserrat font-bold text-white">GC</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary mb-2">Guilherme Coelho</h3>
                <p className="text-secondary font-montserrat font-semibold mb-4">Educador Físico</p>
                <p className="text-primary/70 font-poppins">Corredor dos rápidos e especialista em fortalecimento funcional para corredores, focado em construir a base que sustenta cada quilômetro da jornada.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-montserrat font-bold text-white">AA</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary mb-2">Arthur Angelotti</h3>
                <p className="text-secondary font-montserrat font-semibold mb-4">Nutricionista Esportivo</p>
                <p className="text-primary/70 font-poppins">Maratonista e especialista em nutrição para performance, desenvolvendo estratégias alimentares que transformam treinos em conquistas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Você não precisa correr sozinho
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-poppins opacity-90">
            Todo passo conta. Cuidar não é parar, é evoluir.<br />
            Sua jornada de transformação começa aqui.
          </p>
          
        </div>
      </section>
    </div>;
};
export default Index;