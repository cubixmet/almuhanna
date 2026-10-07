"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function FAQPopupButton() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim()) return;

    const message = `Hello, I have a question:\n\n${question}`;

    const whatsappUrl = `https://wa.me/966531553364?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    setQuestion("");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white shadow-[0_0_35px_rgba(54,177,199,0.35)] transition duration-300 hover:scale-110 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
        aria-label="Open support popup"
      >
        <MessageCircle size={24} className="sm:h-7 sm:w-7" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-3 bottom-4 z-[70] rounded-[28px] border border-white/20 bg-white p-5 shadow-[0_25px_100px_rgba(0,0,0,0.18)] sm:left-1/2 sm:top-1/2 sm:bottom-auto sm:w-[92%] sm:max-w-xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[36px] sm:p-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
                aria-label="Close popup"
              >
                <X size={18} />
              </button>

              <div className="pr-10">
                <div className="inline-flex rounded-full bg-[#36B1C7]/10 px-4 py-2 sm:px-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#36B1C7] sm:text-xs">
                    Quick Support
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-black uppercase tracking-tight text-[#0B0F19] sm:mt-6 sm:text-4xl">
                  Ask Your Question
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                  Send your industrial product inquiry directly through
                  WhatsApp.
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your question here..."
                  rows={5}
                  className="w-full resize-none rounded-[22px] border border-gray-200 bg-[#F8FAFC] px-5 py-4 text-sm text-[#0B0F19] outline-none transition duration-300 placeholder:text-gray-400 focus:border-[#36B1C7] focus:bg-white focus:ring-4 focus:ring-[#36B1C7]/10 sm:rounded-[28px] sm:px-6 sm:py-5 sm:text-base"
                />
              </div>

              <button
                onClick={handleSend}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(54,177,199,0.25)] transition duration-300 hover:scale-[1.02] sm:mt-8 sm:inline-flex sm:w-auto sm:px-8 sm:text-sm"
              >
                <Send size={17} />
                Send Question
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}