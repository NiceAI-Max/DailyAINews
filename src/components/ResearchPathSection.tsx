import React from 'react';
import { Radio, FlaskConical, Brain } from 'lucide-react';

export function ResearchPathSection() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-8 bg-blue-600 rounded-full"></span> 建议研究路径
                    </h2>
                    <p className="text-gray-600 text-lg">
                        收集信息只是第一步。要真正利用这些工具提升编程效率，建议遵循以下“三步走”策略：
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 mb-6">
                            <Radio className="w-full h-full text-gray-700" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">每日：快速扫描</h3>
                        <p className="text-gray-600 leading-relaxed">
                            利用 <span className="font-bold text-gray-900">TLDR AI</span> 或 <span className="font-bold text-gray-900">Hacker News</span> 进行 5-10 分钟的晨间浏览。关注标题中带有 &quot;Show HN&quot; 或 &quot;Launch&quot; 的 AI 编程工具。
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 mb-6">
                            <FlaskConical className="w-full h-full text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">每周：动手实验</h3>
                        <p className="text-gray-600 leading-relaxed">
                            从 <span className="font-bold text-gray-900">GitHub Trending</span> 中挑选一个 Top Repository (如一个新的 LLM 包装器或 Agent 框架)，在本地环境中跑通 Hello World。
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 mb-6">
                            <Brain className="w-full h-full text-rose-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">每月：深度复盘</h3>
                        <p className="text-gray-600 leading-relaxed">
                            阅读 <span className="font-bold text-gray-900">Latent Space</span> 或 <span className="font-bold text-gray-900">Andrej Karpathy</span> 的长文，理解工具背后的模型原理 (如 Transformer 架构优化)，预判下一个工具爆发点。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
