import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, MessageCircle, Star, Target, Shield, Zap, Brain, Award, Flag, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import maratonaGrupo from "@/assets/maratona_grupo.jpg";

const ComunidadeCareFit = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=5516996008849&text=Olá! Gostaria de saber mais sobre a Comunidade CareFit.", "_blank");
  };

  const handleAgendar = () => {
    window.open("https://api.whatsapp.com/send?phone=5516996008849&text=Olá! Gostaria de agendar uma avaliação.", "_blank");
  };

  const pilares = [
    { icon: Heart, nome: "Recovery" },
    { icon: Shield, nome: "Fortalecimento" },
    { icon: Zap, nome: "Nutrição" },
    { icon: Brain, nome: "Mente" },
  ];

  const gruposBase = [
    { nome: "Base 10K", desc: "O primeiro passo na jornada da corrida" },
    { nome: "Propósito 21K", desc: "Evolução rumo à meia maratona" },
    { nome: "Transformação 42K", desc: "A jornada completa da maratona" },
  ];

  const gruposProvas = [
    "Esquadrão SP City",
    "Pelotão POA",
    "Elite NB POA",
    "Missão Berlim",
    "Legião Boston",
  ];

  const hubItems = [
    "Fisioterapia esportiva especializada",
    "Fortalecimento específico para corrida",
    "Nutrição esportiva para endurance",
    "Protocolos avançados de recovery",
    "Treinamento mental e resiliência",
  ];

  const beneficios = [
    "Trocar experiências com outros corredores",
    "Aprender sobre prevenção de lesões",
    "Compartilhar treinos e desafios",
    "Preparar provas em conjunto",
    "Receber orientação baseada em ciência",
  ];

  const valoresEmbaixadores = [
    "Constância",
    "Respeito ao corpo",
    "Disciplina",
    "Cuidado antes da dor",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-24 pb-20 min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${maratonaGrupo})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4">
            Comunidade CareFit
          </h1>
          <p className="text-2xl md:text-3xl font-montserrat font-semibold text-accent mb-8">
            Você não precisa correr sozinho.
          </p>

          <div className="max-w-3xl mx-auto space-y-4 text-lg text-white/90 font-poppins mb-10">
            <p>
              A corrida pode parecer um esporte individual, mas a jornada do corredor ganha um significado muito maior quando é compartilhada.
            </p>
            <p>
              A Comunidade CareFit nasceu para conectar corredores que buscam evolução, prevenção de lesões e performance com equilíbrio.
            </p>
            <p>
              Mais do que um centro de fisioterapia e performance, a CareFit Run Base se tornou um verdadeiro ponto de encontro para corredores de Ribeirão Preto e região.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsApp}>
              Entrar na Comunidade
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com a CareFit no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-8 text-center">
            Como nasceu a Comunidade CareFit
          </h2>

          <div className="space-y-6 text-lg text-foreground/80 font-poppins leading-relaxed">
            <p>A CareFit Run Base nasceu de uma pergunta simples:</p>
            <blockquote className="border-l-4 border-accent pl-6 py-2 text-xl font-montserrat font-semibold text-primary italic">
              "Por que esperar a dor chegar?"
            </blockquote>
            <p>
              A partir dessa inquietação surgiu um modelo de cuidado integrado ao corredor baseado em quatro pilares fundamentais:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {pilares.map((pilar) => (
                <Card key={pilar.nome} className="border-0 shadow-md bg-background text-center">
                  <CardContent className="p-6">
                    <pilar.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="font-montserrat font-bold text-primary">{pilar.nome}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p>
              Com o tempo percebemos algo ainda mais importante: a corrida não é apenas fisiologia, treinamento e recuperação.
            </p>
            <p className="text-xl font-montserrat font-semibold text-primary text-center">
              Ela também é conexão.
            </p>
            <p>
              Corredores treinam para as mesmas provas, enfrentam os mesmos desafios e celebram as mesmas conquistas — mas muitas vezes fazem isso sozinhos.
            </p>
            <p className="font-semibold text-primary">
              A Comunidade CareFit nasceu para mudar isso.
            </p>
            <p>
              Criamos um espaço onde corredores podem compartilhar experiências, aprender juntos e evoluir dentro de um ambiente focado em corrida, saúde e performance.
            </p>
          </div>
        </div>
      </section>

      {/* Hub do Corredor */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-8 text-center">
            O Hub do Corredor
          </h2>

          <p className="text-lg text-foreground/80 font-poppins mb-8 text-center">
            A CareFit Run Base se tornou um verdadeiro HUB para corredores. Aqui o atleta encontra:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {hubItems.map((item) => (
              <Card key={item} className="border-0 shadow-md bg-warm">
                <CardContent className="p-5 flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-poppins text-primary font-medium">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-lg text-foreground/80 font-poppins">
              Agora, com a Comunidade CareFit, também conectamos as histórias dos corredores.
            </p>
            <p className="text-xl font-montserrat font-bold text-accent">
              Porque evoluir junto é sempre mais poderoso.
            </p>
          </div>
        </div>
      </section>

      {/* Grupos */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-center">
            Os grupos da Comunidade CareFit
          </h2>
          <p className="text-lg text-white/80 font-poppins mb-12 text-center">
            A comunidade é organizada em grupos que refletem as diferentes jornadas dos corredores.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Grupos de Base */}
            <div>
              <h3 className="text-xl font-montserrat font-bold text-accent mb-6 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Grupos de Base
              </h3>
              <div className="space-y-4">
                {gruposBase.map((grupo) => (
                  <Card key={grupo.nome} className="border-0 bg-white/10 backdrop-blur text-white">
                    <CardContent className="p-5">
                      <h4 className="font-montserrat font-bold text-lg mb-1">{grupo.nome}</h4>
                      <p className="text-white/80 font-poppins text-sm">{grupo.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Grupos de Provas */}
            <div>
              <h3 className="text-xl font-montserrat font-bold text-accent mb-6 flex items-center gap-2">
                <Flag className="h-6 w-6" />
                Grupos de Provas Icônicas
              </h3>
              <div className="space-y-4">
                {gruposProvas.map((nome) => (
                  <Card key={nome} className="border-0 bg-white/10 backdrop-blur text-white">
                    <CardContent className="p-5">
                      <h4 className="font-montserrat font-bold text-lg">{nome}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-white/80 font-poppins mt-10">
            Cada grupo reúne corredores que compartilham a mesma jornada e preparação.
          </p>
        </div>
      </section>

      {/* Embaixadores */}
      <section className="py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-8 text-center">
            Embaixadores da Comunidade
          </h2>

          <div className="space-y-6 text-lg text-foreground/80 font-poppins leading-relaxed text-center max-w-3xl mx-auto">
            <p>Os grupos são conduzidos por corredores que vivem os valores da CareFit.</p>
            <p className="font-semibold text-primary">Chamamos esses líderes de Embaixadores.</p>
            <p>
              Eles compartilham suas jornadas reais de treinamento, recovery, nutrição e preparação para provas.
            </p>
            <p>Mais do que pace ou performance, os Embaixadores representam:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            {valoresEmbaixadores.map((valor) => (
              <Card key={valor} className="border-0 shadow-md bg-background text-center">
                <CardContent className="p-5">
                  <Award className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="font-montserrat font-bold text-primary text-sm">{valor}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-xl font-montserrat font-bold text-accent mt-8">
            Eles são os faróis da comunidade.
          </p>
        </div>
      </section>

      {/* Por que participar */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-8 text-center">
            Por que participar da Comunidade CareFit
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {beneficios.map((b) => (
              <Card key={b} className="border-0 shadow-md bg-warm">
                <CardContent className="p-5 flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-poppins text-primary">{b}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg text-foreground/80 font-poppins">
            Mais do que um grupo, é um ambiente onde corredores evoluem juntos.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-10">
            O Manifesto da Comunidade CareFit
          </h2>

          <div className="space-y-6 text-lg font-poppins leading-relaxed text-white/90">
            <p>Nós acreditamos que a corrida é uma jornada individual, mas que não precisa ser solitária.</p>
            <p>Criamos um ecossistema onde ciência, prevenção e performance se encontram.</p>
            <p>Agora conectamos também as histórias.</p>
            <p className="text-xl font-montserrat font-semibold text-accent">Aqui celebramos cada quilômetro.</p>
            <p className="text-xl font-montserrat font-semibold text-accent">Aqui respeitamos o processo.</p>
            <p className="text-xl font-montserrat font-semibold text-accent">Aqui o cuidado vem antes da dor.</p>
            <p className="text-2xl font-montserrat font-bold text-white mt-8">
              Você não precisa correr sozinho.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-accent via-secondary to-accent text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Faça parte da Comunidade CareFit
          </h2>
          <p className="text-lg font-poppins mb-8 text-white/90">
            Se você é corredor ou triatleta em Ribeirão Preto e quer evoluir com quem entende a sua jornada, venha para a comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 font-montserrat font-semibold"
              onClick={handleWhatsApp}
            >
              Entrar para a Comunidade CareFit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-montserrat font-semibold"
              onClick={handleAgendar}
            >
              Agendar Avaliação na CareFit Run Base
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComunidadeCareFit;
