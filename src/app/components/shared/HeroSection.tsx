interface HeroSectionProps {
  title: string;
  description: string;
  className?: string;
}

export const HeroSection = ({
  title,
  description,
  className = ''
}: HeroSectionProps) => {
  return (
    <section className={`bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <h2 className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            {description}
          </h2>
        </div>
      </div>
    </section>
  );
};