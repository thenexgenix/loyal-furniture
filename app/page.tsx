import { Button } from "@/components/ui/button";

const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
};

export default Home;
