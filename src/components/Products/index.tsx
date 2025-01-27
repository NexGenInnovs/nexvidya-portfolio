"use client";

import Image from "next/image";
import { useState } from "react";
import { ComponentProps } from "@/types/componentProps";

const Products = ({id}: ComponentProps) => {
  const [activeApp, setActiveApp] = useState<'web' | 'mobile'>('web');

  const webFeatures = [
    "Access from any browser or computer.",
    "User-friendly interface for easy management.",
    "Rich in features designed for all types of users."
  ];

  const mobileFeatures = [
    "Available on iOS and Android devices.",
    "On-the-go access to essential features.",
    "Optimized for mobile performance."
  ];

  return (
    <section id={id} className="relative min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-blue-200 px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl h-full flex flex-col">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium">Our Products</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience Seamless Solutions
          </h2>
          <div className="mt-4 inline-flex rounded-full bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveApp('web')}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeApp === 'web'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Web App
            </button>
            <button
              onClick={() => setActiveApp('mobile')}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeApp === 'mobile'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Mobile App
            </button>
          </div>
        </div>

        <div className="flex-grow grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative flex justify-center items-center">
              <Image
                src={`/images/products/${activeApp === 'web' ? 'laptop.png' : 'mobile.png'}`}
                alt={`School Management System ${activeApp === 'web' ? 'Web' : 'Mobile'} Application`}
                width={500}
                height={500}
                className="relative transition-all duration-500"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {activeApp === 'web' ? 'Web' : 'Mobile'} Application Features
            </h3>
            <div className="space-y-4">
              {(activeApp === 'web' ? webFeatures : mobileFeatures).map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 transform transition-all duration-300"
                  style={{
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`
                  }}
                >
                  <svg
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
