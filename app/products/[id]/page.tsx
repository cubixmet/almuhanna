import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { products } from "@/data/products";
import CTASection from "@/components/CTASection";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    notFound();
  }

  const whatsappLink = getWhatsAppLink({
    productName: product.title,
    productCode: product.code,
  });

  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FDFF] via-white to-[#FFF8FB]" />

        <div className="absolute -left-20 top-0 h-[240px] w-[240px] rounded-full bg-[#36B1C7]/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-[240px] w-[240px] rounded-full bg-[#960B33]/10 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-[#36B1C7]/20 bg-white/70 px-4 py-3 text-xs font-black uppercase tracking-[0.13em] text-[#36B1C7] backdrop-blur-xl transition hover:bg-white sm:text-sm"
          >
            <ArrowLeft size={17} />
            Back To Products
          </Link>

          <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-12 lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/20 bg-white shadow-xl sm:min-h-[460px] sm:rounded-[40px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-[0_15px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:rounded-[40px] sm:p-10">
              <span className="inline-flex rounded-full bg-[#36B1C7]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#36B1C7] sm:px-5 sm:text-xs sm:tracking-[0.2em]">
                {product.category}
              </span>

              <h1 className="mt-6 text-3xl font-black uppercase tracking-tight text-[#0B0F19] sm:mt-8 sm:text-5xl">
                {product.title}
              </h1>

              <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-[#960B33] sm:text-sm sm:tracking-[0.25em]">
                Code: {product.code}
              </p>

              <p className="mt-6 text-sm leading-8 text-gray-600 sm:mt-8 sm:text-base sm:leading-9">
                {product.description}
              </p>

              <div className="mt-8 sm:mt-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-4 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(54,177,199,0.3)] transition hover:scale-[1.02] sm:w-auto sm:text-sm sm:tracking-[0.15em]"
                >
                  <MessageCircle size={18} />
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}