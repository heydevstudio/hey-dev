"use client";

import { IFaqItem } from "@/app/types";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

interface IProps {
  faqItem: IFaqItem;
}

function FaqItem({ faqItem }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="flex flex-col w-full p-8 text-left bg-[#323232] rounded border border-[#b0f45a] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center w-full">
        <p className="w-5/6 text-lg font-medium">{faqItem.question}</p>

        {isOpen ? (
          <FiMinus className="text-2xl" />
        ) : (
          <FiPlus className="text-2xl" />
        )}
      </div>

      {isOpen ? (
        <p className="mt-2 text-neutral-300">{faqItem.answer}</p>
      ) : null}
    </button>
  );
}

export default FaqItem;
