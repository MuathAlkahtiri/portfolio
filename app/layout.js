import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});
export const metadata = {
  title: "Portfolio - Muath Alkathiri",
  description: "Frontend Developer from Jeddah, KSA. Specializing in React, Next.js, and modern web UI.",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



