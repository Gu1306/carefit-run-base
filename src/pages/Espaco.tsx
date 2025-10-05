import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Camera, Award, Users, Heart, Zap } from "lucide-react";

const Espaco = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5516996008849&text=Olá!", "_blank");
  };

  const equipamentos = [
    {
      icon: Heart,
      nome: "Equipamentos de Recovery",
      descricao: "Tecnologia de ponta para recuperação muscular e prevenção de lesões",
      image: "/src/assets/recovery_atletas.jpg"
    },
    {
      icon: Zap,
      nome: "Aparelhos de Fisioterapia",
      descricao: "Equipamentos modernos para tratamento e fortalecimento",
      image: "/src/assets/equipamentos_fisio.jpg"
    },
    {
      icon: Users,
      nome: "Área de Treino Funcional",
      descricao: "Espaço amplo para exercícios específicos para corredores",
      image: "/src/assets/treino_funcional.jpg"
    },
    {
      icon: Award,
      nome: "Sala de Imersão",
      descricao: "Ambiente especializado para tratamentos de imersão",
      image: "/src/assets/banheira_imersao.jpg"
    }
  ];

  const diferenciais = [
    "100% espaço próprio - nosso verdadeiro lar",
    "Equipamentos de última geração",
    "Ambiente acolhedor e profissional",
    "Localização estratégica na Av. Áurea Aparecida",
    "Estrutura completa para todas as especialidades",
    "Design pensado para o bem-estar do corredor"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/recovery_atletas.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm px-4 py-2">
            Nosso Novo Lar
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Bem-vindo ao futuro da<br />
            <span className="text-earth">fisioterapia esportiva</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-poppins font-light">
            De uma pequena sala ao nosso espaço próprio.<br />
            Onde cada detalhe foi pensado para sua jornada de evolução.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-montserrat font-semibold"
              onClick={handleWhatsApp}
            >
              Agende uma Visita
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-montserrat font-semibold"
            >
              <Camera className="mr-2 h-5 w-5" />
              Tour Virtual
            </Button>
          </div>
        </div>
      </section>

      {/* Nossa Jornada */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Nossa Jornada até Aqui
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
              Da sala pequena ao sonho realizado - cada passo foi pensado para chegar até este momento
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">O Início Humilde</h3>
                  <p className="text-primary/80 font-poppins leading-relaxed mb-4">
                    Começamos em uma pequena sala, mas com um grande sonho: criar um espaço onde corredores pudessem encontrar 
                    cuidado integral, não fragmentado como nas clínicas tradicionais.
                  </p>
                  <p className="text-primary/80 font-poppins leading-relaxed">
                    Gustavo, nosso fundador e ultramaratonista, sabia que havia uma forma melhor de cuidar de corredores - 
                    porque ele mesmo era um.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Card className="bg-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <span className="text-white font-montserrat font-semibold">Foto: Primeira Sala</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">O Crescimento</h3>
                  <p className="text-primary/80 font-poppins leading-relaxed mb-4">
                    Mais de 100 corredores transformados. 20+ maratonistas. 4+ ultramaratonistas. 
                    Cada história de sucesso confirmava que estávamos no caminho certo.
                  </p>
                  <p className="text-primary/80 font-poppins leading-relaxed">
                    A demanda cresceu, a equipe se expandiu, e chegou o momento de dar o próximo passo: 
                    nosso espaço próprio.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Card className="bg-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-secondary to-earth rounded-lg flex items-center justify-center">
                        <span className="text-white font-montserrat font-semibold">Fotos: Histórias de Sucesso</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos e Estrutura */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Estrutura de Excelência
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
              Cada equipamento, cada espaço foi escolhido pensando na sua evolução
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipamentos.map((equipamento, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={equipamento.image}
                    alt={equipamento.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <equipamento.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-primary">{equipamento.nome}</h3>
                  </div>
                  <p className="text-primary/70 font-poppins">{equipamento.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Por que nosso espaço é único?
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
              Não é apenas um local de tratamento, é o lar da comunidade de corredores de Ribeirão Preto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {diferenciais.map((diferencial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-poppins text-primary/80">{diferencial}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
              Venha conhecer nosso novo lar
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto font-poppins">
              Localização estratégica no coração de Ribeirão Preto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-montserrat font-bold text-primary mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary mb-1">Endereço</h4>
                      <p className="text-primary/70 font-poppins">
                        Av. Áurea Aparecida Bragheto Machado, 263<br />
                        City Ribeirão - Ribeirão Preto/SP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary mb-1">Horários</h4>
                      <p className="text-primary/70 font-poppins">
                        Segunda a Sexta: 6h às 20h<br />
                        Sábado: 7h às 12h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary mb-1">Contato</h4>
                      <p className="text-primary/70 font-poppins">
                        (16) 99355-2357<br />
                        contato@carefitrunbase.com.br
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-montserrat font-bold text-primary mb-6">Mapa</h3>
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-montserrat font-semibold">Mapa Interativo</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Pronto para conhecer nosso novo lar?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-poppins opacity-90">
            Agende uma visita e veja de perto onde sua jornada de transformação acontece.<br />
            Venha sentir a energia do nosso espaço.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-montserrat font-semibold"
            onClick={handleWhatsApp}
          >
            Agendar Visita
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Espaco;