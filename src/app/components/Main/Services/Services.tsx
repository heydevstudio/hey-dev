import { IServiceItem } from "@/app/types";
import { GoGoal } from "react-icons/go";
import { FiLayout } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { LuSettings } from "react-icons/lu";
import Section from "../common/Section";
import ServiceItem from "./ServiceItem";

function Services() {
  const serviceItems: IServiceItem[] = [
    {
      icon: <GoGoal className="text-7xl text-[#b0f45a]" />,
      title: "Landing Pages",
      description:
        "Hacemos landing pages optimizadas para conversiones, enfocadas en captar leads, promover productos o servicios y maximizar resultados.",
      videoId: "4G1cCCMgnXU",
    },
    {
      icon: <FiLayout className="text-7xl text-[#b0f45a]" />,
      title: "Sitios Web",
      description:
        "Creamos sitios web que reflejan la identidad y valores de tu negocio, con un diseño profesional, navegación intuitiva y contenido estratégico.",
      videoId: "BbwpG-Pt-CU",
    },
    {
      icon: <BsCart2 className="text-7xl text-[#b0f45a]" />,
      title: "Tiendas Online",
      description:
        "Construimos e-commerce seguros para vender tus productos o servicios en línea, con integración de pasarelas de pago y gestión de inventarios.",
      videoId: "JxBZoj7igGs",
    },
    {
      icon: <LiaPuzzlePieceSolid className="text-7xl text-[#b0f45a]" />,
      title: "Aplicaciones Web Personalizadas",
      description:
        "Ideamos soluciones a medida, orientadas a optimizar los recursos de tu negocio, automatizando procesos y mejorando la eficiencia operativa.",
      videoId: "4WXg4wQP1ac",
    },
    {
      icon: <LuSettings className="text-7xl text-[#b0f45a]" />,
      title: "Mantenimiento y Soporte",
      description:
        "Ofrecemos mantenimiento continuo y soporte 24/7 para garantizar el rendimiento óptimo de tu web.",
      videoId: "zPwCnL-GepA",
    },
  ];

  return (
    <Section id="services" title="Servicios" aos="fade-right">
      <div className="md:flex-row md:flex-wrap md:items-start flex flex-col justify-center items-center gap-10 w-full text-center">
        {serviceItems.map((serviceItem, index) => (
          <ServiceItem key={index} serviceItem={serviceItem} />
        ))}
      </div>
    </Section>
  );
}

export default Services;
