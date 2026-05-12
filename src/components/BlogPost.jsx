import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-background text-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <Link to="/#blog" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link to="/#blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
          <div className="h-64 sm:h-96 w-full relative">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white">
              <span className="text-white font-semibold uppercase tracking-wider bg-primary/80 px-3 py-1 rounded-full text-xs mb-3 inline-block">
                {blog.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-lora leading-tight shadow-sm">
                {blog.title}
              </h1>
            </div>
          </div>
          
          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center">
                <span className="font-medium mr-1">Date:</span> {blog.date}
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1">Author:</span> {blog.author}
              </div>
            </div>
            
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-lora prose-a:text-primary prose-h3:text-2xl prose-h4:text-xl prose-h3:mt-8 prose-h3:mb-4"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
