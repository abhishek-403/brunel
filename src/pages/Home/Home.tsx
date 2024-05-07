import FAQ from "../../components/faq/FAQ";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="h-[100%] flex flex-col gap-10 pb-20">
      <div className="p-2">
        <Navbar />
      </div>
      <div className="w-full">
        <Hero />
      </div>
      <div className="px-4  mt-24">
        <FAQ />
      </div>
      <div className="px-4">
        <Footer />
      </div>
    </div>
  );
}
