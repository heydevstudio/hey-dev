import AOSInit from "./AOSInit";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Services from "./Services/Services";
import WorkProcess from "./WorkProcess/WorkProcess";
import Faq from "./Faq/Faq";
import Contact from "./Contact/Contact";

function Main() {
  return (
    <main className="md:px-16 relative overflow-hidden size-full px-6">
      <AOSInit />
      <Hero />
      <WhyChooseUs />
      <Services />
      <WorkProcess />
      <Faq />
      <Contact />
    </main>
  );
}

export default Main;
