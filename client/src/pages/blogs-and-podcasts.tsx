import { useState } from 'react';
import { contentItems } from '@/lib/content';
import Link from 'next/link';

export default function BlogsAndPodcasts() {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'podcast'>('all');

  const filteredItems = contentItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blogs & Podcasts</h1>
      
      {/* Tabs */}
      <div className="flex border-b mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 font-medium ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          All Content
        </button>
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-4 py-2 font-medium ${activeTab === 'blog' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Blogs
        </button>
        <button
          onClick={() => setActiveTab('podcast')}
          className={`px-4 py-2 font-medium ${activeTab === 'podcast' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Podcasts
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {item.type === 'podcast' ? (
              <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}
            
            <div className="p-6">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                {item.type === 'blog' ? 'Article' : 'Podcast'}
              </span>
              <span className="text-sm text-gray-500 ml-2">{item.date}</span>
              
              <h2 className="text-xl font-bold my-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              
              {item.type === 'blog' ? (
                <Link 
                  href={`/blogs/${item.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read Article →
                </Link>
              ) : (
                <a
                  href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Watch on YouTube →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}