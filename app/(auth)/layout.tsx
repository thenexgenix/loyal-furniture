import Logo from "@/components/logo";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col">
      <div className="px-10 pt-3">
        <Logo />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
