import React from 'react';
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { ComponentProps } from '@/types/componentProps';

const Features = ({id} : ComponentProps) => {
  return (
    <section id={id} className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose NexGen?</h2>
          <p className="text-gray-600">
            Experience the future of school management with our comprehensive solution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
