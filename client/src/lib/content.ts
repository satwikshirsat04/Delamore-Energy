export type ContentItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  type: 'blog' | 'podcast';
  // Blog specific
  content?: string;
  author?: string;
  slug?: string;
  // Podcast specific
  youtubeId?: string;
  duration?: string;
};

export const contentItems: ContentItem[] = [
  {
    id: "1",
    type: "blog",
    title: "The Future of Renewable Energy",
    description: "Exploring emerging trends in sustainable energy solutions",
    content: "Full article content would go here...",
    date: "2023-11-15",
    author: "Dr. Ananya Sharma",
    imageUrl: "/images/blog/energy-future.jpg",
    slug: "future-renewable-energy"
  },
  {
    id: "2",
    type: "blog",
    title: "Waste Management Innovations",
    description: "How new technologies are transforming waste processing",
    content: "Full article content would go here...",
    date: "2023-10-28",
    author: "Rahul Mehta",
    imageUrl: "/images/blog/waste-management.jpg",
    slug: "waste-management-innovations"
  },
  {
    id: "3",
    type: "podcast",
    title: "Sustainable Business Practices",
    description: "Interview with industry leaders about green initiatives",
    youtubeId: "dQw4w9WgXcQ", // Example ID
    date: "2023-11-10",
    duration: "42 min",
    imageUrl: "/images/podcasts/sustainable-business.jpg"
  },
  {
    id: "4",
    type: "podcast",
    title: "Clean Energy Technologies",
    description: "Discussion about the latest clean energy breakthroughs",
    youtubeId: "dQw4w9WgXcQ", // Example ID
    date: "2023-10-25",
    duration: "35 min",
    imageUrl: "/images/podcasts/clean-energy.jpg"
  }
];