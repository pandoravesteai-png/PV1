/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Zap, 
  Users, 
  ChevronDown,
  Smartphone,
  Layers,
  Maximize2,
  Palette,
  Gift,
  Check,
  Sparkles,
  X
} from 'lucide-react';

export default function App() {
  const [modalContent, setModalContent] = React.useState<{ title: string; content: string; isCTA?: boolean } | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden w-full">
      {/* Modal Popup */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-2xl relative border border-slate-100 overflow-hidden"
          >
            {modalContent.isCTA && (
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-gradient" />
            )}
            
            <button 
              onClick={() => setModalContent(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative">
              {modalContent.isCTA && (
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  Oferta Exclusiva
                </div>
              )}
              
              <h3 className={`text-3xl md:text-4xl font-display font-black mb-6 leading-tight ${modalContent.isCTA ? 'text-slate-900' : 'text-brand-600'}`}>
                {modalContent.title}
              </h3>
              
              <div className="text-slate-600 text-lg leading-relaxed mb-8">
                <p>{modalContent.content}</p>
              </div>

              {modalContent.isCTA ? (
                <motion.button 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 10px 25px -5px rgba(168, 85, 247, 0.4)",
                      "0 20px 35px -5px rgba(168, 85, 247, 0.6)",
                      "0 10px 25px -5px rgba(168, 85, 247, 0.4)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  onClick={() => window.open('https://pandoravesteai.com/', '_blank')}
                  className="w-full py-6 bg-brand-gradient text-white rounded-full font-black text-xl shadow-xl flex items-center justify-center gap-3 group"
                >
                  Testar Grátis Agora
                  <Zap className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                </motion.button>
              ) : (
                <button 
                  onClick={() => setModalContent(null)}
                  className="w-full py-4 bg-brand-gradient text-white rounded-full font-bold shadow-lg"
                >
                  Entendido
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
      {/* Section 1: Full Screen Video Intro */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background GIF with Overlay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <img 
            src="https://i.postimg.cc/fTYtXLg3/pan-(7).gif" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Centered Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-white text-4xl md:text-7xl lg:text-8xl font-serif italic tracking-wider text-center px-4 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
          >
            O SEU PROVADOR VIRTUAL
          </motion.h2>
        </div>
        
        {/* Purple Gradient Footer with Logo */}
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-brand-900 via-brand-700/80 to-transparent z-20 flex flex-col items-center justify-end pb-8 gap-4">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            src="https://i.postimg.cc/C5d2qDLj/pan.png" 
            alt="Pandora AI Logo" 
            className="w-48 md:w-72 h-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 z-30"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      {/* Section 2: Hero Text Content (Now AFTER the GIF) */}
      <section className="pt-12 pb-8 px-4 bg-white relative z-30">
        {/* Subtle Top Gradient for transition */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-50/50 to-transparent pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight"
          >
            O provador dos seus sonhos, <br className="hidden md:block" />
            <span className="text-brand-600">direto no seu celular.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium tracking-tight mb-12"
          >
            Chega de frustração com roupas que não servem. Com o Pandora AI, você experimenta qualquer look instantaneamente, nas suas fotos, com realismo impressionante.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => setModalContent({
                title: "Você Ganhou um Teste Grátis! 🎁",
                content: "Teste agora mesmo um look em menos de 30 segundos! Use exclusivamente nossa tecnologia e veja o resultado com realismo impressionante.",
                isCTA: true
              })}
              className="w-full sm:w-auto px-10 py-5 bg-brand-gradient text-white rounded-full font-bold text-xl transition-all shadow-xl shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
            >
              Começar Agora
              <Zap className="w-6 h-6 fill-current" />
            </button>
            <a 
              href="#showcase"
              className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-full font-bold text-xl transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
            >
              Ver Demonstração
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bloco: Provas e Autoridade */}
      <section className="pt-5 pb-12 px-4 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 tracking-tight">Provas Reais de Transformação</h2>
            <p className="text-slate-500 text-lg">Veja como a nossa IA entende o seu corpo e o seu estilo.</p>
          </div>

          {/* Carousel Simulado */}
          <div className="grid md:grid-cols-2 gap-5 mb-20">
            {[
              { singleImage: "https://i.postimg.cc/Fzw7t2WQ/Untitled-design-(5).jpg", label: "Look Casual" },
              { singleImage: "https://i.postimg.cc/Dyrm8YmS/Untitled-design-(6).jpg", label: "Look Formal" }
            ].map((item: any, i) => (
              <div key={i} className="group relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl">
                {item.singleImage ? (
                  <div className="relative">
                    <img src={item.singleImage} alt={item.label} className="w-full h-[500px] object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Original</div>
                    <div className="absolute top-4 right-4 bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Pandora AI</div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img src={item.before} alt="Antes" className="w-full h-[500px] object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Original</div>
                    </div>
                    <div className="relative">
                      <img src={item.after} alt="Depois" className="w-full h-[500px] object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 right-4 bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Pandora AI</div>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-display font-bold text-xl">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-16">
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-500 text-brand-500" />)}
              </div>
              <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">
                "Eu sempre tive medo de comprar vestidos online. Com o Pandora AI, eu 'provei' o modelo antes de comprar e acertei de primeira! Economizei tempo e dinheiro."
              </p>
              <p className="font-display font-bold text-lg text-slate-900">– Juliana S.</p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-500 text-brand-500" />)}
              </div>
              <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">
                "Eu queria ver como ia ficar com a nova camisa da seleção brasileira. Testei no app, gostei demais do resultado e acabei comprando a camisa na hora!"
              </p>
              <p className="font-display font-bold text-lg text-slate-900">– Ricardo M.</p>
            </div>
          </div>

          {/* Bloco: Diálogo WhatsApp */}
          <div className="mb-20">
            <div className="max-w-xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-[3rem] p-8 md:p-12 shadow-inner border border-slate-200 relative overflow-hidden"
              >
                {/* Chat Header */}
                <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                    <span className="font-bold">A</span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900 text-lg">Amiga ✨</p>
                    <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      online
                    </p>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white p-5 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-left border border-slate-100">
                      <p className="text-slate-800 text-lg">Ei, não usa o ChatGPT pra criar imagem da sua roupa da Shopee não! ❌</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-end"
                  >
                    <div className="bg-brand-50 p-5 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-left border border-brand-100">
                      <p className="text-slate-800 text-lg">Verdade amiga, sempre muda meu rosto... Mas qual vou usar então? 🤔</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-start"
                  >
                    <div className="bg-brand-600 p-5 rounded-2xl rounded-tl-none shadow-lg max-w-[85%] text-left">
                      <p className="text-white text-xl font-bold">Usa o Pandora AI!</p>
                      <p className="text-white/80 text-sm mt-1">É o único que mantém seu rosto real.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-10 rounded-[3rem] bg-brand-900 text-white shadow-2xl border border-white/10 max-w-3xl w-full mx-4">
              <div className="flex -space-x-4 flex-shrink-0">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-brand-900 shadow-xl object-cover" 
                    alt="User" 
                    referrerPolicy="no-referrer" 
                  />
                ))}
              </div>
              <div className="text-center md:text-left">
                <p className="font-display font-black text-xl md:text-3xl leading-tight mb-2">
                  Mais de 50.000 looks gerados apenas este mês.
                </p>
                <p className="text-brand-300 text-sm md:text-lg font-medium opacity-80">
                  Tecnologia validada por especialistas em moda e tecnologia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco: O Mecanismo Único */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-6xl font-display font-black text-slate-900 leading-tight">
              O Que Nos Diferencia?
            </h2>
            <div className="w-24 h-2 bg-brand-600 rounded-full mx-auto"></div>
            <p className="text-xl md:text-3xl text-slate-600 leading-relaxed font-light max-w-4xl mx-auto">
              Enquanto outros apps apenas 'colam' uma imagem, o <span className="text-brand-600 font-black">Pandora AI</span> utiliza a Tecnologia de Mapeamento Corporal GenAI. Nossa inteligência artificial entende suas curvas, a iluminação da sua foto e as texturas dos tecidos para entregar um resultado que parece uma fotografia real. <span className="font-bold text-slate-900 underline decoration-brand-500 decoration-4">Não é apenas um filtro, é o seu novo guarda-roupa digital.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bloco: Cutucando a Dor e Apresentando a Solução */}
      <section className="pt-16 pb-1 px-4 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="inline-block px-4 py-1 rounded-lg bg-brand-900 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                O Problema
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 leading-[1.1] tracking-tight">
                O fim da frustração nas <span className="text-brand-600">compras online.</span>
              </h2>
              <div className="w-24 h-2 bg-brand-600 rounded-full"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="space-y-6 text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                <p>
                  Você já passou pela frustração de comprar uma roupa online e, quando ela chegou, não era nada do que você imaginava? Ou pior, ter que enfrentar filas de provadores com luzes ruins e espelhos que não ajudam?
                </p>
                <p className="font-bold text-slate-900 border-l-4 border-brand-600 pl-6 py-2 bg-brand-50/50 rounded-r-2xl">
                  A dúvida de "será que isso fica bem em mim?" impede você de expressar seu verdadeiro estilo.
                </p>
                <p>
                  O <span className="text-brand-600 font-black">Pandora AI</span> nasceu para acabar com essa insegurança. Nós transformamos sua foto em um manequim virtual ultra-realista, onde o limite é apenas a sua imaginação.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloco: Exclusividade */}
      <section className="pt-1 pb-16 px-4 bg-slate-900 text-white rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl overflow-hidden relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-6xl font-display font-black leading-tight tracking-tighter mb-8 max-w-4xl">
              Não use Gemini, não use ChatGPT ou outra IA genérica. <br className="hidden md:block" />
              <span className="text-brand-400">Use o Pandora AI.</span>
            </h2>

            <div className="w-full max-w-2xl p-2 md:p-4 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center gap-0.5">
              <div className="flex flex-col items-center gap-0">
                <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/C5d2qDLj/pan.png" 
                    alt="Pandora AI Logo" 
                    className="w-full h-full object-contain scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center -mt-8 md:-mt-12 relative z-20">
                  <p className="text-brand-400 text-base md:text-xl font-bold uppercase tracking-[0.2em]">O Especialista</p>
                </div>
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-slate-300 text-center font-light italic max-w-md pb-4">
                "O Pandora AI é a única ferramenta treinada especificamente para moda, eliminando a incerteza e entregando resultados perfeitos."
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* Bloco: Apresentação do Produto */}
      <section id="showcase" className="pt-20 pb-7 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <motion.h2 
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl md:text-6xl font-display font-black text-brand-600 leading-tight"
              >
                Apresentamos o Pandora AI.
              </motion.h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                O aplicativo definitivo para quem ama moda e tecnologia. Com uma interface intuitiva e o motor de IA mais potente do mercado, você tem um consultor de estilo e um provador infinito no seu bolso.
              </p>
              <button 
                onClick={() => setModalContent({
                  title: "Sua Jornada Começa Aqui! ✨",
                  content: "Você ganhou um teste grátis! Experimente agora mesmo um look em menos de 30 segundos. Use exclusivamente nossa IA e veja a mágica acontecer.",
                  isCTA: true
                })}
                className="w-full sm:w-auto px-10 py-5 bg-brand-gradient text-white rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                Começar Agora
                <Zap className="w-6 h-6 fill-current" />
              </button>
            </div>

            {/* Showcase Images */}
            <div className="relative flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden border-[8px] border-brand-600 shadow-2xl"
              >
                <img 
                  src="https://i.postimg.cc/1z2vkRxS/Untitled-design-(3).gif" 
                  alt="Pandora AI Showcase 1" 
                  className="w-full max-w-[320px] h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10 rounded-[3rem] overflow-hidden border-[8px] border-brand-600 shadow-2xl"
              >
                <img 
                  src="https://i.postimg.cc/tgkx62kQ/Untitled-design-(4).gif" 
                  alt="Pandora AI Showcase 2" 
                  className="w-full max-w-[320px] h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Background Glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[600px] bg-brand-500/30 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco: Conteúdo por Dentro */}
      <section className="pt-7 pb-7 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 tracking-tight text-brand-600">Look Perfeito</h2>
            <p className="text-slate-600 text-lg font-medium">Módulos exclusivos desenvolvidos para a sua liberdade criativa.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Troca Instantânea", desc: "Mude camisas, bermudas, saias ou vestidos em um toque.", icon: <Layers className="w-6 h-6" /> },
              { title: "Visão 360º", desc: "Visualize-se de frente, de lado e de costas (Plano Premium).", icon: <Maximize2 className="w-6 h-6" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco: Bônus Exclusivos */}
      <section className="pt-7 pb-7 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 tracking-tight text-brand-600">Bônus Exclusivos</h2>
            <p className="text-slate-600 text-lg font-medium">Aceleradores de estilo para quem quer ir além.</p>
          </div>

          <div className="space-y-6">
            {[
              { title: "Guia Digital 'Combinações de Cores'", desc: "Valorize seu tom de pele com as cores certas.", value: "R$ 97,00", icon: <Gift className="w-6 h-6" /> },
              { title: "Acesso à Comunidade VIP", desc: "Compartilhe criações e tendências com outros usuários.", value: "R$ 197,00", icon: <Users className="w-6 h-6" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <span className="text-slate-400 line-through text-sm block mb-1">Valor: {item.value}</span>
                  <span className="text-teal-600 font-black text-xl uppercase tracking-widest">Hoje: Grátis</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco: Resumo das Vantagens */}
      <section className="pt-7 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 tracking-tight text-brand-600">Vantagens Incomparáveis</h2>
            <p className="text-slate-600 text-lg font-medium">Por que escolher o Pandora AI para sua jornada de estilo.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Provador 24h", desc: "Experimente qualquer look a qualquer hora do dia ou da noite.", icon: <Check className="w-6 h-6" /> },
              { title: "Visão Completa", desc: "Visualize o look da cabeça aos pés com realismo impressionante.", icon: <Check className="w-6 h-6" /> },
              { title: "Economia Real", desc: "Compre apenas o que você tem certeza que fica bem em você.", icon: <Check className="w-6 h-6" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco: Oferta Irresistível */}
      <section id="precos" className="py-7 px-4 bg-brand-900 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-7">
            <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-2 tracking-tight">Escolha o plano que vai transformar seu estilo hoje</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {/* Plano Essencial */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[3rem] text-white flex flex-col">
              <h3 className="text-2xl font-display font-bold mb-4">Plano Essencial</h3>
              <div className="mb-8">
                <span className="text-5xl font-display font-black">R$ 19,90</span>
                <span className="text-brand-300 text-lg block mt-1">Pagamento Único</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-400" /> 100 Créditos</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-400" /> 10 Imagens geradas</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-400" /> Troca de peças unitárias</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-400" /> Rosto 100% (Mantendo características)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-400" /> Corpo 100% (Mantendo características)</li>
              </ul>
              <button 
                onClick={() => setModalContent({
                  title: "Escolha seu Plano Ideal 🚀",
                  content: "Você acaba de ganhar um teste grátis! Use exclusivamente nossa tecnologia por 30 segundos e veja como o Pandora AI transforma seu estilo.",
                  isCTA: true
                })}
                className="w-full py-5 bg-white text-brand-900 rounded-full font-black text-lg hover:bg-brand-100 transition-all"
              >
                COMEÇAR AGORA
              </button>
            </div>

            {/* Plano Premium */}
            <div className="bg-white p-12 rounded-[3rem] text-slate-900 flex flex-col relative shadow-2xl scale-105">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gradient text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">Mais Escolhido</div>
              <h3 className="text-2xl font-display font-bold mb-4">Plano Premium</h3>
              <div className="mb-8">
                <span className="text-slate-400 line-through text-xl block">De R$ 149,90</span>
                <span className="text-5xl font-display font-black text-brand-600">R$ 29,90</span>
                <span className="text-slate-500 text-lg">/mês</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-600" /> 300 Créditos Mensais</li>
                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-600" /> Até 30 Imagens geradas</li>
                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-600" /> Visão 360º (Frente, Costas e Lado)</li>
                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-600" /> Bônus: Pack de Looks Exclusivos</li>
                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-600" /> Grupo VIP: Cupons 60% Shopee e Shein</li>
                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-600" /> Suporte Prioritário via WhatsApp</li>
                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-600" /> Download em qualquer proporção (IG, TikTok)</li>
                <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-600" /> Mantém traços reais do rosto e corpo</li>
              </ul>
              <button 
                onClick={() => setModalContent({
                  title: "Acesso Premium Liberado! 💎",
                  content: "Você ganhou um teste grátis! Use exclusivamente o poder total do Pandora AI agora mesmo em menos de 30 segundos.",
                  isCTA: true
                })}
                className="w-full py-6 bg-brand-gradient text-white rounded-full font-black text-xl transition-all shadow-xl shadow-purple-500/30"
              >
                COMEÇAR AGORA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco: Garantia e FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Garantia */}
          <div className="text-center mb-16 p-12 rounded-[3rem] bg-white border border-slate-200 shadow-xl">
            <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black mb-6 tracking-tight">Risco Zero</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Experimente o Pandora AI por <span className="font-bold text-slate-900">7 dias</span>. Se você não ficar impressionado com o realismo das suas fotos, devolvemos <span className="font-bold text-slate-900">100%</span> do seu investimento.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-3xl md:text-5xl font-display font-black text-center mb-16 tracking-tight">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "Como recebo os créditos?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de login e os créditos já estarão disponíveis na sua conta." },
              { q: "Preciso de fotos profissionais?", a: "Não! Fotos comuns de celular com boa iluminação funcionam perfeitamente! Nossa IA foi treinada para lidar com fotos do dia a dia." },
              { q: "Posso cancelar quando quiser?", a: "Sim, a assinatura do Plano Premium pode ser cancelada a qualquer momento diretamente no seu painel de controle, sem taxas escondidas." }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:border-brand-300 transition-all duration-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer font-display font-bold text-xl list-none">
                  {item.q}
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ChevronDown className="w-5 h-5 text-brand-600" />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-slate-600 leading-relaxed text-lg">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-2xl tracking-tight">Pandora AI</span>
            </div>
            
            <div className="flex gap-12 text-sm font-bold text-brand-600 uppercase tracking-widest">
              <a href="#precos" className="hover:text-brand-700 transition-colors">Planos</a>
              <button 
                onClick={() => setModalContent({
                  title: "Suporte",
                  content: "Mande um email para a nossa equipe: contato@pandoravesteai.com"
                })}
                className="hover:text-brand-700 transition-colors"
              >
                Suporte
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-8 pt-12 border-t border-slate-300/50 text-center">
            <p className="text-slate-400 text-sm font-medium">
              © 2026 Pandora AI. Transforme seu estilo com IA.
            </p>
            <div className="flex gap-8 text-xs font-bold text-brand-600 uppercase tracking-widest">
              <button 
                onClick={() => setModalContent({
                  title: "Termos de Uso",
                  content: "Ao utilizar o Pandora AI, você concorda em usar nossa tecnologia de forma ética. Suas fotos são processadas apenas para gerar os provadores virtuais e não são compartilhadas com terceiros sem seu consentimento."
                })}
                className="hover:text-brand-700 transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={() => setModalContent({
                  title: "Privacidade",
                  content: "Sua privacidade é nossa prioridade. Utilizamos criptografia de ponta a ponta e seguimos rigorosamente a LGPD para garantir que seus dados biométricos e fotos pessoais estejam sempre protegidos."
                })}
                className="hover:text-brand-700 transition-colors"
              >
                Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
