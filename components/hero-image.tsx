const HeroImage = () => {
  return (
    <div className="relative h-[100vh] min-h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl drop-shadow-lg">
          Luxury Furniture
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl opacity-90 drop-shadow-md">
          Transform your space with our premium furniture collections
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
