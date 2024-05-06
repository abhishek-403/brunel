import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="h-[100%]">
      <div className="p-2">
        
      <Navbar />
      </div>
      <div className="w-full">
        <Hero />
      </div>
    </div>
  );
}
