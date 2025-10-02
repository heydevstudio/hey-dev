"use client";

import { IServiceItem } from "@/app/types";
import { useEffect, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

interface IProps {
  serviceItem: IServiceItem;
}

function ServiceItem({ serviceItem }: IProps) {
  const [videoIsOpen, setVideoIsOpen] = useState(false);

  useEffect(() => {
    if (videoIsOpen) {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;

      document.body.style.overflowY = "hidden";
      document.body.style.padding = `0 ${scrollbarWidth / 2}px`;
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.padding = "0";
    }
  }, [videoIsOpen]);

  return (
    <>
      <article className="flex flex-col gap-4 items-center p-8 max-w-[350px] bg-[#323232] border border-[#b0f45a] rounded">
        {serviceItem.icon}
        <h3 className="text-2xl font-bold">{serviceItem.title}</h3>
        <p>{serviceItem.description}</p>
        <button
          className="mt-2 cursor-pointer"
          onClick={() => setVideoIsOpen(true)}
        >
          <FaRegPlayCircle className="text-[#b0f45a] text-5xl" />
        </button>
      </article>

      {videoIsOpen
        ? createPortal(
            <div
              className="z-30 fixed inset-0 flex justify-center items-center w-screen h-screen bg-[#00000080]"
              onClick={() => setVideoIsOpen(false)}
            >
              <div
                className="sm:w-[75%] relative w-[calc(100%-2rem)] max-w-[50rem] aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-0 right-0 -translate-y-[calc(100%+0.5rem)] cursor-pointer transition hover:brightness-90"
                  onClick={() => setVideoIsOpen(false)}
                >
                  <RxCross2 className="text-4xl" />
                </button>
                <iframe
                  src={`https://www.youtube.com/embed/${serviceItem.videoId}?autoplay=1`}
                  title={serviceItem.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

export default ServiceItem;
