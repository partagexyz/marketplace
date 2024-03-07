"use client";

import "@near-wallet-selector/modal-ui/styles.css";
import { Inter } from "next/font/google";
import "../styles.css";
// import "./globals.css";
import "@/assets/css/style.css";
// import "@/assets/vendor/aos/aos.css";

import "@/assets/vendor/bootstrap/css/bootstrap.min.css";
import "@/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/assets/vendor/boxicons/css/boxicons.min.css";
import "@/assets/vendor/glightbox/css/glightbox.min.css";
import "@/assets/vendor/remixicon/remixicon.css";
import "@/assets/vendor/swiper/swiper-bundle.min.css";

import { MintbaseWalletContextProvider } from "@mintbase-js/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { mbjs } from "@mintbase-js/sdk";

import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const isDev = process.env.NEXT_PUBLIC_ENV === 'dev'

export const getCallbackUrl = () => {
  let callbackUrl = ''

  if (typeof window !== 'undefined') {
    callbackUrl =
      isDev || window?.location?.host.includes('localhost')
        ? `http://${window?.location.host}`
        : `}`
  }

  return callbackUrl
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  mbjs.config({
    network: process.env.NEXT_PUBLIC_NETWORK || 'mainnet'
  })

  // switch network at the app level
  const MintbaseWalletSetup = {
    contractAddress: "partagev2.mintbase1.near",
    network: "mainnet" as any,
    callbackUrl: "http://localhost:3000",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MintbaseWalletContextProvider {...MintbaseWalletSetup}>
        <html lang="en">
          <body className={inter.className}>
              <Navbar />
              <div className="min-h-screen">{children}</div>
              <Footer />
          </body>
        </html>
      </MintbaseWalletContextProvider>
    </QueryClientProvider>
  );
}
