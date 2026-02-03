'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import products from '@/lib/products.json';

export default function PromosPage() {
    const { t, language } = useLanguage();

    // For demo, we'll show some products as promos
    const promoProducts = products.filter(p => p.disponible).slice(0, 9);

    const handleReceivePromos = () => {
        const message = "Bonjour, j'aimerais recevoir vos promotions régulièrement sur WhatsApp.";
        window.open(`https://wa.me/261346609582?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 pt-4 pb-24 space-y-8">
            <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">🎉</span>
                {t('promosTitle')}
            </h1>

            <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl shadow-red-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 rounded-full bg-red-400 opacity-30 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="text-5xl mb-4 animate-bounce">🎁</div>
                    <h2 className="text-2xl font-bold mb-2">Offres spéciales du moment</h2>
                    <p className="mb-6 text-red-50 text-lg opacity-90 max-w-lg">Profitez de nos promotions exclusives et faites des économies sur votre santé.</p>
                    <button
                        onClick={handleReceivePromos}
                        className="bg-white text-red-600 px-6 py-3.5 rounded-xl font-bold hover:bg-red-50 transition-all shadow-lg active:scale-95 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        {t('receivePromos')}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {promoProducts.map((product) => {
                    const productName = language === 'fr' ? product.nom : product.nom_mg;
                    return (
                        <div key={product.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
                            <div className="flex items-center justify-between mb-3">
                                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-lg border border-red-100">
                                    PROMO
                                </span>
                                {product.ordonnance_requise && (
                                    <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-xs font-bold rounded-md border border-orange-100">
                                        Rx
                                    </span>
                                )}
                            </div>

                            <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                {product.categorie === 'Antidouleur' ? '💊' :
                                    product.categorie === 'Bébé' ? '👶' :
                                        product.categorie === 'Vitamines' ? '🍊' : '📦'}
                            </div>

                            <h3 className="font-bold text-slate-900 mb-2 truncate text-center">{productName}</h3>
                            <p className="text-xs text-slate-500 mb-4 line-clamp-2 text-center h-8">{product.description}</p>

                            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
                                <div>
                                    <p className="text-xs text-slate-400 line-through font-medium">
                                        {Math.round(product.prix * 1.2).toLocaleString()} Ar
                                    </p>
                                    <p className="text-lg font-bold text-red-600 leading-none">
                                        {product.prix.toLocaleString()} <span className="text-sm font-normal">Ar</span>
                                    </p>
                                </div>
                                <Link
                                    href={`/catalogue?search=${encodeURIComponent(product.nom)}`}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm active:scale-95"
                                >
                                    Voir
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-emerald-500 flex flex-col items-center text-center">
                <h3 className="font-bold text-slate-800 mb-2 text-lg">📱 Ne ratez aucune offre !</h3>
                <p className="text-sm text-slate-600 mb-6 max-w-sm">
                    Rejoignez notre canal WhatsApp pour recevoir nos promotions exclusives, nouveautés et conseils santé.
                </p>
                <button
                    onClick={handleReceivePromos}
                    className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    S'abonner aux promotions
                </button>
            </div>
        </div>
    );
}
