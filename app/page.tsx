import Footer from "@/src/components/Sections/Footer";
import Header from "@/src/components/Sections/Header";
import Hero from "@/src/components/Sections/Home";
import About from "@/src/components/Sections/About";
import Services from "@/src/components/Sections/Services";
import WhyUs from "@/src/components/Sections/WhyUs";
import Contact from "@/src/components/Sections/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
