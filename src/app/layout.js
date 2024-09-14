import localFont from "next/font/local";
import {Inter} from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "500"],
});

const LogoFont = localFont({
  src: "./fonts/Avenir-next-lt-pro/AvenirNextLTPro-Bold.otf",
  variable: "--font-logo",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GradHub",
  description: "GradHub",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${LogoFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
