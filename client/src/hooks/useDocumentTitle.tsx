import { useEffect } from 'react';

interface MetaTags {
  title: string;
  description?: string;
  keywords?: string;
}

export const useDocumentTitle = ({ 
  title, 
  description = 'Delamore Energy Private Limited | Your trusted partner in renewable energy solutions.',
  keywords = 'renewable energy, cbg, Green Energy Production, Waste Reduction, clean energy, Bio Refinery, Super Food & Nutraceuticals, Carbon Sequestration'
}: MetaTags) => {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Delamore Energy`;

    // Set or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Set or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Cleanup function
    return () => {
      document.title = 'Delamore Energy';
      const defaultDesc = 'Delamore Energy Private Limited | Your trusted partner in renewable energy solutions.';
      const defaultKeywords = 'renewable energy, cbg, Green Energy Production, Waste Reduction, clean energy, Bio Refinery';

      if (metaDesc) metaDesc.setAttribute('content', defaultDesc);
      if (metaKeywords) metaKeywords.setAttribute('content', defaultKeywords);
    };
  }, [title, description, keywords]);
};