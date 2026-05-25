import { IWhyChooseUsItem } from "@/app/types";
import { BsEyeglasses } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { AiOutlineRocket } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import Section from "../common/Section";
import WhyChooseUsItem from "./WhyChooseUsItem";
import Image from "next/image";

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

function WhyChooseUs() {
  return (
    <Section id="why-choose-us" title="Por Qué Elegirnos" aos="fade-left">
      <div className="flex w-full max-w-[32rem] flex-col justify-center gap-10 text-center md:max-w-none md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-10">
          {whyChooseUsItems.slice(0, 2).map((whyChooseUsItem, index) => (
            <WhyChooseUsItem key={index} whyChooseUsItem={whyChooseUsItem} />
          ))}
        </div>
        <div className="relative hidden w-1/4 max-w-72 self-center lg:block">
          <Image
            src="/img/hey-dev-icon.svg"
            alt="Ícono Hey Dev"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
        <div className="flex flex-1 flex-col items-center gap-10">
          {whyChooseUsItems.slice(2, 4).map((whyChooseUsItem, index) => (
            <WhyChooseUsItem key={index} whyChooseUsItem={whyChooseUsItem} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default WhyChooseUs;
