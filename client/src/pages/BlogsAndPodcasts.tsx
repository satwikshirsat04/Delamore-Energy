import { useState } from 'react';
import { contentItems } from '@/lib/content';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { PageBanner } from '@/components/PageBanner';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

const BlogsAndPodcasts = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'podcast'>('all');

  const filteredItems = contentItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner
        title="Blogs & Podcasts"
        subtitle="Discover our latest insights, articles, and discussions on renewable energy and sustainable solutions"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs */}
        <div className="flex border-b mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === 'all'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All Content
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === 'blog'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab('podcast')}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === 'podcast'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Podcasts
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {item.type === 'podcast' ? (
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item.title}
                  />
                </div>
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              )}

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.type === 'blog' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.type === 'blog' ? 'Article' : 'Podcast'}
                  </span>
                  <span className="text-sm text-gray-500 ml-3">
                    {item.date} {item.type === 'podcast' && ` • ${item.duration}`}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>

                {item.type === 'blog' ? (
                  <Link
                    to={`/blogs/${item.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                ) : (
                  <a
                    href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Watch Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default BlogsAndPodcasts;