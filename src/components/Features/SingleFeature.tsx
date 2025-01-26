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
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{paragraph}</p>
    </div>
  );
};

export default SingleFeature;
