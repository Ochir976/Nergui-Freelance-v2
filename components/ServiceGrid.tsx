import React from 'react';
import { Code2, PenTool, Video, LayoutTemplate, Megaphone, Smartphone, Music, Database } from 'lucide-react';

const services = [
  { label: 'Vibe Кодчлол', icon: Code2, color: 'bg-indigo-100', text: 'text-indigo-600' },
  { label: 'Веб Хөгжүүлэлт', icon: LayoutTemplate, color: 'bg-lime-100', text: 'text-lime-700' },
  { label: 'Видео Эвлүүлэг', icon: Video, color: 'bg-rose-100', text: 'text-rose-600' },
  { label: 'Лого Дизайн', icon: PenTool, color: 'bg-orange-100', text: 'text-orange-600' },
  { label: 'Маркетинг', icon: Megaphone, color: 'bg-emerald-100', text: 'text-emerald-600' },
  { label: 'Сошиал Медиа', icon: Smartphone, color: 'bg-sky-100', text: 'text-sky-600' },
  { label: 'Дуу Оруулах', icon: Music, color: 'bg-purple-100', text: 'text-purple-600' },
  { label: 'Дата Сайнс', icon: Database, color: 'bg-amber-100', text: 'text-amber-600' },
];

const ServiceGrid: React.FC = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-6 w-full">
      <div className="mb-12">
        <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-4">Эрэлттэй үйлчилгээнүүд</h2>
        <p className="text-slate-500 text-lg">Энэ долоо хоногийн хамгийн их захиалагдсан ажлууд.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {services.map((service, idx) => (
          <div 
            key={idx}
            className={`group relative flex flex-col items-center justify-center p-6 gap-4 rounded-[2rem] bg-slate-50 transition-all duration-400 ease-pop hover:shadow-card-hover hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden border border-transparent hover:border-slate-200`}
          >
            <div className={`p-4 rounded-full ${service.color} ${service.text} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
              <service.icon className="w-6 h-6" />
            </div>
            <span className="font-display font-semibold text-center text-sm leading-tight group-hover:text-accent transition-colors">
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;