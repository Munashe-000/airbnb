import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb guest app",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}