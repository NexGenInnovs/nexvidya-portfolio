'use client';

import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, btnText, btnHref } = blog;
  return (
    <div className="group relative w-[380px] flex-shrink-0">
      {/* Background gradient that shows on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
      
      {/* Main content */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-2xl overflow-hidden h-[450px]">
        {/* Image */}
        <Link href={btnHref} className="block relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
          <Image 
            src={image} 
            alt={title}
            width={380}
            height={200}
            className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
            <Link href={btnHref}>
              {title}
            </Link>
          </h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-4 line-clamp-3">
            {paragraph}
          </p>

          {/* Button */}
          <div className="absolute bottom-6 right-6">
            <Link
              href={btnHref}
              className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors duration-300"
            >
              {btnText}
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Decorative gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
      </div>
    </div>
  );
};

export default SingleBlog;
