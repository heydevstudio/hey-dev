import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hey Dev | Agencia de diseño y desarrollo web a medida",
  description:
    "Implementamos soluciones modernas y efectivas que se adaptan a las necesidades de tu negocio.",
};

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} bg-[#323232] text-pretty text-white`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
