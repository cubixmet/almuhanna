import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Products", href: "/products" },
  { title: "Contact", href: "/contact" },
];

const productLinks = [
  "Low Voltage Components",
  "Enclosures",
  "Copper Products",
  "Terminal Blocks",
  "Power Monitoring",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#060B16] text-white">
      {/* GLOW */}
      <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-[#36B1C7]/20 blur-[100px] sm:h-[400px] sm:w-[400px]" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-[#960B33]/20 blur-[100px] sm:h-[400px] sm:w-[400px]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 sm:pt-24 lg:px-10">
        {/* TOP */}
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-4 lg:gap-16 lg:pb-16">
          {/* COMPANY */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 sm:items-center">
              {/* LOGO */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_0_40px_rgba(54,177,199,0.15)] sm:h-16 sm:w-16 sm:rounded-3xl">
                <Image
                  src="/logo.png"
                  alt="TALA AABDUL RAHMAN ALMUHANNA CO."
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* NAME */}
              <div className="leading-none">
                <h2 className="text-sm font-black uppercase tracking-[0.08em] text-white sm:text-2xl">
                  TALA AABDUL RAHMAN
                </h2>

                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400 sm:text-[11px] sm:tracking-[0.35em]">
                  ALMUHANNA CO.
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-8 sm:text-base sm:leading-8">
              Trusted industrial supply partner in Saudi Arabia delivering
              premium electrical and mechanical solutions for construction,
              industrial automation, infrastructure, and engineering projects.
            </p>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">
              <a
                href="https://wa.me/966531553364"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_40px_rgba(54,177,199,0.25)] transition duration-300 hover:scale-[1.02] sm:inline-flex sm:w-auto sm:px-8 sm:text-sm"
              >
                Contact on WhatsApp

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-base font-black uppercase tracking-[0.15em] sm:text-lg">
              Quick Links
            </h3>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-3 text-gray-400 transition duration-300 hover:text-[#36B1C7]"
                >
                  <ChevronRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-base font-black uppercase tracking-[0.15em] sm:text-lg">
              Product Categories
            </h3>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {productLinks.map((item) => (
                <Link
                  key={item}
                  href="/products"
                  className="group flex items-center gap-3 text-gray-400 transition duration-300 hover:text-[#36B1C7]"
                >
                  <ChevronRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm">
                    {item}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="grid gap-4 border-b border-white/10 py-8 sm:gap-6 sm:py-10 lg:grid-cols-3">
          {[
            {
              icon: <Phone size={22} />,
              title: "Phone",
              content: (
                <a
                  href="tel:+966531553364"
                  className="mt-2 block text-base font-bold text-white transition hover:text-[#36B1C7] sm:text-lg"
                >
                  966531553364
                </a>
              ),
            },
            {
              icon: <Mail size={22} />,
              title: "Email",
              content: (
                <a
                  href="mailto:sales@almohannasa.com"
                  className="mt-2 block break-all text-base font-bold text-white transition hover:text-[#36B1C7] sm:text-lg"
                >
                  sales@almohannasa.com
                </a>
              ),
            },
            {
              icon: <MapPin size={22} />,
              title: "Location",
              content: (
                <p className="mt-2 text-base font-bold leading-7 text-white sm:text-lg">
                  Ghorabi Electrical Market,
                  <br />
                  Batha, Riyadh
                </p>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#36B1C7]/15 text-[#36B1C7] sm:h-14 sm:w-14">
                {item.icon}
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
                  {item.title}
                </p>

                {item.content}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center sm:pt-8 lg:flex-row lg:text-left">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © 2026 TALA AABDUL RAHMAN ALMUHANNA CO. All rights reserved.
          </p>

          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            Premium Electrical & Mechanical Industrial Supply Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}