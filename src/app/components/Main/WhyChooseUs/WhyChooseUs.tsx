import { IWhyChooseUsItem } from "@/app/types";
import { BsEyeglasses } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { AiOutlineRocket } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import Section from "../common/Section";
import WhyChooseUsItem from "./WhyChooseUsItem";
import Image from "next/image";

function WhyChooseUs() {
  const whyChooseUsItems: IWhyChooseUsItem[] = [
    {
      icon: <BsEyeglasses className="text-6xl text-[#323232]" />,
      title: "Calidad y detalle en cada proyecto",
      description:
        "Fusionamos precisión y creatividad para lograr soluciones confiables.",
    },
    {
      icon: <FaCode className="text-6xl text-[#323232]" />,
      title: "Tecnología de vanguardia",
      description:
        "Utilizamos tecnologías de última generación para garantizar desarrollos potentes y escalables.",
    },
    {
      icon: <AiOutlineRocket className="text-6xl text-[#323232]" />,
      title: "Optimización para SEO y velocidad",
      description:
        "Generamos webs visibles, rápidas y centradas en la experiencia del usuario.",
    },
    {
      icon: <FaCheck className="text-6xl text-[#323232]" />,
      title: "Enfoque en resultados",
      description:
        "Trabajamos para aportar valor real y tangible para tu negocio.",
    },
  ];

  return (
    <Section id="why-choose-us" title="Por Qué Elegirnos" aos="fade-left">
      <div className="md:flex-row md:max-w-none flex flex-col justify-center gap-10 w-full max-w-[32rem] text-center">
        <div className="flex-1 flex flex-col items-center gap-10">
          {whyChooseUsItems.slice(0, 2).map((whyChooseUsItem, index) => (
            <WhyChooseUsItem key={index} whyChooseUsItem={whyChooseUsItem} />
          ))}
        </div>
        <div className="lg:block relative hidden self-center w-1/4 max-w-72">
          <Image
            src="/img/hey-dev-icon.svg"
            alt="Ícono Hey Dev"
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 flex flex-col items-center gap-10">
          {whyChooseUsItems.slice(2, 4).map((whyChooseUsItem, index) => (
            <WhyChooseUsItem key={index} whyChooseUsItem={whyChooseUsItem} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default WhyChooseUs;
