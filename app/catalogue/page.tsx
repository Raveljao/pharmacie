"use client";
export const dynamic = "force-dynamic";
import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import ProductCard from "@/components/ProductCard";
import products from "@/lib/products.json";
import type { Product } from "@/lib/types";

function CatalogueInner() {
    const { t } = useLanguage();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    useEffect(() => {
        const search = searchParams.get("search");
        const category = searchParams.get("category");
        if (search) setSearchQuery(search);
        if (category) setSelectedCategory(category);
    }, [searchParams]);

    const categories = useMemo(
        () => Array.from(new Set(products.map((p) => p.categorie))),
        []
    );

    const filteredProducts = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();

        return products.filter((product: Product) => {
            const matchesSearch =
                q === "" ||
                product.nom.toLowerCase().includes(q) ||
                product.nom_mg.toLowerCase().includes(q) ||
                product.description.toLowerCase().includes(q);

            const matchesCategory =
                selectedCategory === "" || product.categorie === selectedCategory;

            const matchesAvailability = !showAvailableOnly || product.disponible;

            return matchesSearch && matchesCategory && matchesAvailability;
        });
    }, [searchQuery, selectedCategory, showAvailableOnly]);

    return (
        <div className="w-full min-h-screen pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-emerald-50/50 border-b border-slate-200">
                <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20 flex flex-col items-center text-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mb-8" />

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.1em] lg:tracking-[0.15em] text-slate-900 leading-[1.1] max-w-4xl">
                        {t("catalogue")}
                    </h1>

                    <p className="text-slate-600 max-w-2xl text-sm md:text-base lg:text-lg tracking-wide leading-relaxed font-light mt-6">
                        {filteredProducts.length}{" "}
                        {filteredProducts.length > 1
                            ? "articles disponibles"
                            : "article disponible"}
                    </p>
                </div>
            </section>

            <div className="w-full px-6 lg:px-12 xl:px-20 max-w-[1800px] mx-auto">
                {/* Search - Sticky */}
                <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md py-6 -mx-6 lg:-mx-12 xl:-mx-20 px-6 lg:px-12 xl:px-20 border-b border-slate-100 mb-8">
                    <div className="relative max-w-3xl mx-auto">
                        <input
                            type="text"
                            placeholder={t("searchPlaceholder")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 pl-14 bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-0 text-slate-800 placeholder:text-slate-400 rounded-sm transition-all text-base"
                        />
                        <svg
                            className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Filters */}
                <div className="space-y-8 mb-12">
                    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-6 lg:-mx-12 xl:-mx-20 px-6 lg:px-12 xl:px-20">
                        <button
                            onClick={() => setSelectedCategory("")}
                            className={`flex-shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all border-2 rounded-sm ${selectedCategory === ""
                                ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                                : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-slate-800"
                                }`}
                        >
                            {t("allCategories")}
                        </button>

                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all border-2 rounded-sm ${selectedCategory === cat
                                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                                    : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-slate-800"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer select-none">
                        <div
                            className={`w-6 h-6 flex items-center justify-center border-2 transition-colors rounded-sm ${showAvailableOnly
                                ? "bg-blue-600 border-blue-600"
                                : "bg-white border-slate-300"
                                }`}
                        >
                            {showAvailableOnly && (
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            )}
                        </div>

                        <input
                            type="checkbox"
                            checked={showAvailableOnly}
                            onChange={(e) => setShowAvailableOnly(e.target.checked)}
                            className="hidden"
                        />
                        <span className="text-sm font-bold uppercase tracking-wide text-slate-600">
                            {t("showAvailable")}
                        </span>
                    </label>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 pb-16">
                    {filteredProducts.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-slate-50 border-2 border-slate-100 rounded-sm">
                        <div className="text-5xl mb-6 opacity-20">🔍</div>
                        <p className="text-slate-500 font-light tracking-wide uppercase text-sm mb-8">
                            Aucun produit trouvé
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("");
                                setShowAvailableOnly(false);
                            }}
                            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-lg rounded-sm"
                        >
                            Réinitialiser
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CataloguePage() {
    return (
        <Suspense fallback={<div className="p-6">Chargement…</div>}>
            <CatalogueInner />
        </Suspense>
    );
}