import { contentItems } from "@/lib/content";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = contentItems.find(item => 
    item.type === 'blog' && item.slug === params.slug
  );
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-64 object-cover mb-8 rounded-lg"
        />
        <div className="prose max-w-none">
          {post.content?.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}