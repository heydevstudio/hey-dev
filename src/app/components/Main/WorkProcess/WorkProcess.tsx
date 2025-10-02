import { IWorkProcessItem } from "@/app/types";
import Section from "../common/Section";
import WorkProcessItem from "./WorkProcessItem";

function WorkProcess() {
  const workProcess: IWorkProcessItem[] = [
    {
      title: "Análisis y Planificación",
      description:
        "Estudiamos tu negocio, objetivos y necesidades específicas para definir una estrategia sólida, estructurar el alcance del proyecto y establecer prioridades.",
    },
    {
      title: "Diseño y Desarrollo",
      description:
        "Diseñamos interfaces atractivas y funcionales, y desarrollamos soluciones eficientes utilizando tecnologías actuales, enfocándonos en usabilidad y rendimiento.",
    },
    {
      title: "Ajuste y Control",
      description:
        "Aplicamos los ajustes necesarios para perfeccionar el resultado y validamos el funcionamiento general antes del lanzamiento.",
    },
    {
      title: "Despliegue y Seguimiento",
      description:
        "Ponemos el proyecto en línea, supervisamos su rendimiento inicial y ofrecemos mantenimiento continuo para asegurar su evolución.",
    },
  ];

  return (
    <Section id="work-process" title="Proceso de Trabajo" aos="fade-left">
      <div className="md:grid-cols-2 md:max-w-5xl grid grid-cols-1 gap-10 w-full max-w-[32rem] text-center">
        {workProcess.map((workProcessItem, index) => (
          <WorkProcessItem
            key={index}
            step={index + 1}
            workProcessItem={workProcessItem}
          />
        ))}
      </div>
    </Section>
  );
}

export default WorkProcess;
