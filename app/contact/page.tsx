import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock3,
} from "lucide-react";

import CTASection from "@/components/CTASection";
import LocationMap from "@/components/LocationMap";
import SectionHeader from "@/components/SectionHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import { officeLocation } from "@/data/location";

const contactCards = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "966531553364",
    link: "tel:+966531553364",
  },

  {
    icon: Mail,
    title: "Email Address",
    value: "sales@almohannasa.com",
    link: "mailto:sales@almohannasa.com",
  },

  {
    icon: MapPin,
    title: "Office Location",
    value: officeLocation.shortLabel,
    link: officeLocation.mapLink,
  },

  {
    icon: Clock3,
    title: "Business Hours",
    value: "Saturday - Thursday | 8:00 AM - 8:00 PM",
    link: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF8FB]" />

        <div className="absolute -left-20 top-0 h-[240px] w-[240px] rounded-full bg-[#36B1C7]/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-[240px] w-[240px] rounded-full bg-[#960B33]/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeader
            badge="Contact Us"
            title="Get In Touch"
            highlight="With Us"
            description="Connect with TALA AABDUL RAHMAN ALMUHANNA CO. for premium industrial electrical & mechanical supply solutions across Saudi Arabia."
            center
          />
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.link}
                className="group rounded-3xl border border-white/20 bg-white/80 p-5 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-[#36B1C7]/20 hover:shadow-[0_0_60px_rgba(54,177,199,0.15)] sm:rounded-[35px] sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#36B1C7] to-[#960B33] text-white shadow-[0_0_30px_rgba(54,177,199,0.25)] sm:h-16 sm:w-16">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-black uppercase text-[#0B0F19] sm:mt-8 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 break-words text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 sm:gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:rounded-[40px] sm:p-10">
            <div className="inline-flex rounded-full bg-[#36B1C7]/10 px-4 py-2 sm:px-5">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#36B1C7] sm:text-xs sm:tracking-[0.2em]">
                Quick Inquiry
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-black uppercase tracking-tight text-[#0B0F19] sm:mt-8 sm:text-4xl">
              Need Industrial Products?
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:mt-6 sm:text-base sm:leading-9">
              Contact our team directly through WhatsApp for fast product
              inquiries, technical support, industrial sourcing, and quotation
              requests.
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {[
                "Fast Product Inquiry Response",
                "Technical Product Support",
                "Bulk Industrial Supply",
                "Saudi Arabia Wide Delivery",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#36B1C7]/10">
                    <MessageCircle
                      size={17}
                      className="text-[#36B1C7]"
                    />
                  </div>

                  <span className="text-sm font-semibold text-gray-700 sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-12">
              <WhatsAppButton
                label="Contact on WhatsApp"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          <LocationMap />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready To Discuss Your Industrial Requirements?"
        description="Get in touch with our experienced team for premium electrical & mechanical industrial supply solutions."
      />
    </>
  );
}
