import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Snowflake, Wind, Hand, CheckCircle, Heart, Activity, MessageCircle, MapPin, Users, Zap } from "lucide-react";
import Footer from "@/components/Footer";

const beneficiosRecovery = [
  "Acelerar a recuperação muscular",
  "Reduzir dor pós-treino",
  "Melhorar circulação sanguínea",
  "Reduzir rigidez muscular",
  "Preparar o corpo para o próximo treino",
  "Diminuir o risco de lesões por sobrecarga",
];

const quandoFazer = [
  "Após treinos longos (longões)",
  "Após treinos de intensidade",
  "Após provas",
  "Durante ciclos de treino intenso",
  "Durante preparação para maratona ou triathlon",
];

const lesoesPrevenidas = [
  { nome: "Canelite", link: "/canelite-ribeirao-preto" },
  { nome: "Fascite plantar", link: "/fascite-plantar-ribeirao-preto" },
  { nome: "Tendinite do Aquiles", link: "/tendinite-aquiles-ribeirao-preto" },
  { nome: "Síndrome da banda iliotibial", link: "/banda-iliotibial-ribeirao-preto" },
  { nome: "Dor no joelho do corredor", link: "/dor-no-joelho-corrida-ribeirao-preto" },
];

const faqItems = [
  {
    question: "Recovery realmente melhora a performance?",
    answer: "Sim. A recuperação adequada permite que o corpo se adapte melhor ao treinamento e mantenha consistência de treinos.",
  },
  {
    question: "Com que frequência devo fazer recovery?",
    answer: "Depende da carga de treino do atleta. Corredores em preparação para provas podem se beneficiar de sessões semanais ou após treinos mais intensos.",
  },
  {
    question: "Recovery substitui fisioterapia?",
    answer: "Não. O recovery é um complemento importante para recuperação muscular, enquanto a fisioterapia trata lesões e corrige fatores biomecânicos.",
  },
];

const RecoveryCorredores = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Recovery para Corredores em Ribeirão Preto
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Recuperação muscular especializada para corredores e triatletas na CareFit Run Base.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A recuperação muscular é uma parte essencial do treinamento de corrida. Treinar sem recuperar adequadamente aumenta o risco de lesões, queda de performance e fadiga acumulada.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na CareFit Run Base, em Ribeirão Preto, oferecemos protocolos de recovery especializados para corredores e triatletas, com foco em acelerar a recuperação muscular, reduzir dor pós-treino e melhorar a adaptação ao treinamento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso recovery é integrado à <Link to="/fisioterapia-para-corredores-ribeirao-preto" className="text-accent hover:underline">fisioterapia esportiva</Link>, <Link to="/fortalecimento-para-corredores-ribeirao-preto" className="text-accent hover:underline">fortalecimento</Link> e nutrição para garantir que cada atleta se recupere melhor entre sessões de treino.
            </p>
          </div>
        </div>
      </section>

      {/* O Recovery dentro do Ecossistema CareFit */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-earth rounded-full flex items-center justify-center">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              O Recovery dentro do Ecossistema CareFit
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Na CareFit Run Base acreditamos que recuperação não é apenas descansar o corpo. <strong className="text-foreground">Recovery é parte de um sistema integrado de cuidado ao corredor.</strong>
            </p>
            <p>
              Nossa equipe é formada por profissionais que trabalham juntos na jornada do atleta:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-8">
            <div className="flex items-start gap-3 bg-background p-5 rounded-lg shadow-sm">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground"><Link to="/fisioterapia-para-corredores-ribeirao-preto" className="text-accent hover:underline font-medium">Fisioterapia esportiva</Link>, para tratar e prevenir lesões</span>
            </div>
            <div className="flex items-start gap-3 bg-background p-5 rounded-lg shadow-sm">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground"><Link to="/fortalecimento-para-corredores-ribeirao-preto" className="text-accent hover:underline font-medium">Fortalecimento específico para corrida</Link>, para suportar a carga de treino</span>
            </div>
            <div className="flex items-start gap-3 bg-background p-5 rounded-lg shadow-sm">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground"><strong>Nutrição esportiva</strong>, para sustentar recuperação e adaptação</span>
            </div>
            <div className="flex items-start gap-3 bg-background p-5 rounded-lg shadow-sm">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground"><strong>Protocolos de recovery</strong>, para acelerar a regeneração muscular</span>
            </div>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Essa integração é o que permite que corredores treinem com mais consistência, reduzam o risco de <Link to="/lesoes-na-corrida" className="text-accent hover:underline">lesões</Link> e evoluam na performance.
            </p>
            <p>
              É exatamente esse modelo que deu origem à CareFit Run Base: um espaço onde o corredor encontra um time completo trabalhando para sua jornada.
            </p>
          </div>
        </div>
      </section>

      {/* Por que a CareFit existe? */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Por que a CareFit existe?
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A CareFit Run Base nasceu da percepção de que muitos corredores treinam duro, mas não recebem o suporte necessário para recuperar, fortalecer e evoluir com segurança.
            </p>
            <p>
              Nosso time reúne profissionais que também vivem o universo da corrida e do endurance. Isso permite entender profundamente as demandas de quem treina para:
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6 mb-8">
            {["5 km", "10 km", "Meia maratona", "Maratona", "Triathlon"].map((dist, i) => (
              <span key={i} className="bg-muted px-5 py-2 rounded-full text-foreground font-medium text-sm">
                {dist}
              </span>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mais do que tratar lesões, nosso objetivo é ajudar cada corredor a construir uma <strong className="text-foreground">jornada sustentável no esporte</strong>.
          </p>
        </div>
      </section>

      {/* Por que recovery é importante */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Por que o recovery é importante para corredores?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A corrida gera impacto repetitivo sobre músculos, tendões e articulações. Sem recuperação adequada, esse estresse pode se acumular e aumentar o risco de <Link to="/lesoes-na-corrida" className="text-accent hover:underline">lesões</Link>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O recovery ajuda a:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {beneficiosRecovery.map((beneficio, index) => (
              <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{beneficio}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Para corredores que treinam para 5 km, 10 km, meia maratona, maratona ou triathlon, a recuperação adequada é fundamental para manter consistência no treinamento.
          </p>
        </div>
      </section>

      {/* Protocolos de Recovery */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12">
            Protocolos de Recovery na CareFit Run Base
          </h2>

          <div className="space-y-12">
            {/* Crioterapia */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-br from-accent to-earth p-8 flex items-center justify-center">
                    <Snowflake className="w-16 h-16 text-white" />
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Crioterapia (banheira de gelo)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      A imersão em água fria ajuda a reduzir inflamação, melhorar a circulação e acelerar a recuperação muscular após treinos intensos ou provas.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Benefícios:</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Redução da inflamação</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Recuperação muscular mais rápida</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Redução da dor muscular tardia</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compressão Pneumática */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-br from-secondary to-primary p-8 flex items-center justify-center">
                    <Wind className="w-16 h-16 text-white" />
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Compressão Pneumática</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      As botas de compressão utilizam pressão sequencial para melhorar o retorno venoso e acelerar a remoção de metabólitos acumulados após o exercício.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Benefícios:</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Melhora da circulação</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Redução de edema muscular</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Recuperação mais rápida entre treinos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liberação Miofascial */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-br from-warm to-accent p-8 flex items-center justify-center">
                    <Hand className="w-16 h-16 text-white" />
                  </div>
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Liberação Miofascial</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Técnicas de liberação miofascial ajudam a reduzir tensão muscular e melhorar a mobilidade.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Benefícios:</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Redução de rigidez muscular</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Melhora da mobilidade</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground">Prevenção de lesões</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery para quem treina sério */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-warm to-accent rounded-full flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Recovery para quem treina sério
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O recovery é especialmente importante para corredores que:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Treinam mais de 4 vezes por semana",
              "Estão em preparação para provas",
              "Fazem treinos longos (longões)",
              "Realizam treinos intervalados ou de intensidade",
              "Participam de maratonas ou triathlons",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nesses casos, a recuperação adequada pode ser a diferença entre evoluir no treino ou desenvolver uma lesão.
          </p>
        </div>
      </section>

      {/* Quando fazer recovery */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Quando o corredor deve fazer recovery?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O recovery é indicado especialmente:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {quandoFazer.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
                <Activity className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Corredores que mantêm rotinas de recovery apresentam menor incidência de lesões e melhor consistência de treino.
          </p>
        </div>
      </section>

      {/* Recovery e prevenção de lesões */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Recovery e prevenção de lesões
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A recuperação adequada é um dos fatores mais importantes para prevenir lesões como:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {lesoesPrevenidas.map((lesao, index) => (
              <Link key={index} to={lesao.link} className="flex items-center gap-3 bg-muted/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Heart className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-accent hover:underline">{lesao.nome}</span>
              </Link>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Na CareFit Run Base integramos recovery com:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
              <Link to="/fisioterapia-para-corredores-ribeirao-preto" className="text-accent hover:underline">Fisioterapia para corredores</Link>
            </li>
            <li className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
              <Link to="/fortalecimento-para-corredores-ribeirao-preto" className="text-accent hover:underline">Fortalecimento específico para corrida</Link>
            </li>
            <li className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
              <Link to="/avaliacao-do-corredor-ribeirao-preto" className="text-accent hover:underline">Avaliação biomecânica da corrida</Link>
            </li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Isso permite tratar e prevenir lesões com maior eficiência.
          </p>
        </div>
      </section>

      {/* Um time trabalhando pela sua corrida */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-earth to-secondary rounded-full flex items-center justify-center">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Um time trabalhando pela sua corrida
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Na CareFit Run Base o recovery não funciona isoladamente. Ele faz parte de um acompanhamento integrado com:
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
              <Link to="/fisioterapia-para-corredores-ribeirao-preto" className="text-accent hover:underline font-medium">Fisioterapia esportiva para corredores</Link>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
              <Link to="/fortalecimento-para-corredores-ribeirao-preto" className="text-accent hover:underline font-medium">Fortalecimento específico para corrida</Link>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground font-medium">Nutrição esportiva para endurance</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Essa integração permite olhar para o corredor de forma completa, considerando treinamento, recuperação, alimentação e prevenção de lesões.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* JSON-LD FAQ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-earth">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-white/90 text-lg mb-6">
            A CareFit Run Base é um centro especializado em fisioterapia esportiva para corredores em Ribeirão Preto, focado em performance, prevenção de lesões e longevidade no esporte.
          </p>
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Agende sua Sessão de Recovery na CareFit Run Base
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Se você é corredor ou triatleta em Ribeirão Preto e quer melhorar sua recuperação entre treinos, nossa equipe pode ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5516996008849&text=Olá! Gostaria de agendar uma sessão de recovery.', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5516996008849&text=Olá! Gostaria de agendar uma sessão de recovery.', '_blank')}
            >
              Agendar sessão de recovery
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <MapPin className="w-5 h-5" />
            <span>Av. Áurea Aparecida Bragheto Machado, 241 — Ribeirão Preto, SP</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecoveryCorredores;
