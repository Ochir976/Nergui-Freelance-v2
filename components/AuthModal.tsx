import React, { useState, useEffect } from 'react';
import { X, Facebook, ArrowRight, CheckCircle2, Search, PenTool, Check, User, Users, Building, Building2, Factory, ArrowLeft } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'onboarding'>(initialMode);
  const [onboardingStep, setOnboardingStep] = useState<'role' | 'team_size'>('role');
  const [isAnimating, setIsAnimating] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedRole, setSelectedRole] = useState<'client' | 'freelancer' | null>(null);
  const [teamSize, setTeamSize] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setOnboardingStep('role');
      setSelectedRole(null);
      setTeamSize(null);
      // Reset username only if opening fresh in signup mode
      if (initialMode === 'signup') setUsername('');
    }
  }, [isOpen, initialMode]);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const toggleMode = () => {
    if (mode === 'onboarding') return;
    setMode(prev => prev === 'signin' ? 'signup' : 'signin');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup') {
        if (!username) setUsername('User');
        setMode('onboarding');
        setOnboardingStep('role');
    } else {
        onClose();
    }
  };

  const handleSocialLogin = (provider: string) => {
      if (mode === 'signup') {
          setUsername(provider === 'Google' ? 'Google User' : 'Facebook User');
          setMode('onboarding');
          setOnboardingStep('role');
      } else {
          onClose();
      }
  };

  const handleRoleContinue = () => {
      if (selectedRole === 'client') {
          setOnboardingStep('team_size');
      } else {
          onClose();
      }
  };

  const teamSizeOptions = [
      { id: '1', label: 'Надаас өөр хүн байхгүй', icon: User, value: '1' },
      { id: '2-10', label: '2 - 10', icon: Users, value: '2-10' },
      { id: '11-50', label: '11 - 50', icon: Building, value: '11-50' },
      { id: '51-500', label: '51 - 500', icon: Building2, value: '51-500' },
      { id: '500+', label: '500+', icon: Factory, value: '500+' },
  ];

  return (
    <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      <div className={`relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col ${mode === 'onboarding' ? '' : 'md:flex-row'} transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        
        <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
        >
            <X className="w-5 h-5" />
        </button>

        {/* Onboarding View */}
        {mode === 'onboarding' && (
            <div className="w-full p-8 md:p-12 lg:p-16 flex flex-col items-center text-center animate-in fade-in duration-500 min-h-[500px] justify-center">
                
                {/* Step 1: Role Selection */}
                {onboardingStep === 'role' && (
                    <div className="w-full flex flex-col items-center animate-in slide-in-from-right-8 duration-500">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4 max-w-2xl">
                            {username || 'Хэрэглэгч'}, таны хаяг амжилттай үүслээ! Та Nergui-ийг юунд ашиглах вэ?
                        </h2>
                        <p className="text-slate-500 mb-12">
                            Бид таны туршлагыг танд тохируулан өөрчлөх болно.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
                            {/* Client Card */}
                            <div 
                                onClick={() => setSelectedRole('client')}
                                className={`relative cursor-pointer group rounded-[2rem] border-2 p-8 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${selectedRole === 'client' ? 'border-accent bg-accent/5' : 'border-slate-100 hover:border-slate-300 hover:shadow-lg'}`}
                            >
                                <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedRole === 'client' ? 'border-accent bg-accent text-white' : 'border-slate-200'}`}>
                                    {selectedRole === 'client' && <Check className="w-3.5 h-3.5" />}
                                </div>
                                
                                <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-50" />
                                    <Search className="w-10 h-10 text-blue-500 relative z-10" />
                                    <div className="absolute bottom-2 right-4 w-4 h-4 rounded-full bg-blue-200" />
                                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-300" />
                                </div>
                                <span className="font-display font-bold text-lg text-slate-900">Би захиалагч</span>
                            </div>

                            {/* Freelancer Card */}
                            <div 
                                onClick={() => setSelectedRole('freelancer')}
                                className={`relative cursor-pointer group rounded-[2rem] border-2 p-8 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${selectedRole === 'freelancer' ? 'border-accent bg-accent/5' : 'border-slate-100 hover:border-slate-300 hover:shadow-lg'}`}
                            >
                                <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedRole === 'freelancer' ? 'border-accent bg-accent text-white' : 'border-slate-200'}`}>
                                    {selectedRole === 'freelancer' && <Check className="w-3.5 h-3.5" />}
                                </div>

                                <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-orange-50" />
                                    <PenTool className="w-10 h-10 text-orange-500 relative z-10" />
                                    <div className="absolute bottom-4 left-4 w-6 h-1 bg-orange-200 -rotate-45" />
                                    <div className="absolute top-4 right-4 w-3 h-3 rounded bg-orange-300 rotate-12" />
                                </div>
                                <span className="font-display font-bold text-lg text-slate-900">Би чөлөөт ажилтан</span>
                            </div>
                        </div>

                        <div className="w-full max-w-3xl flex justify-end">
                            <button 
                                onClick={handleRoleContinue}
                                disabled={!selectedRole}
                                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${selectedRole ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                            >
                                Үргэлжлүүлэх
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Team Size Selection (Client only) */}
                {onboardingStep === 'team_size' && (
                    <div className="w-full flex flex-col items-center animate-in slide-in-from-right-8 duration-500">
                         <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-12 max-w-2xl">
                            Танай багт хэдэн хүн ажилладаг вэ?
                        </h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl mb-12">
                            {teamSizeOptions.map((option) => (
                                <div 
                                    key={option.id}
                                    onClick={() => setTeamSize(option.value)}
                                    className={`relative cursor-pointer group rounded-3xl border-2 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 h-48 ${teamSize === option.value ? 'border-accent bg-accent/5 ring-4 ring-accent/10' : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'}`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${teamSize === option.value ? 'bg-accent text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'}`}>
                                        <option.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-display font-bold text-sm text-slate-900 text-center leading-tight">
                                        {option.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full max-w-5xl flex justify-between items-center px-2">
                             <button 
                                onClick={() => setOnboardingStep('role')}
                                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-colors"
                             >
                                <ArrowLeft className="w-4 h-4" /> Буцах
                             </button>

                             <button 
                                onClick={onClose}
                                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${teamSize ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                             >
                                {teamSize ? 'Дуусгах' : 'Алгaсах'}
                             </button>
                        </div>
                    </div>
                )}
            </div>
        )}

        {/* Standard Auth View */}
        {mode !== 'onboarding' && (
            <>
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-white">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-2">
                        {mode === 'signin' ? 'Эргэн тавтай морил' : 'Шинэ хаяг нээх'}
                    </h2>
                    <p className="text-slate-500 mb-8">
                        {mode === 'signin' ? 'Бүтээлч ертөнцөд дахин нэвтрэх.' : 'Бүтээлч аялалаа өнөөдөр эхлүүлээрэй.'}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {mode === 'signup' && (
                            <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Хэрэглэгчийн нэр</label>
                                <input 
                                    type="text" 
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                                    placeholder="username123"
                                />
                            </div>
                        )}
                        
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Имэйл хаяг</label>
                            <input 
                                type="email" 
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between ml-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Нууц үг</label>
                                {mode === 'signin' && <a href="#" className="text-xs font-bold text-accent hover:underline">Мартсан?</a>}
                            </div>
                            <input 
                                type="password" 
                                required
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 flex items-center justify-center gap-2">
                            {mode === 'signin' ? 'Үргэлжлүүлэх' : 'Бүртгүүлэх'} <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="relative my-6 text-center">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                        <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Эсвэл</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            type="button"
                            onClick={() => handleSocialLogin('Google')}
                            className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-semibold text-sm text-slate-700 hover:shadow-md"
                        >
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            Google
                        </button>
                        <button 
                            type="button"
                            onClick={() => handleSocialLogin('Facebook')}
                            className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-semibold text-sm text-slate-700 hover:shadow-md"
                        >
                            <Facebook className="w-5 h-5 text-blue-600 fill-current" />
                            Facebook
                        </button>
                    </div>

                    <p className="text-center mt-6 text-slate-500 text-sm">
                        {mode === 'signin' ? 'Бүртгэлгүй юу?' : 'Аль хэдийн бүртгэлтэй юу?'}{' '}
                        <button onClick={toggleMode} className="text-accent font-bold hover:underline">
                            {mode === 'signin' ? 'Nergui-д нэгдэх' : 'Нэвтрэх'}
                        </button>
                    </p>
                </div>

                {/* Right Side - Visual */}
                <div className={`hidden md:flex w-1/2 relative overflow-hidden items-center justify-center p-12 transition-colors duration-500 ${mode === 'signin' ? 'bg-slate-900' : 'bg-accent/10'}`}>
                    {/* Background Decorations */}
                    <div className={`absolute inset-0 transition-opacity duration-700 ${mode === 'signin' ? 'opacity-40' : 'opacity-0'}`}>
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
                    </div>
                    
                    <div className={`absolute inset-0 transition-opacity duration-700 ${mode === 'signup' ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-200 to-rose-200 rounded-full blur-3xl opacity-60" />
                    </div>

                    <div className="relative z-10 max-w-sm">
                        <div className={`backdrop-blur-xl border rounded-[2rem] p-8 shadow-2xl transition-all duration-500 ${mode === 'signin' ? 'bg-white/10 border-white/10 text-white' : 'bg-white/60 border-white/40 text-slate-900'}`}>
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg mb-6 text-2xl">
                                {mode === 'signin' ? '🚀' : '✨'}
                            </div>
                            <h3 className="font-display font-bold text-2xl mb-4">
                                {mode === 'signin' ? 'Амжилтаа үргэлжлүүл' : 'Мөрөөдлөө бодит болго'}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className={`w-5 h-5 ${mode === 'signin' ? 'text-lime-400' : 'text-accent'}`} />
                                    <span className="font-medium text-sm">Шилдэг мэргэжилтнүүд</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className={`w-5 h-5 ${mode === 'signin' ? 'text-lime-400' : 'text-accent'}`} />
                                    <span className="font-medium text-sm">Аюулгүй төлбөрийн систем</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className={`w-5 h-5 ${mode === 'signin' ? 'text-lime-400' : 'text-accent'}`} />
                                    <span className="font-medium text-sm">24/7 Хэрэглэгчийн дэмжлэг</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;