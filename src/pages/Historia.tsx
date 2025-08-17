import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Target, MapPin, Clock } from "lucide-react";
const Historia = () => {
  const equipe = [{
    nome: "Gustavo",
    papel: "Fundador & Ultramaratonista",
    descricao: "A paixão pela corrida de longa distância e a experiência como ultramaratonista deram origem ao conceito da CareFit Run Base. Gustavo entendeu na prática que performance nasce do cuidado preventivo.",
    especialidade: "Visão estratégica e experiência em ultramaratona",
    icon: Award,
    color: "from-accent to-earth"
  }, {
    nome: "Livia",
    papel: "Fisioterapeuta e Agente da Performance",
    descricao: "Responsável por ampliar o conceito original, Livia trouxe a dimensão científica e o olhar humanizado que transforma tratamento em jornada de autoconhecimento.",
    especialidade: "Desenvolvimento de protocolos e experiência do cliente",
    icon: Heart,
    color: "from-secondary to-primary"
  }, {
    nome: "Educador Físico",
    papel: "Especialista em Performance",
    descricao: "Desenvolvendo protocolos de fortalecimento e condicionamento específicos para corredores, integrando ciência e prática esportiva.",
    especialidade: "Condicionamento físico e preparação esportiva",
    icon: Target,
    color: "from-warm to-accent"
  }, {
    nome: "Nutricionista",
    papel: "Especialista em Nutrição Esportiva",
    descricao: "Criando planos nutricionais personalizados que potencializam performance e aceleram a recuperação dos atletas.",
    especialidade: "Nutrição esportiva e metabolismo",
    icon: Users,
    color: "from-primary to-secondary"
  }, {
    nome: "Fisioterapeuta",
    papel: "Líder de Reabilitação",
    descricao: "Especializado em reabilitação e tratamento específico para corredores, focando na recuperação completa e retorno seguro aos treinos.",
    especialidade: "Reabilitação e fisioterapia esportiva", 
    icon: Heart,
    color: "from-earth to-warm"
  }];
  const timeline = [{
    ano: "2022",
    titulo: "O Despertar da Necessidade",
    descricao: "Durante sua preparação para ciclos de maratonas e ultramaratonas, Gustavo percebeu a fragmentação do cuidado esportivo: endocrinologista, nutricionista, fisioterapeuta, educador físico e treinador de corrida não se comunicavam entre si, obrigando o atleta a repetir várias vezes a mesma história e no ciclo de sua primeira ultramaratona, essa realidade ficou ainda mais clara: faltava um modelo integrado de acompanhamento. Nasceu a ideia de um espaço onde o atleta contasse sua história apenas uma vez, recebendo um plano unificado para toda a jornada."
  }, {
    ano: "Julho de 2023",
    titulo: "CareFit Recovery",
    descricao: "Nascimento da clínica focada em recuperação e fisioterapia, criada a partir da vivência de Gustavo como maratonista e ultramaratonista."
  }, {
    ano: "2023",
    titulo: "Consolidação no Mercado de Corrida",
    descricao: "O projeto começa com foco em recovery e acompanhamento de ciclos de meia maratona e maratona. Com o boca a boca no meio da corrida, a CareFit ganhou força e se tornou referência entre atletas de Ribeirão Preto e região."
  }, {
    ano: "2024",
    titulo: "Comunidade Crescente",
    descricao: "Acompanhamos mais de 70 atletas, entre eles mais de 20 maratonistas e 4 ultramaratonistas. O método de prevenção, fortalecimento e recovery foi validado no mercado, consolidando a CareFit como referência em cuidado preventivo para corredores."
  }, {
    ano: "2025",
    titulo: "A Transformação",
    descricao: "Já consolidados, buscamos um novo espaço e trouxemos para o time profissionais de nutrição, fisiologia e educação física — muitos deles ex-clientes que viveram a jornada e entenderam nosso conceito. Foi nesse ano que a CareFit Recovery se transformou em CareFit Run Base, um hub completo para corredores."
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossa História
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A jornada que nos trouxe até aqui: da paixão pela corrida ao conceito revolucionário de cuidado preventivo.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Do Asfalto à Revolução no Cuidado
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tudo começou com uma pergunta simples: <strong className="text-accent">"Por que esperar a dor chegar?"</strong>
                </p>
                <p>Gustavo, maratonista e ultramaratonista apaixonado, conhecia intimamente os desafios do corpo em longas distâncias. Cada quilômetro percorrido era uma lição sobre limites, recuperação e a importância de uma base sólida.</p>
                <p>
                  Em 2020, nasceu a CareFit Recovery, com uma proposta diferente: <strong className="text-primary">cuidar antes de precisar tratar</strong>. 
                  Não era apenas mais uma clínica – era um conceito revolucionário.
                </p>
                <p>
                  Com a chegada da Lívia, o projeto ganhou dimensões científicas e humanas que transformaram 
                  completamente a experiência do atleta. Fisioterapeutas deixaram de ser apenas profissionais de tratamento 
                  para se tornarem <strong className="text-accent">parceiros de performance</strong>.
                </p>
                <p>
                  A soma do conhecimento de Gustavo — com mais de 20 maratonas e ultramaratonas no currículo, vivência em inúmeros ciclos de preparação e a criação do mapa mental como forma de acompanhamento — com a visão da Lívia, que através de ferramentas da fisioterapia desenvolveu metodologias de prevenção de lesões, redução da fadiga e entendimento profundo da corrida, estruturou a base única que hoje sustenta a CareFit Run Base.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-accent to-earth rounded-full opacity-20 flex items-center justify-center">
                <Award className="w-32 h-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-r from-warm/20 to-accent/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Nosso Time de Líderes
            </h2>
            <p className="text-xl text-muted-foreground">
              As mentes visionárias por trás da transformação no cuidado esportivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((membro, index) => <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-0">
                <CardHeader>
                  <div className={`w-24 h-24 bg-gradient-to-br ${membro.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <membro.icon className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    {membro.nome}
                  </CardTitle>
                  <p className="text-accent font-medium">
                    {membro.papel}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {membro.descricao}
                  </p>
                  <div className="bg-gradient-to-r from-accent/10 to-earth/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-primary">
                      {membro.especialidade}
                    </p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Nossa Evolução
            </h2>
            <p className="text-xl text-muted-foreground">
              Marcos importantes na construção da CareFit Run Base
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-accent to-primary h-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => <div key={index} className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white font-bold">
                      {item.ano.slice(-2)}
                    </span>
                  </div>
                  <Card className="flex-1 border-l-4 border-accent">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-accent">
                          {item.ano}
                        </span>
                        <CardTitle className="text-xl text-primary">
                          {item.titulo}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.descricao}
                      </p>
                    </CardContent>
                  </Card>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              O que nos move todos os dias
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Transformar a relação dos corredores com o cuidado, provando que prevenção é a estratégia 
                  mais inteligente para uma performance duradoura e consciente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Heart className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Ser reconhecida como a base fundamental de todo corredor que entende que cuidar não é parar, 
                  mas sim a forma mais inteligente de seguir em frente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <MapPin className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nossa Base
              </h3>
              <p className="text-muted-foreground mb-4">
                Um espaço especialmente pensado para acolher corredores em todas as fases de sua jornada.
              </p>
              <div className="bg-muted rounded-lg p-6">
                <p className="font-medium text-primary">Av. Áurea Aparecida Bragheto Machado, 263</p>
                <p className="text-muted-foreground">City Ribeirão, Ribeirão Preto - SP, 14021-460</p>
              </div>
            </div>

            <div>
              <Clock className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Horário de Funcionamento
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium">8h às 18:30h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Faça parte da nossa história
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos prontos para cuidar da sua jornada e fazer você parte desta comunidade especial.
            </p>
            <Button variant="hero" size="lg" onClick={() => window.open('https://wa.me/5516996008849', '_blank')}>
              Comece sua jornada conosco
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Historia;