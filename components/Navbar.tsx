"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Menu, X, PhoneCall } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-white/90 shadow-lg backdrop-blur-2xl"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            {/* IMAGE */}
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md sm:h-14 sm:w-14">
              <Image
                src="/logo.png"
                alt="TALA AABDUL RAHMAN ALMUHANNA CO."
                fill
                priority
                className="object-contain p-2"
              />
            </div>

            {/* TEXT */}
            <div className="leading-none">
              <h1 className="text-[10px] font-black uppercase tracking-[0.12em] text-[#0B0F19] sm:text-sm">
                TALA AABDUL RAHMAN
              </h1>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-gray-500 sm:mt-2 sm:text-[11px] sm:tracking-[0.32em]">
                ALMUHANNA CO.
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative text-sm font-black uppercase tracking-[0.14em] transition duration-300 ${
                    isActive
                      ? "text-[#36B1C7]"
                      : "text-gray-700 hover:text-[#36B1C7]"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="https://wa.me/966531553364"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(54,177,199,0.3)] transition duration-300 hover:scale-105 lg:inline-flex"
          >
            <PhoneCall size={18} />
            WhatsApp
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-md transition hover:scale-105 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl lg:hidden"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[88%] max-w-sm flex-col bg-[#050816] px-6 pb-8 pt-24 shadow-2xl lg:hidden"
            >
              {/* LINKS */}
              <div className="space-y-2">
                {navLinks.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center rounded-2xl px-4 py-4 text-lg font-black uppercase tracking-[0.12em] transition ${
                          isActive
                            ? "bg-white/10 text-[#36B1C7]"
                            : "text-white hover:bg-white/5 hover:text-[#36B1C7]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-10">
                <a
                  href="https://wa.me/966531553364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_30px_rgba(54,177,199,0.3)]"
                >
                  <PhoneCall size={18} />
                  Contact on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}