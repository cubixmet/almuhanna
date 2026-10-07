import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Need Reliable Electrical & Mechanical Supply?",
  description = "Connect with ANS Trade for premium industrial products, competitive pricing, and fast support across Saudi Arabia.",
  primaryText = "Contact on WhatsApp",
  primaryHref = "https://wa.me/966531553364",
  secondaryText = "View Products",
  secondaryHref = "/products",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* GLOW */}
      <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[#36B1C7]/20 blur-[90px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]" />

      <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#960B33]/20 blur-[90px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-[0_0_60px_rgba(54,177,199,0.15)] backdrop-blur-2xl sm:rounded-[34px] sm:p-10 lg:rounded-[40px] lg:p-16">
          {/* INNER GLOW */}
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#36B1C7]/15 blur-[80px] sm:h-64 sm:w-64" />

          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#960B33]/15 blur-[80px] sm:h-64 sm:w-64" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            {/* TEXT */}
            <div>
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl sm:px-5">
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#36B1C7] sm:text-xs sm:tracking-[0.25em]">
                  Industrial Supply Partner
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-black uppercase leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-6xl">
                {title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                {description}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 lg:items-end">
              {/* PRIMARY */}
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_35px_rgba(54,177,199,0.25)] transition duration-300 hover:scale-[1.02] sm:px-8 sm:text-sm lg:w-auto"
              >
                <MessageCircle size={18} />
                {primaryText}
              </a>

              {/* SECONDARY */}
              <Link
                href={secondaryHref}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl transition duration-300 hover:border-[#36B1C7]/40 hover:bg-white/15 sm:px-8 sm:text-sm lg:w-auto"
              >
                {secondaryText}

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}