import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const MoneyBackSection: React.FC = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-6 w-full">
      <div className="bg-slate-900 rounded-card p-8 md:p-16 lg:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10 text-xs font-bold tracking-wider uppercase">
             <ShieldCheck className="w-3 h-3 text-lime-300" /> Nergui Pro
          </div>
          
          <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tight leading-[0.95]">
            Чанартай ажил, <br />
            эсвэл <span className="text-lime-300">мөнгөө буцааж ав.</span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Nergui Pro дээр та эрсдэлгүйгээр алсын хараагаа бодит болгох боломжтой. Төсөл бүр мөнгө буцаах баталгаагаар хангагдсан.
          </p>

          <div className="space-y-4">
             {['Шалгарсан шилдэг чөлөөт ажилтнууд', 'Аюулгүй төлбөр тооцоо', '24/7 Тэргүүлэх дэмжлэг'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200 font-medium">
                   <CheckCircle2 className="w-6 h-6 text-lime-300" />
                   {item}
                </div>
             ))}
          </div>

          <button className="mt-4 bg-lime-300 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(190,242,100,0.4)] hover:scale-105 transition-all duration-300">
            Pro хувилбарыг турших
          </button>
        </div>

        <div className="relative z-10 flex-1 w-full max-w-md lg:max-w-full flex justify-center">
            <div className="relative w-72 md:w-80 aspect-[9/18] bg-slate-800 rounded-[3rem] border-8 border-slate-950 shadow-2xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Phone Screen Mockup */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-slate-950 z-20 flex justify-center">
                   <div className="w-20 h-4 bg-black rounded-b-xl" />
                </div>
                <div className="w-full h-full bg-slate-100 relative pt-12 p-6 flex flex-col items-center">
                   <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 text-green-600">
                      <ShieldCheck className="w-8 h-8" />
                   </div>
                   <h3 className="font-display font-bold text-2xl text-slate-900 text-center mb-2 leading-tight">Мөнгө буцаах баталгаа</h3>
                   <p className="text-center text-slate-500 text-sm mb-8">Сэтгэл ханамжгүй байна уу? Бид буцаан олгоно. Асуултгүй.</p>
                   <div className="w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-4">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-slate-400">ТӨЛӨВ</span>
                         <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">Идэвхтэй</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                         <div className="h-full bg-green-500 w-3/4" />
                      </div>
                   </div>
                   <button className="w-full bg-accent text-white rounded-full py-3 font-bold text-sm mt-auto shadow-lg hover:bg-accentHover">Дэмжлэгтэй холбогдох</button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MoneyBackSection;