import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Yardley Hastings Garage | Repairs, Servicing & Car Sales | Northamptonshire",
    template: "%s | Yardley Hastings Garage",
  },
  description:
    "Independent family garage in Yardley Hastings, Northamptonshire. Specialists in car and van servicing, MOT, bodywork, restoration and vehicle sales.",
  keywords: ["garage Northamptonshire", "car servicing Northampton", "MOT Yardley Hastings", "bodywork restoration", "car sales Northampton"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
