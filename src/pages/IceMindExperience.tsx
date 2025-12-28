import { Button } from "@/components/ui/button";
import { Brain, Snowflake, Users, CheckCircle, AlertTriangle, Target, Heart, Zap, ArrowRight } from "lucide-react";

const IceMindExperience = () => {
  const agendamentoLink = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2npLe6qCUpbwJTGStwst0pzCITxu_FuSzFO5QwrZ7_iP4JlY5pVfxbZ-prFUTT_moZve7sqC00";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2C5F6F] via-[#1e4a58] to-[#163842] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8933D] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#E8933D]/20 text-[#E8933D] rounded-full text-sm font-semibold uppercase tracking-wider">
                Ice Mind Experience
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Onde a Mente Encontra Seu Limite. <span className="text-[#E8933D]">E o Ultrapassa.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Uma jornada de 2 horas que une a ciência da psicologia e a resiliência do ultramaratonista 
              para destravar seu verdadeiro potencial mental. Porque a evolução nunca para.
            </p>
            
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Você já sentiu que sua mente é o seu maior limitador? Que o estresse te controla? 
              Que você tem potencial mas não consegue acessá-lo? Você não está sozinho. E há um caminho.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#E8933D] hover:bg-[#d4832f] text-white text-lg px-10 py-6 rounded-full font-bold shadow-lg shadow-[#E8933D]/30 transition-all hover:scale-105"
              onClick={() => window.open(agendamentoLink, '_blank')}
            >
              AGENDAR MINHA IMERSÃO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Section 2: Os Guias */}
      <section className="py-20 md:py-32 bg-[#2C5F6F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Você Não Está Sozinho. <span className="text-[#E8933D]">Você Tem Guias.</span>
            </h2>
            <p className="text-xl text-white/70">
              A Ciência Encontra a Experiência. Natalia e Gustavo trazem o conhecimento completo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Natalia Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E8933D] to-[#d4832f] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3D3D3D] mb-2 text-center">Natalia Garcia</h3>
              <p className="text-[#E8933D] font-semibold text-center mb-2">PSICÓLOGA | A CIÊNCIA DA MENTE</p>
              <p className="text-sm text-gray-500 text-center mb-4">CRP 06/155025 | Especialista em TCC</p>
              <p className="text-[#3D3D3D]/80 text-center leading-relaxed">
                Natalia traz o "porquê". Ela vai te dar o mapa da sua mente, mostrando como seus pensamentos 
                e crenças moldam sua realidade, especialmente sob pressão. A ciência por trás da transformação.
              </p>
            </div>
            
            {/* Gustavo Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2C5F6F] to-[#1e4a58] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Snowflake className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#3D3D3D] mb-2 text-center">Gustavo Rosa</h3>
              <p className="text-[#E8933D] font-semibold text-center mb-2">ULTRAMARATONISTA | A PRÁTICA DA RESILIÊNCIA</p>
              <p className="text-sm text-gray-500 text-center mb-4">130km | 20+ Ultramaratonas | Fundador CareFit</p>
              <p className="text-[#3D3D3D]/80 text-center leading-relaxed">
                Gustavo traz o "como". Ele viveu na pele o poder do gelo e da respiração para superar limites 
                que pareciam impossíveis. A experiência que valida a ciência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: O Plano */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-4">
              Seu Plano de <span className="text-[#E8933D]">Transformação Mental.</span>
            </h2>
            <p className="text-xl text-[#3D3D3D]/70">
              120 minutos que vão reconfigurar sua resposta ao estresse e ao desafio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Preparação */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2C5F6F] to-[#1e4a58] rounded-2xl p-8 h-full shadow-xl">
                <div className="text-6xl font-bold text-[#E8933D] mb-4">01</div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <span className="text-[#E8933D] text-sm font-semibold">45 MINUTOS</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">A MENTE SOBRE A MATÉRIA</h3>
                <p className="text-white/70 leading-relaxed">
                  Natalia e Gustavo integram ciência e experiência para te ensinar sobre o modelo mental da TCC, 
                  crenças limitantes e como a respiração é sua ferramenta de controle.
                </p>
              </div>
            </div>
            
            {/* Imersão */}
            <div className="relative md:mt-8">
              <div className="bg-gradient-to-br from-[#E8933D] to-[#d4832f] rounded-2xl p-8 h-full shadow-xl">
                <div className="text-6xl font-bold text-white/30 mb-4">02</div>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Snowflake className="w-7 h-7 text-white" />
                </div>
                <span className="text-white/80 text-sm font-semibold">45 MINUTOS</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">A PRÁTICA DA RESILIÊNCIA</h3>
                <p className="text-white/80 leading-relaxed">
                  Guiado por Gustavo e ancorado por Natalia, você aplicará as técnicas de respiração e mentalidade 
                  para navegar a experiência da imersão em gelo. Você vai descobrir sua força interior.
                </p>
              </div>
            </div>
            
            {/* Integração */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2C5F6F] to-[#1e4a58] rounded-2xl p-8 h-full shadow-xl">
                <div className="text-6xl font-bold text-[#E8933D] mb-4">03</div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <span className="text-[#E8933D] text-sm font-semibold">30 MINUTOS</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">DA SUPERAÇÃO À VIDA REAL</h3>
                <p className="text-white/70 leading-relaxed">
                  Em uma discussão em grupo, você vai conectar os pontos entre a experiência no gelo e os desafios 
                  da sua vida. A superação se torna uma ferramenta prática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Fracasso Evitado */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-8">
              O Que Acontece Se Você <span className="text-red-500">Não Agir?</span>
            </h2>
            
            <p className="text-xl text-[#3D3D3D]/70 leading-relaxed mb-8">
              Você continua vivendo com estresse crônico que se acumula dia após dia. 
              Sua mente continua controlando você, em vez de você controlar sua mente. 
              Você sabe que é capaz de mais, mas não consegue acessar esse potencial. 
              A ansiedade, o medo e as crenças limitantes continuam ditando suas decisões e suas reações.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#3D3D3D]/60">
              <span className="px-4 py-2 bg-white rounded-full shadow">Estresse acumulado</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">Potencial não acessado</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">Ansiedade constante</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">Crenças limitantes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Sucesso Alcançado */}
      <section className="py-20 md:py-32 bg-[#2C5F6F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              O Que Você Vai <span className="text-[#E8933D]">Ganhar</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#E8933D] rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">RESILIÊNCIA MENTAL</h3>
              <p className="text-white/70">
                Você aprende a transformar desconforto em força. Cada desafio se torna uma oportunidade de crescimento.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#E8933D] rounded-2xl flex items-center justify-center mx-auto mb-4 transform -rotate-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CONTROLE DO ESTRESSE</h3>
              <p className="text-white/70">
                Seu sistema nervoso é treinado para se acalmar sob pressão. O estresse deixa de ser seu inimigo.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#E8933D] rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">FOCO E CLAREZA</h3>
              <p className="text-white/70">
                Você alcança um estado de presença absoluta. Suas decisões vêm de um lugar de força, não de medo.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#E8933D] rounded-2xl flex items-center justify-center mx-auto mb-4 transform -rotate-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">COMUNIDADE DE SUPERADORES</h3>
              <p className="text-white/70">
                Você se conecta com pessoas que entendem a jornada. Juntos, vocês são mais fortes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Para Quem É */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-4">
                Você Está Pronto Para <span className="text-[#E8933D]">Ir Além?</span>
              </h2>
              <p className="text-xl text-[#3D3D3D]/70">Esta experiência é para você que é...</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Atleta buscando o próximo nível de performance mental.",
                "Profissional que vive sob alta pressão e quer dominar o estresse.",
                "Pessoa curiosa em busca de autoconhecimento e superação de limites.",
                "Corredor que sabe que a mente é tão importante quanto o corpo.",
                "Alguém que quer sair da zona de conforto de forma guiada e segura.",
                "Quem busca ferramentas práticas para lidar com ansiedade e pressão."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#E8933D] flex-shrink-0 mt-0.5" />
                  <p className="text-[#3D3D3D]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Final */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#2C5F6F] via-[#1e4a58] to-[#163842] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-[#E8933D] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sua Jornada de Transformação Mental{" "}
              <span className="text-[#E8933D]">Começa Aqui.</span>
            </h2>
            
            <p className="text-xl text-white/70 mb-8">
              Vagas limitadas para garantir uma experiência íntima e profunda. 
              Não é sobre coragem, é sobre decisão.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-white/60 text-sm mb-1">DURAÇÃO</p>
                  <p className="text-2xl font-bold text-white">2 Horas</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">FORMATO</p>
                  <p className="text-2xl font-bold text-white">Presencial</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">VAGAS</p>
                  <p className="text-2xl font-bold text-[#E8933D]">Limitadas</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-[#E8933D] hover:bg-[#d4832f] text-white text-xl px-12 py-7 rounded-full font-bold shadow-lg shadow-[#E8933D]/30 transition-all hover:scale-105"
              onClick={() => window.open(agendamentoLink, '_blank')}
            >
              GARANTIR MINHA VAGA
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <p className="text-white/50 mt-6 text-sm">
              Ao clicar, você será redirecionado para agendar sua experiência.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-10 bg-[#1e4a58]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60 text-sm">
            Ice Mind Experience é uma experiência da{" "}
            <span className="text-[#E8933D] font-semibold">CareFit RunBase</span>.
          </p>
          <p className="text-white/40 text-xs mt-2">
            A evolução nunca para.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IceMindExperience;
