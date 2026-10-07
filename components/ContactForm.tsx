// components/ContactForm.tsx

"use client";

import { useState } from "react";

import {
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { sendEmail } from "@/app/actions";

export default function ContactForm() {
  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  async function handleSubmit(
    formData: FormData
  ) {
    setLoading(true);

    setSuccess("");

    setError("");

    const result =
      await sendEmail(formData);

    if (result.success) {
      setSuccess(
        "Inquiry sent successfully."
      );
    } else {
      setError(
        result.error ||
          "Something went wrong."
      );
    }

    setLoading(false);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 p-6 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:rounded-[40px] sm:p-10">
      {/* GLOW */}
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#36B1C7]/10 blur-3xl" />

      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#960B33]/10 blur-3xl" />

      <div className="relative z-10">
        {/* BADGE */}
        <div className="inline-flex rounded-full bg-[#36B1C7]/10 px-4 py-2">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#36B1C7] sm:text-xs">
            Quick Inquiry
          </span>
        </div>

        {/* TITLE */}
        <h2 className="mt-6 bg-gradient-to-r from-[#36B1C7] to-[#960B33] bg-clip-text text-3xl font-black uppercase text-transparent sm:text-4xl">
          Send Inquiry
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
          Contact our team for premium industrial electrical &
          mechanical products, quotation requests, and
          technical support.
        </p>

        {/* FORM */}
        <form
          action={handleSubmit}
          className="mt-8 space-y-5"
        >
          {/* NAME */}
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 text-sm text-[#0B0F19] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#36B1C7] focus:bg-white focus:ring-4 focus:ring-[#36B1C7]/10"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 text-sm text-[#0B0F19] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#36B1C7] focus:bg-white focus:ring-4 focus:ring-[#36B1C7]/10"
          />

          {/* PHONE */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 text-sm text-[#0B0F19] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#36B1C7] focus:bg-white focus:ring-4 focus:ring-[#36B1C7]/10"
          />

          {/* SUBJECT */}
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="h-14 w-full rounded-2xl border border-gray-200 bg-[#F8FAFC] px-5 text-sm text-[#0B0F19] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#36B1C7] focus:bg-white focus:ring-4 focus:ring-[#36B1C7]/10"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Write your message..."
            className="w-full rounded-3xl border border-gray-200 bg-[#F8FAFC] px-5 py-4 text-sm text-[#0B0F19] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#36B1C7] focus:bg-white focus:ring-4 focus:ring-[#36B1C7]/10"
          />

          {/* SUCCESS */}
          {success && (
            <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
              <CheckCircle2 size={18} />
              {success}
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(54,177,199,0.25)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(54,177,199,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Sending...
              </>
            ) : (
              "Send Inquiry"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}