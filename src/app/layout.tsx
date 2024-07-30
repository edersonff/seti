import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Seti - Soluções em Tecnologia",
  description:
    "Oferecemos soluções com softwares de gestão, destacando-se pelas equipes comprometidas com os resultados dos clientes.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Seti TI",
    title: "Seti - Soluções em Tecnologia",
    description:
      "Oferecemos soluções com softwares de gestão, destacando-se pelas equipes comprometidas com os resultados dos clientes.",
    images: [
      {
        url: process.env.NEXT_PUBLIC_URL + "/og/image.png",
        width: 1280,
        height: 720,
        alt: "Seti - Soluções em Tecnologia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
