import { IWhyChooseUsItem } from "@/app/types";

interface IProps {
  whyChooseUsItem: IWhyChooseUsItem;
}

function WhyChooseUsItem({ whyChooseUsItem }: IProps) {
  return (
    <article className="flex flex-col gap-4 items-center w-full">
      <div className="flex justify-center items-center p-6 aspect-square bg-[#b0f45a] rounded-full">
        {whyChooseUsItem.icon}
      </div>
      <h3 className="text-2xl font-bold">{whyChooseUsItem.title}</h3>
      <p>{whyChooseUsItem.description}</p>
    </article>
  );
}

export default WhyChooseUsItem;
