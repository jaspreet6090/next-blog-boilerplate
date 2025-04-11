"use client";
import {  Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";



const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Category 1",
    href: "/category-1",
  },
  {
    label: "Category 2",
    href: "/category-2",
  },
  {
    label: "Category 3",
    href: "/category-3",
  },
  {
    label: "Category 4",
    href: "/category-4",
  }
];
export default function Header() {
  const [view, setView] = useState<"large" | "small" | "none">("none");
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateView = () => {
      setView(window.innerWidth >= 1024 ? "large" : "small");
    };
    updateView(); // initial check
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background border-b ">
      <nav className="container flex items-center justify-between h-16  ">
        <Link href="/" passHref>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            loading="eager"
            priority
            width={32}
            height={32}
            className="w-44 h-12  dark:invert object-contain"
          />
        </Link>

        {view === "large" && (
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                passHref
                key={item.label}
                href={item.href}
                className={cn(
                  "text-base font-medium  hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center justify-end gap-2">
         <Button aria-label="contact" asChild>
            <Link href="/contact">Contact</Link>
          </Button>

          {view === "small" && (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  aria-label="Open menu"
                  size="icon"
                  variant="ghost"
                  className="[&_svg]:size-6"
                >
                  <Menu id="hamburger" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="text-left text-2xl font-bold">
                    {" "}
                    Blue Print
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.label} asChild>
                      <Link
                        passHref
                        href={item.href}
                        className={cn(
                          "text-base font-medium  hover:text-primary",
                          pathname === item.href
                            ? "text-primary"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  {[
                    { label: "Contact", href: "/contact" },
                    { label: "About", href: "/about" },
                  ].map((item) => (
                    <SheetClose key={item.label} asChild>
                      <Link
                        passHref
                        href={item.href}
                        className={cn(
                          "text-base font-medium  hover:text-primary",
                          pathname === item.href
                            ? "text-primary"
                            : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </nav>
    </header>
  );
}
