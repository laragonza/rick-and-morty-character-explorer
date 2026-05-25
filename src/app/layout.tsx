import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";

export const metadata: Metadata = {
  title: "Rick y Morty",
  description: "Final",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><div className="MainContainer">
      <div className="TitleContainer">
        <h1>Rick y Morty</h1>
      </div>
      {children}
    </div></body>
    </html>
  );
}
