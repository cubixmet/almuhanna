"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  productName?: string;
  productCode?: string;
  className?: string;
  label?: string;
}

export default function WhatsAppButton({
  productName,
  productCode,
  className = "",
  label = "Contact on WhatsApp",
}: WhatsAppButtonProps) {
  const phone = "966531553364";

  const message = productName
    ? `Hello, I need more details about:
Product: ${productName}
Code: ${productCode}`
    : `Hello, I would like to know more about your electrical & mechanical products.`;

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_0_30px_rgba(54,177,199,0.24)] transition duration-300 hover:shadow-[0_0_50px_rgba(54,177,199,0.38)] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.15em] ${className}`}
    >
      <MessageCircle
        size={17}
        className="shrink-0 transition duration-300 group-hover:rotate-6 sm:h-[18px] sm:w-[18px]"
      />

      <span className="truncate">{label}</span>
    </motion.a>
  );
}