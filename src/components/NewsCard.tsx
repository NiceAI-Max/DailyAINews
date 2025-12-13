
import { NewsItem } from '@/lib/mockData';
import { ExternalLink, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

interface NewsCardProps {
    item: NewsItem;
}

const categoryStyles: Record<string, string> = {
    '模型更新': 'bg-blue-50 text-blue-700 border-blue-100',
    '开发工具': 'bg-purple-50 text-purple-700 border-purple-100',
    '竞赛编程': 'bg-orange-50 text-orange-700 border-orange-100',
    '框架库': 'bg-green-50 text-green-700 border-green-100',
    'Web开发': 'bg-cyan-50 text-cyan-700 border-cyan-100',
    '开源模型': 'bg-pink-50 text-pink-700 border-pink-100',
    'IDE': 'bg-indigo-50 text-indigo-700 border-indigo-100',
    '轻量模型': 'bg-teal-50 text-teal-700 border-teal-100',
};

export function NewsCard({ item }: NewsCardProps) {
    const categoryClass = categoryStyles[item.category] || 'bg-gray-50 text-gray-700 border-gray-100';

    return (
        <Link
            href={item.url}
            className="group block h-full bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 flex flex-col"
        >
            <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryClass}`}>
                    {item.category}
                </span>
                <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {item.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                {item.summary}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50 mt-auto">
                <div className="flex items-center gap-1.5">
                    <Globe size={14} />
                    <span className="font-medium text-gray-500">{item.source}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{item.time}</span>
                </div>
            </div>
        </Link>
    );
}
