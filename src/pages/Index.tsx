import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-runners.jpg";
import CareFitLogo from "@/components/CareFitLogo";
const Index = () => {
  const navigate = useNavigate();
  
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Toda corrida precisa de uma <span className="text-accent">base</span>
          </div>
          <div className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Seu clube para encontrar a melhor versão de si mesmo
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://wa.me/5516996008849', '_blank')}>
              Agende sua primeira sessão
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => navigate('/servicos')}>
              Conheça nossos serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Manifesto Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <CareFitLogo size={32} className="mr-3" />
              <div className="text-4xl font-bold text-primary">
                Correr é mais que cruzar a linha de chegada
              </div>
              <CareFitLogo size={32} className="ml-3" />
            </div>
            <div className="text-xl text-muted-foreground max-w-3xl mx-auto">
              É começar com consciência. A base está em recovery, fortalecimento, nutrição e mente treinada.
            </div>
            <div className="flex items-center justify-center mt-4 text-accent">
              <CareFitLogo size={16} className="mr-2" />
              <span className="text-sm font-medium">Seu desafio começa na base. A gente caminha junto até o topo.</span>
              <CareFitLogo size={16} className="ml-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-semibold text-primary mb-2">Recovery</div>
                <div className="text-muted-foreground">
                  Banheiras de imersão, botas de compressão e liberação miofascial
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-semibold text-primary mb-2">Fortalecimento</div>
                <div className="text-muted-foreground">Planos online de fortalecimento. Específicos para corredores</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-warm to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-semibold text-primary mb-2">Nutrição</div>
                <div className="text-muted-foreground">
                  Acompanhamento conectado ao ciclo de treinos e objetivos
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-earth to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-semibold text-primary mb-2">Mente</div>
                <div className="text-muted-foreground">
                  Foco, consistência, autocuidado e superação
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-4xl font-bold text-white mb-6">A CAREFIT Run Base é onde prevenção encontra performance</div>
          <div className="text-xl text-white/90 mb-8">
            Estamos prontos para cuidar da sua jornada. Comece hoje mesmo.
          </div>
          <Button variant="warm" size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://wa.me/5516996008849', '_blank')}>
            Fale conosco agora
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;