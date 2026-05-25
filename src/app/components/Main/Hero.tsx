import Section from "./common/Section";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <Section id="hero" aos="fade-right">
      <div className="flex max-w-[42rem] flex-1 flex-col items-center gap-4 text-center lg:items-start lg:text-left">
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
          className="mt-2 rounded bg-[#b0f45a] px-4 py-2 text-[1.15rem] font-medium text-[#323232] transition hover:brightness-90"
          href="https://api.whatsapp.com/send?phone=5493413656826&text=Hola,%20quiero%20solicitar%20un%20presupuesto%20para%20mi%20proyecto%20web"
          target="_blank"
        >
          Solicitar Presupuesto
        </Link>
      </div>
      <div className="flex aspect-square w-full max-w-[12rem] items-center justify-center lg:w-1/3 lg:max-w-96">
        <Image
          src="/img/web-icon.svg"
          alt="Ícono web"
          width={0}
          height={0}
          className="h-auto w-full"
          priority
        />
      </div>
    </Section>
  );
}

export default Hero;
