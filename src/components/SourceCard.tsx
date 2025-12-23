import React from 'react';
import { Github, Newspaper, Brain, Rocket, FileText, ExternalLink, Mail, Twitter, Zap, Signal, Eye } from 'lucide-react';

export interface SourceItem {
    id: string;
    name: string;
    description: string;
    url: string;
    icon: string;
}

const iconMap: { [key: string]: React.ElementType } = {
    Github,
    Newspaper,
    Brain,
    Rocket,
    FileText,
    Mail,
    Twitter,
    Zap,
    Signal,
    Eye,
};

interface SourceCardProps {
    source: SourceItem;
}

export function SourceCard({ source }: SourceCardProps) {
    const Icon = iconMap[source.icon] || ExternalLink;

    return (
        <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200"
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-200">
                        <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {source.name}
                    </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200" />
            </div>
            <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                {source.description}
            </p>
        </a>
    );
}
