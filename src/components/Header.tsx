import { Zap } from 'lucide-react';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">DailyAINews</span>
                </div>

                <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    订阅周刊
                </button>
            </div>
        </header>
    );
}
