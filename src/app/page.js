import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Photo from "@/components/Photo";
import Tag from "@/components/Tag";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
    <>
        <Navbar />

      <Hero />
      <Works />
      <Photo />
      <Tag />
      <Footer />
    </>
  );
}
