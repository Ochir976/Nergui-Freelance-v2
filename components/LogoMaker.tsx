import React from 'react';
import { ArrowRight } from 'lucide-react';

const LogoMaker: React.FC = () => {
  return (
    <section className="bg-orange-50 py-20 my-12">
       <div className="max-w-[80rem] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">
               Nergui Лого Бүтээгч
             </div>
             <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 tracking-tight leading-[0.95]">
               Гайхалтай логог <br/> <span className="text-orange-500 font-serif italic">хэдхэн секундын дотор</span> бүтээ.
             </h2>
             <p className="text-slate-500 text-lg max-w-md">
               Шилдэг авьяастнуудын урьдчилан бүтээсэн загварууд. Зүгээр л өөрийн санааг нэм. Энэ бол мэргэжлийн брэндтэй болох хамгийн хялбар арга.
             </p>
             <button className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accentHover hover:shadow-button-glow transition-all duration-300 flex items-center gap-2">
               Nergui Лого Бүтээгчийг турших <ArrowRight className="w-4 h-4" />
             </button>
          </div>

          <div className="relative h-[400px]">
             {/* Can visuals */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[4rem] shadow-2xl -rotate-6 z-10 flex flex-col items-center justify-center p-6 border-4 border-white">
                 <span className="font-display font-black text-6xl text-white/90">SIP</span>
                 <div className="mt-4 w-full h-1 bg-white/30" />
                 <span className="mt-4 text-white font-medium text-sm tracking-[0.2em] uppercase">Органик</span>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-64 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-[4rem] shadow-xl rotate-6 z-0 flex flex-col items-center justify-center p-6 opacity-80 scale-95 border-4 border-white">
                 <span className="font-display font-black text-6xl text-white/90">POP</span>
                 <div className="mt-4 w-full h-1 bg-white/30" />
             </div>
             
             {/* Small swatch UI */}
             <div className="absolute bottom-4 left-0 bg-white p-3 rounded-full shadow-lg flex gap-2 animate-[bounce_4s_infinite]">
                <div className="w-6 h-6 rounded-full bg-slate-900" />
                <div className="w-6 h-6 rounded-full bg-orange-500" />
                <div className="w-6 h-6 rounded-full bg-green-500" />
             </div>
          </div>
       </div>
    </section>
  );
};

export default LogoMaker;