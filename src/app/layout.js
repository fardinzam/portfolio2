import { Manuale } from "next/font/google";
import "./globals.css";

const manuale = Manuale({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Dean | Portfolio",
  description: "Dean's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="container" className={`${manuale.className} min-h-screen w-screen flex flex-col items-center justify-center text-alabaster`} >
        <div className="bg"></div>
        <div className="w-[95%] h-[95%] flex flex-col fixed border-[1px] absolute border-alabaster overflow-y-scroll overflow-x-hidden no-scrollbar">
          {children}
        </div>
      </body>
    </html>
  );
}
