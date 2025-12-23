
export function Footer() {
    return (
        <footer className="py-12 border-t border-gray-100 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} DailyAINews. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">关于我们</a>
                    <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">隐私政策</a>
                    <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">联系方式</a>
                </div>
            </div>
        </footer>
    );
}
