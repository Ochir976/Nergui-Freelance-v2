import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeatureBanner: React.FC = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-6 w-full">
      <div className="relative rounded-card bg-rose-400 overflow-hidden text-white p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12 group">
        
        {/* Decorative Blobs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50" />

        <div className="relative z-10 max-w-xl space-y-8">
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tight">
                <span className="italic text-white/90">Vibe Кодчлолд</span> <br/>
                тусламж хэрэгтэй юу?
            </h2>
            <p className="text-rose-100 text-xl font-medium max-w-md">
                Төслөө үргэлжлүүлэн хөгжүүлж, сурталчлахын тулд тохирох мэргэжилтэнтэй холбогдоорой.
            </p>
            <button className="bg-white text-rose-500 rounded-full px-8 py-4 font-bold text-lg inline-flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Мэргэжилтэн олох <ArrowUpRight className="w-5 h-5" />
            </button>
        </div>

        <div className="relative z-10 w-full md:w-1/2 aspect-[4/3] bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 p-4 shadow-2xl transform transition-transform duration-500 md:group-hover:-rotate-2 md:group-hover:scale-105">
           {/* Abstract UI Representation */}
           <div className="w-full h-full bg-slate-900 rounded-2xl p-6 flex flex-col gap-4 overflow-hidden relative">
              <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3 opacity-60">
                 <div className="h-2 w-1/3 bg-slate-700 rounded-full" />
                 <div className="h-2 w-2/3 bg-slate-700 rounded-full" />
                 <div className="h-2 w-1/2 bg-slate-700 rounded-full" />
              </div>
              <div className="mt-auto bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent animate-pulse" />
                      <div className="h-2 w-24 bg-slate-600 rounded-full" />
                  </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center">
                  <span className="block text-4xl mb-2">✨</span>
                  <span className="font-display font-bold text-white">Vibe шалгалт давсан</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureBanner;