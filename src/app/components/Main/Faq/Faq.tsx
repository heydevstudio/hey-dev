import { IFaqItem } from "@/app/types";
import Section from "../common/Section";
import FaqItem from "./FaqItem";

function Faq() {
  const faqItems: IFaqItem[] = [
    {
      question: "¿Trabajan con clientes de cualquier lugar?",
      answer:
        "Sí, atendemos proyectos de cualquier parte del mundo, adaptándonos a las necesidades del cliente.",
    },
    {
      question:
        "¿Pueden desarrollar proyectos para distintos rubros e industrias?",
      answer:
        "Sí, podemos trabajar con proyectos de diversos rubros, personalizando cada solución según el sector.",
    },
    {
      question: "¿Aceptan proyectos pequeños o solo grandes desarrollos?",
      answer:
        "Aceptamos proyectos de cualquier envergadura, garantizando atención y calidad en todos los casos.",
    },
    {
      question: "¿Las interfaces se ajustan a distintos tamaños de pantalla?",
      answer:
        "Sí, las interfaces que desarrollamos son responsivas, es decir, que se ajustan a todos los dispositivos.",
    },
    {
      question: "¿Incluyen hosting y dominio?",
      answer:
        "Sí, proporcionamos hosting y dominio como parte del servicio de mantenimiento y soporte, asegurando que tu proyecto esté siempre en línea.",
    },
    {
      question: "¿Cuánto tiempo lleva completar un proyecto?",
      answer:
        "El tiempo depende del tipo y complejidad del proyecto. Normalmente, un desarrollo estándar puede demorar entre 3 y 8 semanas.",
    },
  ];

  return (
    <Section id="faq" title="FAQ" aos="fade-right">
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        {faqItems.map((faqItem, index) => (
          <FaqItem key={index} faqItem={faqItem} />
        ))}
      </div>
    </Section>
  );
}

export default Faq;
