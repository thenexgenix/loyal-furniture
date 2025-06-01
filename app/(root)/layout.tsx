import Footer from "@/components/footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
