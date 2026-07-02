import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { FOUNDED_YEAR } from "@/data/business";

const SITE_DESCRIPTION = `Expert car servicing, MOT testing, bodywork and repairs in Yardley Hastings, Northamptonshire. Family-run garage established in ${FOUNDED_YEAR}.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yardleyhastingsgarage.co.uk"),
  title: {
    default: "Yardley Hastings Garage | Repairs, Servicing & Car Sales | Northamptonshire",
    template: "%s | Yardley Hastings Garage",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "garage Northamptonshire",
    "car servicing Northampton",
    "MOT Yardley Hastings",
    "bodywork restoration",
    "car sales Northampton",
    "NN7 garage",
  ],
  openGraph: {
    type: "website",
    siteName: "Yardley Hastings Garage",
    locale: "en_GB",
    url: "https://www.yardleyhastingsgarage.co.uk",
    title: {
      default: "Yardley Hastings Garage | Repairs, Servicing & Car Sales | Northamptonshire",
      template: "%s | Yardley Hastings Garage",
    },
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/garage-exterior-front-2.jpg",
        width: 1200,
        height: 630,
        alt: "Yardley Hastings Garage — Bedford Rd W, Yardley Hastings, Northampton NN7 1HB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Yardley Hastings Garage | Repairs, Servicing & Car Sales | Northamptonshire",
      template: "%s | Yardley Hastings Garage",
    },
    description: SITE_DESCRIPTION,
    images: ["/assets/garage-exterior-front-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*
          Font loaded via <link> tags rather than a CSS @import — @import
          is render-blocking (the browser must fetch and resolve it before
          the rest of globals.css can apply), which was contributing to the
          juddery first paint. <link rel="preconnect"> opens the connection
          to Google's font servers early, and the stylesheet itself loads
          in parallel with everything else instead of blocking it.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
