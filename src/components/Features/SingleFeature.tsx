interface SingleFeatureProps {
  feature: {
    id: number;
    icon: string;
    title: string;
    paragraph: string;
  };
}

const SingleFeature = ({ feature }: SingleFeatureProps) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="relative group">
      {/* Background gradient that shows on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur"></div>
      
      {/* Main content */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-2xl">
        {/* Icon with background */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-sm transform group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative text-4xl w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md group-hover:scale-110 transition-all duration-500">
            {icon}
          </div>
        </div>

        {/* Text content */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
          {paragraph}
        </p>

        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-[-8px]">
          <svg 
            className="w-6 h-6 text-purple-500" 
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
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
