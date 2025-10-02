import { ReactNode } from "react";

export interface INavItem {
  href: string;
  label: string;
}

export interface IWhyChooseUsItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface IServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
  videoId: string;
}

export interface IWorkProcessItem {
  title: string;
  description: string;
}

export interface IFaqItem {
  question: string;
  answer: string;
}
