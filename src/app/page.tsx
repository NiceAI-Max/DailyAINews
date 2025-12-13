
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { NewsCard } from '@/components/NewsCard';
import { Footer } from '@/components/Footer';
import { mockNews } from '@/lib/mockData';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <Header />

      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm">
            加载更多
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
