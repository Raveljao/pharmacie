'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ClickCollectPage() {
    const { t } = useLanguage();

    return (
        <div className="max-w-3xl mx-auto px-4 pt-4 pb-24 space-y-8">
            <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">📦</span>
                {t('clickCollectTitle')}
            </h1>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 text-white shadow-xl shadow-emerald-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 rounded-full bg-emerald-500 opacity-30 blur-3xl"></div>
                <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4 animate-bounce">📦</div>
                    <p className="text-xl font-medium leading-relaxed max-w-lg mx-auto opacity-95 text-balance">{t('clickCollectDesc')}</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                    {t('howItWorks')}
                </h2>
                <div className="space-y-6">
                    <div className="flex gap-5 items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50">
                        <div className="flex-shrink-0 w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm border border-emerald-100">
                            1
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-lg mb-1">{t('step1')}</p>
                            <p className="text-sm text-slate-500 leading-relaxed">Explorez notre catalogue et ajoutez vos produits au panier.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50">
                        <div className="flex-shrink-0 w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm border border-emerald-100">
                            2
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-lg mb-1">{t('step2')}</p>
                            <p className="text-sm text-slate-500 leading-relaxed">Choisissez "Click & Collect" lors de la validation.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50">
                        <div className="flex-shrink-0 w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm border border-emerald-100">
                            3
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-lg mb-1">{t('step3')}</p>
                            <p className="text-sm text-slate-500 leading-relaxed">Votre commande est préparée immédiatement.</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50">
                        <div className="flex-shrink-0 w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm border border-emerald-100">
                            4
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-lg mb-1">{t('step4')}</p>
                            <p className="text-sm text-slate-500 leading-relaxed">Passez récupérer vos achats sans attente.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-emerald-500">
                <h3 className="font-bold text-slate-800 mb-4 text-lg">✨ Avantages</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-3 text-slate-600 text-sm font-medium bg-white/50 p-2 rounded-lg">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                        <span>Gain de temps</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm font-medium bg-white/50 p-2 rounded-lg">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                        <span>Réservation garantie</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm font-medium bg-white/50 p-2 rounded-lg">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                        <span>Service express</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm font-medium bg-white/50 p-2 rounded-lg">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                        <span>100% Gratuit</span>
                    </li>
                </ul>
            </div>

            <Link
                href="/catalogue"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/30 active:scale-[0.98]"
            >
                {t('orderClickCollect')}
            </Link>
        </div>
    );
}
