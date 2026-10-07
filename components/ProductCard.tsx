"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: number;
  title: string;
  code: string;
  image: string;
  category: string;
  description: string;
}

export default function ProductCard({
  id,
  title,
  code,
  image,
  category,
  description,
}: ProductCardProps) {
  const whatsappMessage = `Hello, I need more details about:
Product: ${title}
Code: ${code}`;

  const whatsappLink = `https://wa.me/966531553364?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#36B1C7]/40 hover:shadow-[0_0_50px_rgba(54,177,199,0.16)] sm:rounded-[32px]"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#36B1C7]/10 blur-3xl transition duration-500 group-hover:bg-[#36B1C7]/20 sm:h-40 sm:w-40" />

      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#960B33]/10 blur-3xl transition duration-500 group-hover:bg-[#960B33]/20 sm:h-40 sm:w-40" />

      <div className="relative h-[210px] overflow-hidden sm:h-[260px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105 sm:group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-[#050816]/10 to-transparent" />

        <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
          <span className="rounded-full border border-white/20 bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-3 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl sm:px-4 sm:text-[10px]">
            {category}
          </span>
        </div>
      </div>

      <div className="relative z-10 p-5 sm:p-7">
        <div className="mb-4 inline-flex rounded-full bg-[#36B1C7]/10 px-3 py-2 sm:mb-5 sm:px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#36B1C7] sm:text-xs">
            {code}
          </span>
        </div>

        <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-[#0B0F19] transition duration-300 group-hover:text-[#36B1C7] sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600 sm:mt-4">
          {description}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <Link
            href={`/products/${id}`}
            className="group/details inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-xs font-black uppercase tracking-[0.13em] text-[#0B0F19] transition hover:border-[#36B1C7]/30 hover:text-[#36B1C7] sm:border-0 sm:px-0 sm:py-0 sm:text-sm"
          >
            View Details
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover/details:translate-x-1 group-hover/details:-translate-y-1"
            />
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_30px_rgba(54,177,199,0.25)] transition duration-300 hover:scale-[1.02]"
          >
            <MessageCircle size={16} />
            More Details
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition duration-500 group-hover:border-[#36B1C7]/20 sm:rounded-[32px]" />
    </motion.div>
  );
}