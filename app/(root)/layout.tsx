import Footer from "@/components/footer";
import Header from "@/components/header";
import { FC } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-primary text-white text-center py-2 text-sm">
        THIS WEEKEND <span className="font-bold">SALE 20% OFF</span> ON ALL
        PRODUCTS
      </div>
      <Header />
      <main className="flex flex-col justify-center items-center min-h-screen max-w-screen-2xl mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
