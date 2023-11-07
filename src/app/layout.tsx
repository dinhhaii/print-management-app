import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="./assets/css/nucleo-svg.css" rel="stylesheet" />
        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <link
          href="./assets/css/argon-dashboard-tailwind.css?v=1.0.1"
          rel="stylesheet"
        />
      </head>
      <body className={montserrat.className}>{children}</body>

      <Script src="/assets/js/plugins/chartjs.min.js" async></Script>
      <Script src="/assets/js/plugins/perfect-scrollbar.min.js" async></Script>
      <Script src="/assets/js/argon-dashboard-tailwind.js?v=1.0.1" async />
    </html>
  );
}
