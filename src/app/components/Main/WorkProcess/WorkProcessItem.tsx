import { IWorkProcessItem } from "@/app/types";

interface IProps {
  step: number;
  workProcessItem: IWorkProcessItem;
}

function WorkProcessItem({ step, workProcessItem }: IProps) {
  return (
    <article className="relative flex flex-col gap-4 justify-center items-center min-h-48">
      <span className="absolute text-[12rem] leading-48 font-bold text-[#4b593a]">
        {step}
      </span>
      <h3 className="z-10 text-2xl font-bold">{workProcessItem.title}</h3>
      <p className="z-10">{workProcessItem.description}</p>
    </article>
  );
}

export default WorkProcessItem;
