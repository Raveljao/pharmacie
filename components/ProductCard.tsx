'use client';

import { Product } from '@/lib/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { language, t } = useLanguage();
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handlePrescription = () => {
        const message = `Bonjour, j'aimerais commander ${product.nom}. Je vais envoyer mon ordonnance.`;
        window.open(`https://wa.me/261346609582?text=${encodeURIComponent(message)}`, '_blank');
    };

    const productName = language === 'fr' ? product.nom : product.nom_mg;

    return (
        <div className="group bg-white rounded-sm p-0 border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
            {/* Fake Image Placeholder - Sharp Corners */}
            <div className="w-full aspect-square bg-slate-50 relative flex items-center justify-center border-b border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white opacity-50" />
                <span className="text-5xl filter grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 relative z-10">
                    {product.categorie === 'Antidouleur' ? '💊' :
                        product.categorie === 'Bébé' ? '👶' :
                            product.categorie === 'Vitamines' ? '🍊' :
                                product.categorie === 'Hygiène' ? '🧼' : '🧴'}
                </span>
                {product.ordonnance_requise && (
                    <div className="absolute top-0 right-0 p-2 z-20">
                        <div className="bg-orange-50 text-orange-600 text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-orange-100">
                            Ordo
                        </div>
                    </div>
                )}
            </div>

            <div className="flex-1 flex flex-col p-5">
                <div className="mb-auto space-y-2">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">{product.categorie}</p>
                    <h3 className="font-heading text-sm text-slate-900 leading-normal tracking-wide uppercase group-hover:text-blue-700 transition-colors">
                        {productName}
                    </h3>
                </div>

                <div className="flex items-end justify-between gap-4 mt-6 pt-4 border-t border-slate-50">
                    <div>
                        <p className="text-xl font-light text-slate-900 tracking-tight">
                            {product.prix.toLocaleString()} <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest relative -top-1">Ar</span>
                        </p>
                        {product.disponible ? (
                            <p className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest mt-1">
                                {t('available')}
                            </p>
                        ) : (
                            <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest mt-1">
                                {t('unavailable')}
                            </p>
                        )}
                    </div>

                    {product.disponible && (
                        product.ordonnance_requise ? (
                            <button
                                onClick={handlePrescription}
                                className="px-4 py-3 bg-slate-50 hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-200 text-[10px] font-bold uppercase tracking-widest transition-all shrink-0"
                            >
                                Contact
                            </button>
                        ) : (
                            <button
                                onClick={handleAddToCart}
                                className="w-10 h-10 bg-slate-900 text-white hover:bg-blue-600 flex items-center justify-center transition-all shrink-0"
                                aria-label={t('addToCart')}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
