import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";

const blogPosts = [
  {
    title: "10 Tips for Better Team Management",
    excerpt: "Learn how to effectively manage your team with these proven strategies...",
    image: "/rectangle-48.png",
    category: "Management",
    date: "Feb 1, 2024",
    readTime: "5 min read"
  },
  {
    title: "The Future of Remote Work",
    excerpt: "Discover how companies are adapting to the new normal of remote work...",
    image: "/charlie-green-3jmfencl24m-unsplash-1.png",
    category: "Workplace",
    date: "Jan 28, 2024",
    readTime: "4 min read"
  },
  {
    title: "Maximizing Productivity with recurring",
    excerpt: "Explore the features that can help boost your team's productivity...",
    image: "/rectangle-48.png",
    category: "Productivity",
    date: "Jan 25, 2024",
    readTime: "6 min read"
  }
];

export const BlogPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#191a15] mb-6">
            Latest Updates & Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest news, tips, and insights about team
            management and productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-app-primary text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#191a15] mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <a
                        href="#"
                        className="text-app-primary font-medium hover:text-app-primary/80"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};