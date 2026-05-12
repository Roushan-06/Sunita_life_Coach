import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-lora">Latest Insights & Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actionable advice, mindset shifts, and energy healing tips to support your transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group border border-border">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold tracking-wider text-violet-600 dark:text-violet-400 uppercase mb-3">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3 font-lora line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link to={`/blog/${blog.id}`} className="text-violet-600 dark:text-violet-400 font-semibold flex items-center hover:text-violet-700 dark:hover:text-violet-300 transition-colors w-fit mt-auto">
                  Read More 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
