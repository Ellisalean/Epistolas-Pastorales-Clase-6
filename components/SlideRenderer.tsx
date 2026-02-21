
import React, { useState, useEffect } from 'react';
import { Slide, RevealItem } from '../types';
import * as LucideIcons from 'lucide-react';
import { useLessonStore } from '../store/useLessonStore';

interface SlideRendererProps {
  slide: Slide;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  if (!slide) return null;

  const { markSlideComplete, setNote, notes, currentSlideIndex, resetLesson } = useLessonStore();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<RevealItem | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<RevealItem | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [isAppClosing, setIsAppClosing] = useState(false);

  useEffect(() => {
    setActiveTab(0);
    setActiveHotspot(null);
    setSelectedOption(null);
    setExpandedItem(null);
    setFlippedCards({});
    setIsAppClosing(false);
  }, [currentSlideIndex, slide.id]);

  const toggleCard = (idx: number) => {
    setFlippedCards(prev => {
      const newState = { ...prev, [idx]: !prev[idx] };
      markSlideComplete(currentSlideIndex);
      return newState;
    });
  };

  const renderIcon = (iconName: string, size = 24) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent size={size} />;
    }
    return <LucideIcons.Info size={size} />;
  };

  const isBg = slide.visual.position === 'background';

  if (isAppClosing) {
    return (
      <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
         <div className="w-24 h-24 bg-red-600 rounded-full animate-ping opacity-25 absolute" />
         <p className="text-white font-black uppercase tracking-[0.8em] animate-pulse">Sesión Finalizada</p>
      </div>
    );
  }

  if (slide.type === 'completion') {
    return (
      <div className="h-full w-full relative flex items-center justify-center overflow-hidden bg-[#111111] p-12 lg:p-24">
         <div className="absolute inset-0 z-0">
           <img src={slide.visual.source} className="w-full h-full object-cover opacity-30" alt="" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]" />
         </div>
         <div className="relative z-10 text-center space-y-12 animate-in zoom-in-95 duration-1000 max-w-4xl">
            <div className="inline-block p-6 bg-red-600 rounded-[2.5rem] shadow-[0_0_50px_rgba(239,68,68,0.5)] animate-bounce mb-8">
               {renderIcon('Trophy', 64)}
            </div>
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none">{slide.title}</h2>
              <p className="text-xl lg:text-3xl font-bold text-red-500 uppercase tracking-[0.4em]">{slide.subtitle}</p>
            </div>
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed opacity-90">{slide.content}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-10">
               <button onClick={resetLesson} className="px-12 py-6 bg-white/5 border border-white/10 rounded-full font-black uppercase text-xs tracking-[0.4em] hover:bg-red-600 transition-all flex items-center gap-3">
                 {renderIcon('RotateCcw', 18)} Reiniciar Curso
               </button>
               <button onClick={() => setIsAppClosing(true)} className="px-12 py-6 bg-red-600 rounded-full font-black uppercase text-xs tracking-[0.4em] shadow-xl hover:scale-105 transition-all">
                 Finalizar Sesión
               </button>
            </div>
         </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative flex flex-col overflow-y-auto custom-scrollbar bg-[#111111]">
      {isBg && (
        <div className="absolute inset-0 z-0">
          <img src={slide.visual.source} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
        </div>
      )}

      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center ${['timeline', 'flashcards', 'tabs-reveal', 'hotspot-reveal', 'keynote-cards', 'split-stacked-reveal', 'hermeneutics'].includes(slide.type) ? 'p-0' : 'p-8 lg:p-12 max-w-7xl mx-auto w-full'}`}>
        
        {/* Intro */}
        {slide.type === 'intro' && (
          <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
            <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none">{slide.title}</h2>
            <p className="text-xl lg:text-3xl font-bold text-red-500 uppercase tracking-[0.4em]">{slide.subtitle}</p>
            <p className="text-xl lg:text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed">{slide.content}</p>
          </div>
        )}

        {/* Tabs Reveal */}
        {slide.type === 'tabs-reveal' && slide.interaction?.revealItems && (
          <div className="h-full w-full flex flex-col p-8 lg:p-16">
             <div className="mb-6"><h2 className="text-4xl font-black text-white uppercase">{slide.title}</h2></div>
             <div className="flex-1 flex flex-col">
                <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
                   {slide.interaction.revealItems.map((item, idx) => (
                      <button key={idx} onClick={() => setActiveTab(idx)} className={`px-8 py-4 rounded-t-2xl font-black uppercase text-[10px] tracking-widest shrink-0 ${activeTab === idx ? 'bg-white text-black' : 'bg-white/5 text-white/40'}`}>
                         {item.title}
                      </button>
                   ))}
                </div>
                <div className="flex-1 flex flex-col lg:flex-row bg-white rounded-b-3xl rounded-tr-3xl overflow-hidden shadow-2xl">
                   <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center gap-6 overflow-y-auto">
                      <h3 className="text-3xl font-black text-black uppercase">{slide.interaction.revealItems[activeTab].title}</h3>
                      <p className="text-lg text-red-600 font-bold italic">"{slide.interaction.revealItems[activeTab].text}"</p>
                      <p className="text-xl font-light text-slate-600 leading-relaxed">{slide.interaction.revealItems[activeTab].longContent}</p>
                   </div>
                   <div className="flex-1 relative min-h-[300px]"><img src={slide.interaction.revealItems[activeTab].image} className="absolute inset-0 w-full h-full object-cover" alt="" /></div>
                </div>
             </div>
          </div>
        )}

        {/* Keynote Cards */}
        {slide.type === 'keynote-cards' && slide.interaction?.revealItems && (
          <div className="h-full w-full bg-[#e5e7eb] flex flex-col items-center p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d1d5db] skew-x-12 translate-x-1/4 z-0" />
            
            <div className="relative z-10 w-full max-w-7xl">
               <div className="mb-12">
                  <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">{slide.subtitle}</p>
                  <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-none uppercase tracking-tighter max-w-2xl">{slide.title}</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {slide.interaction.revealItems.map((item, idx) => (
                    <div key={idx} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group animate-in slide-in-from-bottom-6 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                       <div className="p-10 flex flex-col items-center text-center space-y-6 flex-1">
                          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                             {renderIcon(item.icon, 28)}
                          </div>
                          <h4 className="text-lg font-black uppercase text-slate-900 tracking-tight">{item.title}</h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed truncate-3-lines">{item.text}</p>
                       </div>
                       <button onClick={() => { setExpandedItem(item); markSlideComplete(currentSlideIndex); }} className="w-full bg-[#0a0d14] p-6 flex items-center gap-3 text-white transition-colors hover:bg-red-600">
                          {renderIcon('Search', 16)}
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Leer más</span>
                       </button>
                    </div>
                  ))}
               </div>
            </div>

            {expandedItem && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 animate-in zoom-in-95 duration-300">
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setExpandedItem(null)} />
                  <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                     <div className="lg:w-1/2 relative min-h-[300px]">
                        <img src={expandedItem.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                           <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-4">
                              {renderIcon(expandedItem.icon, 24)}
                           </div>
                           <h4 className="text-3xl font-black uppercase tracking-tighter">{expandedItem.title}</h4>
                        </div>
                     </div>
                     <div className="flex-1 p-12 lg:p-16 flex flex-col gap-8 bg-slate-50 max-h-[80vh] overflow-y-auto custom-scrollbar">
                        <div className="space-y-4">
                           <p className="text-xs font-black text-red-500 uppercase tracking-widest">{expandedItem.text}</p>
                           <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-light whitespace-pre-wrap">
                              {expandedItem.longContent}
                           </p>
                        </div>
                        <div className="mt-auto border-t border-slate-200 pt-8">
                           <button onClick={() => setExpandedItem(null)} className="px-10 py-5 bg-black rounded-full text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition-colors">
                              Cerrar
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
          </div>
        )}

        {/* Hotspot Reveal */}
        {slide.type === 'hotspot-reveal' && slide.interaction?.revealItems && (
           <div className="h-full w-full relative">
              <img src={slide.visual.source} className="w-full h-full object-cover opacity-50" alt="" />
              <div className="absolute top-12 left-12"><h2 className="text-5xl font-black text-white uppercase">{slide.title}</h2></div>
              {slide.interaction.revealItems.map((item, idx) => (
                 <button key={idx} style={{ left: `${item.x}%`, top: `${item.y}%` }} onClick={() => setActiveHotspot(item)} className="absolute w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse -translate-x-1/2 -translate-y-1/2 z-20">
                    {renderIcon(item.icon, 20)}
                 </button>
              ))}
              {activeHotspot && (
                 <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
                    <div className="bg-white rounded-[3rem] p-12 max-w-2xl w-full shadow-2xl relative">
                       <button onClick={() => setActiveHotspot(null)} className="absolute top-8 right-8 p-2 bg-slate-100 rounded-full text-slate-400 hover:text-black transition-all">{renderIcon('X', 20)}</button>
                       <h4 className="text-3xl font-black text-black uppercase mb-4">{activeHotspot.title}</h4>
                       <p className="text-lg text-slate-600 leading-relaxed">{activeHotspot.longContent}</p>
                       <button onClick={() => { setActiveHotspot(null); markSlideComplete(currentSlideIndex); }} className="mt-8 px-10 py-4 bg-red-600 rounded-full text-white font-black uppercase text-xs">Cerrar</button>
                    </div>
                 </div>
              )}
           </div>
        )}

        {/* Flashcards */}
        {slide.type === 'flashcards' && slide.interaction?.revealItems && (
          <div className="h-full w-full flex flex-col items-center justify-center p-8 lg:p-16 gap-10 overflow-y-auto custom-scrollbar">
             <h2 className="text-4xl font-black text-white uppercase">{slide.title}</h2>
             <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
                {slide.interaction.revealItems.map((item, idx) => (
                   <div key={idx} onClick={() => toggleCard(idx)} className="perspective-1000 w-full sm:w-80 h-[450px] cursor-pointer">
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[idx] ? 'rotate-y-180' : ''}`}>
                         <div className="absolute inset-0 backface-hidden bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                            <img src={item.image} className="flex-1 object-cover" alt="" />
                            <div className="p-8 text-center"><h4 className="text-xl font-black text-black uppercase">{item.title}</h4><p className="text-xs font-bold text-red-600 mt-2 uppercase tracking-widest">Ver detalle</p></div>
                         </div>
                         <div className="absolute inset-0 backface-hidden bg-red-600 rounded-3xl shadow-2xl rotate-y-180 flex flex-col items-center justify-center p-10 text-center">
                            <h4 className="text-2xl font-black text-white uppercase mb-6">{item.title}</h4>
                            <p className="text-lg text-white font-medium leading-relaxed">{item.text}</p>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        )}

        {/* Timeline (Used as a stepped reveal) */}
        {slide.type === 'timeline' && slide.interaction?.revealItems && (
          <div className="h-full w-full flex flex-col p-8 lg:p-16 bg-[#1a1a1a]">
             <h2 className="text-4xl font-black text-white uppercase mb-10">{slide.title}</h2>
             <div className="flex-1 flex gap-10 overflow-hidden">
                <div className="w-80 space-y-4 overflow-y-auto custom-scrollbar shrink-0">
                   {slide.interaction.revealItems.map((item, idx) => (
                      <button key={idx} onClick={() => setActiveTab(idx)} className={`w-full p-6 text-left rounded-2xl border transition-all ${activeTab === idx ? 'bg-red-600 border-red-500 text-white' : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'}`}>
                         <p className="text-sm font-black uppercase tracking-widest">{item.title}</p>
                      </button>
                   ))}
                </div>
                <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-w-0">
                   <div className="flex-1 p-12 lg:p-20 overflow-y-auto custom-scrollbar">
                      <h3 className="text-4xl font-black text-black uppercase mb-6">{slide.interaction.revealItems[activeTab].title}</h3>
                      <p className="text-xl font-light text-slate-700 leading-relaxed mb-8 whitespace-pre-wrap">{slide.interaction.revealItems[activeTab].longContent}</p>
                   </div>
                   <div className="flex-1 relative min-h-[300px]"><img src={slide.interaction.revealItems[activeTab].image} className="absolute inset-0 w-full h-full object-cover" alt="" /></div>
                </div>
             </div>
          </div>
        )}

        {/* Split Visual */}
        {slide.type === 'split-visual' && (
          <div className="h-full w-full flex flex-col lg:flex-row overflow-y-auto custom-scrollbar">
             <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center gap-8 bg-[#1a1a1a]">
                <h2 className="text-5xl font-black text-white uppercase leading-none">{slide.title}</h2>
                <p className="text-2xl font-light text-slate-300">{slide.content}</p>
                {slide.bullets && (
                   <ul className="space-y-4">
                      {slide.bullets.map((b, i) => <li key={i} className="flex gap-4 text-lg text-white font-medium"><div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0" />{b}</li>)}
                   </ul>
                )}
             </div>
             <div className="flex-1 relative min-h-[400px]"><img src={slide.visual.source} className="absolute inset-0 w-full h-full object-cover" alt="" /></div>
          </div>
        )}

        {/* Split Stacked Reveal */}
        {slide.type === 'split-stacked-reveal' && slide.interaction?.revealItems && (
          <div className="w-full h-full flex flex-col lg:flex-row overflow-hidden bg-white">
            <div className="lg:w-[45%] h-full flex flex-col justify-center p-12 lg:p-20 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 w-full h-full bg-[#f4f4f4] -skew-x-12 -translate-x-1/2 opacity-50 z-0" />
              <div className="relative z-10 space-y-10 animate-in slide-in-from-left-8 duration-700">
                <div className="space-y-2">
                  <p className="text-red-600 font-bold uppercase tracking-widest text-xs lg:text-sm">{slide.subtitle}</p>
                  <h2 className="text-4xl lg:text-7xl font-black text-black leading-none uppercase tracking-tighter">{slide.title}</h2>
                </div>
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-600/30">
                  {renderIcon('List', 36)}
                </div>
                <p className="text-xl lg:text-2xl font-black text-black leading-snug tracking-tight max-w-md">
                  {slide.content}
                </p>
              </div>
            </div>

            <div className="lg:w-[55%] h-full flex flex-col">
              {slide.interaction.revealItems.slice(0, 2).map((item, idx) => (
                <div key={idx} className={`flex-1 ${idx === 0 ? 'bg-red-600' : 'bg-[#0a0d14]'} p-12 lg:p-20 flex flex-col justify-center text-white relative group overflow-hidden transition-all hover:opacity-90`}>
                  <div className="flex items-start gap-8 relative z-10">
                     <div className={`w-20 h-20 rounded-full border-2 ${idx === 0 ? 'border-white' : 'border-white/20'} flex items-center justify-center shrink-0`}>
                        {renderIcon(item.icon, 32)}
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">{item.title}</h3>
                        <p className="text-lg lg:text-xl font-medium opacity-90 max-w-xl">{item.text}</p>
                        <button onClick={() => { setExpandedItem(item); markSlideComplete(currentSlideIndex); }} className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] mt-6 hover:translate-x-2 transition-transform">
                          {renderIcon('Search', 16)} Leer más
                        </button>
                     </div>
                  </div>
                </div>
              ))}
            </div>
            {expandedItem && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 animate-in zoom-in-95 duration-300">
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setExpandedItem(null)} />
                  <div className="relative bg-[#111111] w-full max-w-3xl rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
                     <div className="p-10 border-b border-white/5 flex items-center justify-between">
                        <h4 className="text-3xl font-black uppercase text-white tracking-tighter">{expandedItem.title}</h4>
                        <button onClick={() => setExpandedItem(null)} className="p-3 bg-white/5 rounded-full hover:bg-red-600 transition-all">{renderIcon('X', 24)}</button>
                     </div>
                     <div className="p-10 lg:p-12 space-y-8 overflow-y-auto max-h-[60vh] custom-scrollbar">
                        <p className="text-xl lg:text-2xl font-light text-slate-300 leading-relaxed whitespace-pre-wrap">{expandedItem.longContent}</p>
                     </div>
                     <div className="p-8 bg-black/20 text-center">
                        <button onClick={() => setExpandedItem(null)} className="px-12 py-5 bg-red-600 rounded-full font-black uppercase text-xs tracking-[0.4em] shadow-xl">Continuar</button>
                     </div>
                  </div>
               </div>
            )}
          </div>
        )}

        {/* Hermeneutics / Grid Cards */}
        {slide.type === 'hermeneutics' && (
          <>
            <div className="w-full flex flex-col gap-12 p-12 overflow-y-auto custom-scrollbar">
              <div className="space-y-6 max-w-5xl text-left">
                 <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">{slide.title}</h2>
                 <p className="text-xl lg:text-3xl font-light opacity-90 leading-relaxed italic text-slate-300 border-l-8 border-red-600 pl-8 max-w-4xl">"{slide.content}"</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 items-stretch h-full">
                 <div className="lg:w-[40%] relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl min-h-[300px]">
                    <img src={slide.visual.source} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
                 </div>
                 <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {slide.interaction?.revealItems?.map((item, i) => (
                      <button key={i} onClick={() => { if (item.longContent) { setExpandedItem(item); markSlideComplete(currentSlideIndex); } }} className="flex items-center gap-5 p-6 bg-white/5 rounded-[2.5rem] border border-white/5 transition-all hover:bg-white/10 hover:border-red-600/40 group text-left w-full">
                         <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600 text-white transition-all shadow-lg shrink-0">
                            {renderIcon(item.icon, 24)}
                         </div>
                         <div className="text-white">
                            <span className="block font-black uppercase text-[10px] tracking-[0.2em] opacity-50 mb-1">{item.title}</span>
                            <span className="block font-bold text-sm tracking-tight">{item.text}</span>
                            {item.longContent && <span className="block text-[8px] font-black uppercase text-red-500 mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Click para ver más</span>}
                         </div>
                      </button>
                    ))}
                 </div>
              </div>
            </div>
            {expandedItem && (
               <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 animate-in zoom-in-95 duration-300">
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setExpandedItem(null)} />
                  <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                     <div className="lg:w-1/2 relative min-h-[300px]">
                        <img src={expandedItem.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                           <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-4">
                              {renderIcon(expandedItem.icon, 24)}
                           </div>
                           <h4 className="text-3xl font-black uppercase tracking-tighter">{expandedItem.title}</h4>
                        </div>
                     </div>
                     <div className="flex-1 p-12 lg:p-16 flex flex-col gap-8 bg-slate-50 max-h-[80vh] overflow-y-auto custom-scrollbar">
                        <div className="space-y-4">
                           <p className="text-xs font-black text-red-500 uppercase tracking-widest">{expandedItem.text}</p>
                           <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-light whitespace-pre-wrap">
                              {expandedItem.longContent}
                           </p>
                        </div>
                        <div className="mt-auto border-t border-slate-200 pt-8">
                           <button onClick={() => setExpandedItem(null)} className="px-10 py-5 bg-black rounded-full text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition-colors">
                              Cerrar
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
          </>
        )}

        {/* Quiz / Reflection */}
        {(slide.type === 'quiz' || slide.type === 'reflection') && (
           <div className="w-full max-w-4xl p-12 space-y-10 animate-in slide-in-from-bottom-12 overflow-y-auto custom-scrollbar">
              <div className="text-center space-y-4">
                 <h2 className="text-5xl font-black uppercase text-white">{slide.title}</h2>
                 <p className="text-xl font-light text-slate-300 italic">"{slide.content}"</p>
              </div>
              {slide.type === 'reflection' ? (
                 <textarea className="w-full h-64 p-10 bg-white/5 border border-white/10 rounded-[2rem] text-xl text-white outline-none focus:border-red-600 transition-all custom-scrollbar" placeholder="Escribe aquí tu reflexión..." value={notes[slide.id] || ''} onChange={(e) => { setNote(slide.id, e.target.value); markSlideComplete(currentSlideIndex); }} />
              ) : (
                 <div className="grid gap-4">
                    {slide.interaction?.options?.map(opt => (
                       <button key={opt.id} onClick={() => { setSelectedOption(opt.id); markSlideComplete(currentSlideIndex); }} className={`p-6 rounded-2xl border-2 text-left transition-all ${selectedOption === opt.id ? 'bg-red-600/10 border-red-500' : 'bg-white/5 border-white/5'}`}>
                          <p className="text-lg font-bold">{opt.label}</p>
                          {selectedOption === opt.id && <p className="text-sm mt-2 opacity-60">{opt.feedback}</p>}
                       </button>
                    ))}
                 </div>
              )}
           </div>
        )}

      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .truncate-3-lines { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default SlideRenderer;
