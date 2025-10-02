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
      className={`w-full max-w-7xl mx-auto py-16 ${
        !title
          ? "lg:h-[calc(100vh-7rem)] lg:max-h-[40rem] lg:py-0 flex items-center"
          : ""
      }`}
    >
      <div
        className={`flex items-center w-full ${
          !title
            ? "lg:flex-row lg:gap-16 flex-col-reverse justify-center gap-8"
            : "flex-col gap-12"
        }`}
        data-aos={aos}
      >
        {title ? (
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-4xl font-bold text-center">{title}</h2>
            <div className="relative flex justify-center items-center w-full h-[5px]">
              <div className="absolute top-[2px] w-1/2 h-[1px] bg-[#b0f45a]"></div>
              <div className="absolute top-0 w-1/6 h-[5px] bg-[#b0f45a]"></div>
            </div>
          </div>
        ) : null}

        {children}
      </div>
    </section>
  );
}

export default Section;
