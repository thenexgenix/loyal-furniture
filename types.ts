type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type HeroCardProps = {
  backgroundImage: string;
  discount: string;
  discountColor?: string;
  title: string;
  buttonText?: string;
  buttonStyle?: string;
  className?: string;
};

type ProductSectionProps = {
  title: string;
  products: Product[];
  seeAllHref?: string;
  seeAllText?: string;
  className?: string;
  productGridClassName?: string;
  maxProducts?: number;
};

export type { Product, HeroCardProps, ProductSectionProps };
