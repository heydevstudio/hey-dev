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
      <article className="flex max-w-[350px] flex-col items-center gap-4 rounded border border-[#b0f45a] bg-[#323232] p-8">
        {serviceItem.icon}
        <h3 className="text-2xl font-bold">{serviceItem.title}</h3>
        <p>{serviceItem.description}</p>
        <button
          className="mt-2 cursor-pointer"
          onClick={() => setVideoIsOpen(true)}
        >
          <FaRegPlayCircle className="text-5xl text-[#b0f45a]" />
        </button>
      </article>

      {videoIsOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-30 flex items-center justify-center bg-[#00000080]"
              onClick={() => setVideoIsOpen(false)}
            >
              <div
                className="relative aspect-video w-[calc(100%-1.5rem)] max-w-[50rem] sm:w-[75%]"
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
                  className="size-full"
                ></iframe>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

export default ServiceItem;
