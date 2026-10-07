"use client";

import { useMemo, useState } from "react";
import CategorySection from "@/components/CategorySection";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { productCategories, products } from "@/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        product.title.toLowerCase().includes(searchText) ||
        product.code.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const visibleCategories =
    activeCategory === "All" ? productCategories : [activeCategory];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10">
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
            badge="Product Catalog"
            title="Industrial"
            highlight="Products"
            description="Explore our category-wise electrical and mechanical industrial product range. Click More Details to send direct WhatsApp inquiry."
            center
          />

          {/* SEARCH + CATEGORY FILTER */}
          <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur-md sm:p-6">
            <input
              type="text"
              placeholder="Search product name, code or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-900 outline-none transition focus:border-[#36B1C7] focus:ring-4 focus:ring-[#36B1C7]/10"
            />

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeCategory === "All"
                    ? "bg-[#960B33] text-white shadow-md"
                    : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                All
              </button>

              {productCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#960B33] text-white shadow-md"
                      : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-16 sm:space-y-24">
          {visibleCategories.map((category) => {
            const categoryProducts = filteredProducts.filter(
              (product) => product.category === category
            );

            if (categoryProducts.length === 0) return null;

            return (
              <CategorySection
                key={category}
                title={category}
                description={`Premium ${category.toLowerCase()} for industrial and commercial electrical applications.`}
                products={categoryProducts}
              />
            );
          })}

          {filteredProducts.length === 0 && (
            <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">
                No products found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try another search keyword or category.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}