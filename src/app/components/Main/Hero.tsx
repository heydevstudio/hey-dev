import Section from "./common/Section";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <Section id="hero" aos="fade-right">
      <div className="lg:items-start lg:text-left flex-1 flex flex-col items-center gap-4 max-w-[42rem] text-center">
        <h1 className="w-full text-5xl font-bold">
          Agencia de{" "}
          <span className="text-[#b0f45a]">diseño y desarrollo web</span> a
          medida
        </h1>
        <p className="text-[1.25rem]">
          Implementamos soluciones modernas y efectivas que se adaptan a las
          necesidades de tu negocio.
        </p>
        <Link
          className="mt-2 py-2 px-4 text-[1.15rem] font-medium text-[#323232] bg-[#b0f45a] rounded transition hover:brightness-90"
          href="https://api.whatsapp.com/send?phone=5493413656826&text=Hola,%20quiero%20solicitar%20un%20presupuesto%20para%20mi%20proyecto%20web"
          target="_blank"
        >
          Solicitar Presupuesto
        </Link>
      </div>
      <div className="lg:w-1/3 lg:max-w-96 flex justify-center items-center w-full max-w-[12rem] aspect-square">
        <Image
          src="/img/web-icon.svg"
          alt="Ícono web"
          width={0}
          height={0}
          className="w-full h-auto"
          priority
        />
      </div>
    </Section>
  );
}

export default Hero;
