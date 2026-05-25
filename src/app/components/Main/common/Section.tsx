import { ReactNode } from "react";

interface IProps {
  id?: string;
  title?: string;
  aos?: string;
  children: ReactNode;
}

function Section({ id, title, aos, children }: IProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl py-16 ${
        !title
          ? "flex items-center lg:h-[calc(100vh-7rem)] lg:max-h-[40rem] lg:py-0"
          : ""
      }`}
    >
      <div
        className={`flex w-full items-center ${
          !title
            ? "flex-col-reverse justify-center gap-8 lg:flex-row lg:gap-16"
            : "flex-col gap-12"
        }`}
        data-aos={aos}
      >
        {title ? (
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-center text-4xl font-bold">{title}</h2>
            <div className="relative flex h-[5px] w-full items-center justify-center">
              <div className="absolute top-[2px] h-[1px] w-1/2 bg-[#b0f45a]"></div>
              <div className="absolute top-0 h-[5px] w-1/6 bg-[#b0f45a]"></div>
            </div>
          </div>
        ) : null}

        {children}
      </div>
    </section>
  );
}

export default Section;
