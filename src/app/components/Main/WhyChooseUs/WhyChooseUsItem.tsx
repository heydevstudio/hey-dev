import { IWhyChooseUsItem } from "@/app/types";

interface IProps {
  whyChooseUsItem: IWhyChooseUsItem;
}

function WhyChooseUsItem({ whyChooseUsItem }: IProps) {
  return (
    <article className="flex w-full flex-col items-center gap-4">
      <div className="flex aspect-square items-center justify-center rounded-full bg-[#b0f45a] p-6">
        {whyChooseUsItem.icon}
      </div>
      <h3 className="text-2xl font-bold">{whyChooseUsItem.title}</h3>
      <p>{whyChooseUsItem.description}</p>
    </article>
  );
}

export default WhyChooseUsItem;
