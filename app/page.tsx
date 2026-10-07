import Link from "next/link";

import { ArrowUpRight, ShieldCheck, BadgeCheck } from "lucide-react";

import { brands } from "@/data/brands";
import { clients } from "@/data/clients";
import { products } from "@/data/products";

import BrandWall from "@/components/BrandWall";
import HeroVideo from "@/components/HeroVideo";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import FAQPopupButton from "@/components/FAQPopupButton";
import LocationMap from "@/components/LocationMap";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import StatsCard from "@/components/StatsCard";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF7FA]" />

        <div className="absolute -left-20 top-0 h-[260px] w-[260px] rounded-full bg-[#36B1C7]/10 blur-[90px] sm:h-[450px] sm:w-[450px] sm:blur-[100px]" />

        <div className="absolute -right-20 bottom-0 h-[260px] w-[260px] rounded-full bg-[#960B33]/10 blur-[90px] sm:h-[450px] sm:w-[450px] sm:blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex rounded-full border border-[#36B1C7]/20 bg-[#36B1C7]/10 px-4 py-2 backdrop-blur-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#36B1C7] sm:text-xs">
                Saudi Industrial Supply
              </span>
            </div>

            <h1 className="mt-5 text-[34px] font-black uppercase leading-[1.05] tracking-tight text-[#0B0F19] sm:mt-6 sm:text-5xl lg:text-7xl">
              Trusted Electrical &
              <span className="bg-gradient-to-r from-[#36B1C7] to-[#960B33] bg-clip-text text-transparent">
                {" "}
                Mechanical Solutions
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-9">
              Reliable industrial supply partner in Saudi Arabia delivering
              premium electrical, automation, power distribution, and mechanical
              solutions for modern infrastructure and industrial projects.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/products"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(54,177,199,0.3)] transition duration-300 hover:scale-[1.02] sm:w-auto sm:px-8 sm:text-sm"
              >
                View Products
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="https://wa.me/966531553364"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#36B1C7]/20 bg-white/70 px-7 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-[#0B0F19] backdrop-blur-xl transition duration-300 hover:border-[#36B1C7]/40 hover:bg-white sm:w-auto sm:px-8 sm:text-sm"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
              {["Premium Supply", "Trusted Support", "Industrial Quality"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-[11px] font-semibold text-gray-700 shadow-sm backdrop-blur-xl sm:px-4 sm:text-sm"
                  >
                    <BadgeCheck size={14} className="text-[#36B1C7]" />
                    {badge}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <HeroVideo src="/videos/hero-video.mp4" />

            <div className="relative mx-auto -mt-7 w-[92%] rounded-[24px] border border-white/20 bg-white/85 p-4 shadow-[0_15px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:absolute sm:-bottom-10 sm:-left-10 sm:mt-0 sm:w-auto sm:rounded-[28px] sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white sm:h-14 sm:w-14">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-black uppercase text-[#0B0F19] sm:text-lg">
                    100% Reliable
                  </h3>

                  <p className="text-xs text-gray-600 sm:text-sm">
                    Industrial Supply Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard icon="building" value="14+" label="Years Experience" description="Serving industrial and infrastructure sectors across Saudi Arabia." />
          <StatsCard icon="boxes" value="500+" label="Industrial Products" description="Premium electrical and mechanical industrial solutions." />
          <StatsCard icon="shield" value="120+" label="Trusted Clients" description="Supporting contractors, engineers, and industrial companies." />
          <StatsCard icon="star" value="24/7" label="Technical Support" description="Reliable support and industrial sourcing assistance." />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Industrial Products"
            title="Featured"
            highlight="Products"
            description="Explore our premium industrial electrical and mechanical product range for modern infrastructure and industrial applications."
            center
          />

          <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/products"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(54,177,199,0.3)] transition duration-300 hover:scale-[1.02] sm:w-auto sm:text-sm"
            >
              View All Products
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <BrandWall title="Trusted Clients" items={clients} />
      <BrandWall title="Global Industrial Brands" items={brands} />

      {/* WHY CHOOSE US */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Why Choose Us"
            title="Reliable Industrial"
            highlight="Supply Partner"
            description="Delivering trusted industrial solutions with premium quality products, technical expertise, and fast customer support."
            center
          />

          <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Premium Products", "High-quality industrial electrical & mechanical products."],
              ["Technical Support", "Professional support for product selection and solutions."],
              ["Fast Delivery", "Reliable supply chain and timely project support."],
              ["Competitive Pricing", "Cost-effective industrial sourcing solutions."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/20 bg-white/70 p-6 shadow-[0_10px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(54,177,199,0.15)] sm:rounded-[32px] sm:p-8"
              >
                <h3 className="text-xl font-black uppercase text-[#0B0F19] sm:text-2xl">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Visit Us"
            title="Find Our"
            highlight="Riyadh Office"
            description="Visit our office in Ghorabi Electrical Market, Batha, Riyadh, or open the location in Google Maps for directions."
            center
          />

          <div className="mt-12 sm:mt-14">
            <LocationMap minHeightClassName="min-h-[320px] sm:min-h-[420px]" />
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
      <FAQPopupButton />
    </>
  );
}