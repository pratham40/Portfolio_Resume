import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Header";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
        <ContactUs/>
        <Footer/>
    </>
  );
}
