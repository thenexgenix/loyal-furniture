import { Button } from "@/components/ui/button";

interface HeroCardProps {
  backgroundImage: string;
  discount: string;
  discountColor?: string;
  title: string;
  buttonText?: string;
  buttonStyle?: string;
  className?: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  backgroundImage,
  discount,
  discountColor = "text-white/90",
  title,
  buttonText = "Shop Now",
  buttonStyle = "bg-white hover:bg-white/90 text-black",
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat h-full ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full p-4 sm:p-6 lg:p-8">
        <div className="max-w-sm">
          <p className={`${discountColor} text-xs font-medium mb-2`}>
            {discount}
          </p>
          <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-3 sm:mb-4">
            {title}
          </h1>
          <Button
            className={`${buttonStyle} px-4 sm:px-6 py-2 text-sm font-medium`}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

const FurnitureHero = () => {
  const heroCards = [
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      discount: "Up to 25% Discount",
      discountColor: "text-white/90",
      title: "Explore Our Luxurious Sofa Set Collection",
      buttonStyle: "bg-white hover:bg-white/90 text-black",
    },
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      discount: "20% Discount",
      discountColor: "text-yellow-400",
      title: "New Combo Collection",
      buttonStyle: "bg-yellow-400 hover:bg-yellow-500 text-black",
    },
  ];

  return (
    <div className="w-full max-h-[400px] p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
        {heroCards.map((card, index) => (
          <HeroCard
            key={index}
            backgroundImage={card.backgroundImage}
            discount={card.discount}
            discountColor={card.discountColor}
            title={card.title}
            buttonStyle={card.buttonStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default FurnitureHero;
