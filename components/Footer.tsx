import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-50 pt-16 pb-8">
      <div className="max-w-[80rem] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
           <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Ангилалууд</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {['График & Дизайн', 'Дижитал Маркетинг', 'Бичих & Орчуулга', 'Видео & Анимаци', 'Хөгжим & Аудио', 'Програмчлал & Технологи'].map(item => (
                  <li key={item}><a href="#" className="hover:text-accent hover:underline decoration-accent underline-offset-4 transition-colors">{item}</a></li>
                ))}
              </ul>
           </div>
           <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Тухай</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {['Ажлын байр', 'Хэвлэл & Мэдээ', 'Түншлэл', 'Нууцлалын бодлого', 'Үйлчилгээний нөхцөл', 'Хөрөнгө оруулагчдын харилцаа'].map(item => (
                  <li key={item}><a href="#" className="hover:text-accent hover:underline decoration-accent underline-offset-4 transition-colors">{item}</a></li>
                ))}
              </ul>
           </div>
           <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Дэмжлэг</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {['Тусламж & Дэмжлэг', 'Итгэлцэл & Аюулгүй байдал', 'Nergui дээр зарах', 'Nergui дээр худалдан авах'].map(item => (
                  <li key={item}><a href="#" className="hover:text-accent hover:underline decoration-accent underline-offset-4 transition-colors">{item}</a></li>
                ))}
              </ul>
           </div>
           <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Олон нийт</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {['Харилцагчийн амжилтын түүхүүд', 'Олон нийтийн төв', 'Форум', 'Арга хэмжээ', 'Блог', 'Нөлөөлөгчид'].map(item => (
                  <li key={item}><a href="#" className="hover:text-accent hover:underline decoration-accent underline-offset-4 transition-colors">{item}</a></li>
                ))}
              </ul>
           </div>
           <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Nergui-ээс илүү ихийг</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {['Nergui Pro', 'Nergui Лого Бүтээгч', 'Nergui Гарын авлага', 'Урам зориг авах', 'Nergui Select'].map(item => (
                  <li key={item}><a href="#" className="hover:text-accent hover:underline decoration-accent underline-offset-4 transition-colors">{item}</a></li>
                ))}
              </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
           <div className="flex items-center gap-2 mb-4 md:mb-0">
             <span className="font-display font-bold text-2xl text-slate-900 tracking-tighter">nergui<span className="text-accent">.</span></span>
             <span className="text-slate-400 text-sm">© Nergui International Ltd. 2024</span>
           </div>
           
           <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram className="w-5 h-5" /></a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;