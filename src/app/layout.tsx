import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Hey Dev | Agencia de diseño y desarrollo web a medida",
  description:
    "Implementamos soluciones modernas y efectivas que se adaptan a las necesidades de tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} text-pretty text-white bg-[#323232]`}
      >
        {children}
      </body>
    </html>
  );
}
