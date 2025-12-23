import React from 'react';
import { SourceCard, SourceItem } from './SourceCard';
import sourcesData from '@/data/sources.json';

export function SourceSection() {
    const sources = sourcesData as SourceItem[];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                    精选来源探索
                </h2>
                <span className="text-sm text-gray-500">
                    汇聚全球优质 AI 资讯源
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {sources.map((source) => (
                    <SourceCard key={source.id} source={source} />
                ))}
            </div>
        </section>
    );
}
