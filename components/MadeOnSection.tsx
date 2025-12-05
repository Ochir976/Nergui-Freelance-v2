import React from 'react';
import { Heart } from 'lucide-react';

const projects = [
  { img: 'https://picsum.photos/400/500?random=1', title: 'Киберпанк Дүр', author: 'ArtVandelay' },
  { img: 'https://picsum.photos/400/400?random=2', title: 'Орчин Үеийн Вилла', author: 'ArchVizPro' },
  { img: 'https://picsum.photos/400/600?random=3', title: 'Бүтээгдэхүүний Зураг', author: 'StudioLens' },
  { img: 'https://picsum.photos/400/450?random=4', title: 'Номын Хавтас', author: 'BookWormDesign' },
  { img: 'https://picsum.photos/400/350?random=5', title: 'Сошиал Медиа Багц', author: 'TrendSetter' },
  { img: 'https://picsum.photos/400/550?random=6', title: 'Фантази Зураглал', author: 'DreamWeaver' },
  { img: 'https://picsum.photos/400/400?random=7', title: 'Сав Баглаа Боодол', author: 'BoxItUp' },
  { img: 'https://picsum.photos/400/500?random=8', title: 'Концепт Арт', author: 'FutureWorlds' },
];

const MadeOnSection: React.FC = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-6 w-full mb-24">
       <div className="flex justify-between items-end mb-12">
          <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight">Nergui дээр бүтээгдсэн</h2>
          <a href="#" className="hidden md:block text-slate-500 hover:text-accent font-medium">Илүү олон төсөл харах</a>
       </div>

       <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {projects.map((project, idx) => (
             <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
                <img src={project.img} alt={project.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                   <h4 className="text-white font-bold text-sm">{project.title}</h4>
                   <p className="text-slate-300 text-xs">зохиогч: {project.author}</p>
                   <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors">
                      <Heart className="w-4 h-4" />
                   </button>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
};

export default MadeOnSection;