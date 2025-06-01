import Footer from "@/components/footer";
import Header from "@/components/header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <div className="bg-[#380e4f] text-[#ffffff] text-center py-2 text-sm">
        THIS WEEKEND <span className="font-bold">SALE 20% OFF</span> ON ALL
        PRODUCTS
      </div>
      <Header />
      <main className="flex flex-col justify-center items-center min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
