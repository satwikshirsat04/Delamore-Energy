import { contentItems } from '@/lib/content';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { PageBanner } from '@/components/PageBanner';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const BlogDetail = () => {
 

  const { slug } = useParams();
  const post = contentItems.find(item => 
    item.type === 'blog' && item.slug === slug
  );

  useDocumentTitle({
  title: post?.title || "Blog Article",
  description: "Read this interesting blog article",
  keywords: "blog, article, read"
});

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <Link 
            to="/blogs-and-podcasts" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to Articles
          </Link>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageBanner
        title={post.title}
        subtitle={`Published on ${post.date} by ${post.author}`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <Link 
              to="/blogs-and-podcasts?filter=blogs" 
              className="inline-flex items-center text-primary hover:text-primary-dark mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Articles
            </Link>
            
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
            />
          </div>

          <article className="prose prose-lg max-w-none mx-auto">
            {post.content?.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-6 text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
            
            {/* Add the Read Full Article button here */}
            {post.readMoreUrl && (
              <div className="mt-10 text-center">
                <a
                  href={post.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
                >
                  Read Full Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            )}
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              to="/blogs-and-podcasts?filter=blogs" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              View All Articles
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  );
};

export default BlogDetail;