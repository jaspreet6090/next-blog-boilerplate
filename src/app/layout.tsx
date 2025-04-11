import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import { Toaster } from "@/components/ui/sonner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://next-blog-biolerplate.vercel.app"),
  title: {
    default: "Next Blog Boilerplate",
    template: `%s | Next Blog Boilerplate`,
  },

  description:
    "Next Blog Boilerplate is a starter template for Next.js Blog website created by Jaspreet Singh",
  openGraph: {
    url: "/",
    title: "Next Blog Boilerplate",
    description:
      "Next Blog Boilerplate is a starter template for Next.js Blog website created by Jaspreet Singh",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Blog Boilerplate",
    description:
      "Next Blog Boilerplate is a starter template for Next.js Blog website created by Jaspreet Singh",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.className} bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="container flex flex-col min-h-screen mt-16 py-4  ">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" richColors closeButton duration={2500} />
      </body>
    </html>
  );
}
