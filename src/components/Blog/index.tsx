'use client';

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { useEffect, useState } from "react";
import { ComponentProps } from "@/types/componentProps";

const Blog = ({id}: ComponentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === blogData.length - 3 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-200 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Latest from our Blog"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => setCurrentIndex(prev => prev === 0 ? blogData.length - 3 : prev - 1)}
            title="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          <button 
            onClick={() => setCurrentIndex(prev => prev === blogData.length - 3 ? 0 : prev + 1)}
            title="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Blog Cards Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (380 + 32)}px)` }}
            >
              {blogData.map((blog) => (
                <SingleBlog key={blog.id} blog={blog} />
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: blogData.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                title={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-purple-600 w-4' : 'bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
