import React from 'react';
import { Search, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-lime-300/30 to-blue-400/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-[80rem] mx-auto flex flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm text-sm font-semibold text-slate-600 animate-[bounce_3s_infinite]">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Ухаалаг бизнест ухаалаг үйлчилгээ</span>
        </div>

        <h1 className="font-display font-semibold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8 text-slate-900 max-w-5xl">
          Манай чөлөөт ажилтнууд эндээс <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-500 to-indigo-500">үргэлжлүүлнэ.</span>
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl">
          Сая сая хүмүүс Nergui-ийг ашиглан санаагаа бодит ажил болгодог.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl relative group">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all duration-500" />
          <div className="relative flex items-center bg-white p-2 rounded-full shadow-lg border border-slate-100 transition-transform duration-300 hover:scale-[1.01]">
            <input 
              type="text" 
              placeholder="Үйлчилгээ хайх..." 
              className="flex-1 pl-6 pr-4 py-3 bg-transparent text-lg outline-none placeholder:text-slate-400"
            />
            <button className="bg-accent hover:bg-accentHover text-white p-4 rounded-full transition-all duration-300 hover:shadow-button-glow hover:rotate-12">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-sm font-semibold text-slate-400 mr-2">Эрэлттэй:</span>
            {['Веб дизайн', 'Vibe Кодчлол', 'Видео эвлүүлэг', 'Лого дизайн', 'AI Үйлчилгээ'].map((tag) => (
              <button 
                key={tag}
                className="px-4 py-1.5 rounded-full border border-slate-200 text-sm font-medium hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors"
              >
                {tag}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;