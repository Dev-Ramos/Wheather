import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{
        backgroundImage: "url('https://png.pngtree.com/background/20221224/original/pngtree-gradient-smudged-cloud-sky-picture-image_1986612.jpg')"
        , backgroundSize: "cover"
        , backgroundPosition: "center"
      }}>
        {children}
      </body>
    </html>
  );
}
