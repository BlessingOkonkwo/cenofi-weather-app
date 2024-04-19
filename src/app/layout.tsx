import type { Metadata } from "next";
import { Montserrat, Inter, Roboto } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "@/redux/provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App",
  applicationName: "weather app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className={`${montserrat.variable}`}>
        <Providers>
          <div className=" w-full min-h-screen h-full flex flex-col items-center p-20 text-base">
            <main className="w-full bg-whie rounded-l borde border-borde shadow-l p-">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
