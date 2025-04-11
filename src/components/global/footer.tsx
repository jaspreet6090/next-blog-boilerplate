import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Category 1", href: "/category-1" },
  { label: "Category 2", href: "/category-2" },
  { label: "Category 3", href: "/category-3" },
  { label: "Category 4", href: "/category-4" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "DMCA", href: "/dmca" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-accent text-center py-4 mt-12 lg:mt-24 ">
      <div className="container grid sm:grid-cols-[1fr_2fr] gap-8 py-4">
        <div className="flex flex-col items-center lg:items-start ">
          <Link href="/" passHref>
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={32}
              height={32}
              className="w-44 h-12  dark:invert object-contain "
            />
          </Link>

          <span className="text-foreground text-sm">
            Knowledge hub for sneaker enthusiasts.
          </span>
        </div>
        <div className=" grid grid-rows-4 lg:grid-rows-3  grid-flow-col">
          {footerLinks.map((link, index) => (
            <Link
              passHref
              key={index}
              href={link.href}
              className="p-2 text-sm sm:text-base text-foreground hover:text-foreground/90 transition-colors  text-left"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <span className="col-span-full border-t pt-8 mt-4  text-foreground text-sm ">
          © {new Date().getFullYear()} Jaspreet Singh. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
