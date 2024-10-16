import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterController from "./components/models/RegisterController";
import ToastProvider from "./providers/ToastProvider"; 
import LoginController from "./components/models/LoginController copy";


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
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginController/> 
          <RegisterController/>  
          <Navbar />
        </ClientOnly>       
        {children}
        </body>
    </html>
  );
}
