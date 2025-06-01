import Logo from "@/components/logo";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute -top-28 -left-20 z-10">
        <Logo />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
