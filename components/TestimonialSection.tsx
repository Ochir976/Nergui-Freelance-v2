import React from 'react';
import { PlayCircle } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-6 w-full">
      <div className="mb-8">
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight">Nergui дээрх амжилт хэрхэн харагддаг вэ</h2>
        <p className="text-slate-500 mt-2">Vontélle Eyewear нь алсын хараагаа бодит болгохын тулд Nergui-ийн чөлөөт ажилтнуудад ханддаг.</p>
      </div>

      <div className="group relative w-full aspect-[16/9] md:aspect-[21/9] rounded-card overflow-hidden cursor-pointer">
        <img 
          src="https://picsum.photos/1600/900?grayscale" 
          alt="Testimonial Thumbnail" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-colors duration-300" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <PlayCircle className="w-8 h-8 md:w-12 md:h-12 fill-white text-transparent" />
            </div>
            <h3 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl drop-shadow-lg">
              "Бид Nergui-ийн тусламжтайгаар бизнесээ хэрхэн өргөжүүлсэн бэ"
            </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
         {['3D Үйлдвэрлэлийн Дизайн', 'E-Commerce Хөгжүүлэлт', 'Имэйл Маркетинг', 'Хэвлэлийн Мэдээ'].map((service, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-[1.5rem] p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-3">
                    <span className="text-lg">🛠️</span>
                </div>
                <span className="font-semibold text-sm text-slate-700">{service}</span>
            </div>
         ))}
      </div>
    </section>
  );
};

export default TestimonialSection;