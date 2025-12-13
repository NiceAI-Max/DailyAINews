
export function Hero() {
    return (
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                实时更新中
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                由 AI 驱动的 <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                    人工智能编程
                </span>
                <br />
                每日情报站
            </h1>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                自动聚合全球最新 AI 编程资讯，利用大模型生成精准摘要。
                <br />
                让您在 3 分钟内掌握行业动态。
            </p>
        </section>
    );
}
