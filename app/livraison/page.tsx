'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LivraisonPage() {
    const { t } = useLanguage();

    const deliveryZones = [
        'Tanambao',
        'Tanandava',
        'Morafeno',
        'Bazary Be',
        'Anjoma',
        'Ampasimbe',
        'Ambalakisoa',
        'Tanamakoa',
    ];

    return (
        <div className="w-full min-h-screen pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-emerald-50/50 border-b border-slate-200">
                <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20 flex flex-col items-center text-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mb-8"></div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.1em] lg:tracking-[0.15em] text-slate-900 leading-[1.1] max-w-4xl">
                        {t('deliveryTitle')}
                    </h1>

                    <p className="text-slate-600 max-w-2xl text-sm md:text-base lg:text-lg tracking-wide leading-relaxed font-light mt-6">
                        {t('deliveryDesc')}
                    </p>
                </div>
            </section>

            <div className="w-full px-6 lg:px-12 xl:px-20 max-w-[1800px] mx-auto py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Delivery Zones - Takes 2 columns */}
                    <div className="lg:col-span-2 bg-white rounded-sm p-8 lg:p-12 border-2 border-slate-200 shadow-sm">
                        <h2 className="text-base lg:text-lg font-bold uppercase tracking-[0.12em] text-slate-900 mb-10 border-l-4 border-blue-600 pl-4">
                            {t('deliveryZones')}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {deliveryZones.map((zone) => (
                                <div key={zone} className="flex items-center gap-5 p-5 rounded-sm bg-slate-50 border-2 border-slate-100 hover:border-blue-300 hover:bg-emerald-50/50 transition-all group">
                                    <span className="w-10 h-10 rounded-full bg-emerald-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-sm font-bold uppercase tracking-wide text-slate-700 group-hover:text-blue-700 transition-colors">{zone}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Info Cards */}
                    <div className="space-y-6">
                        {/* Express Delivery */}
                        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-sm p-8 text-white shadow-xl">
                            <div className="text-5xl mb-6">⚡</div>
                            <h3 className="font-bold text-xl uppercase tracking-[0.12em] mb-3">Express</h3>
                            <p className="text-emerald-100 font-light leading-relaxed">{t('deliveryTimeDetail')}</p>
                        </div>

                        {/* Live Tracking */}
                        <div className="bg-white rounded-sm p-8 border-2 border-slate-200 shadow-sm hover:shadow-lg transition-all">
                            <div className="text-5xl mb-6">📍</div>
                            <h3 className="font-bold text-base uppercase tracking-[0.12em] text-slate-900 mb-3">Suivi Live</h3>
                            <p className="text-sm text-slate-600 font-light leading-relaxed">Recevez des updates en temps réel par WhatsApp</p>
                        </div>
                    </div>
                </div>

                {/* Delivery Fees Section */}
                <div className="mt-12 lg:mt-16 bg-slate-50 rounded-sm p-8 lg:p-12 border-l-4 border-l-emerald-600 border-2 border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-10 text-base lg:text-lg uppercase tracking-[0.12em] flex items-center gap-3">
                        <span className="text-3xl">💰</span> Frais de livraison
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-sm p-8 border-2 border-slate-200 hover:border-blue-300 transition-all">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="w-16 h-16 bg-emerald-50 text-blue-600 rounded-full flex items-center justify-center text-2xl border-2 border-emerald-100">
                                    🏙️
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Centre-ville (0-3 km)</h4>
                                    <p className="text-3xl font-bold text-slate-900">2 000 Ar</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm p-8 border-2 border-slate-200 hover:border-blue-300 transition-all">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="w-16 h-16 bg-emerald-50 text-blue-600 rounded-full flex items-center justify-center text-2xl border-2 border-emerald-100">
                                    🏘️
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Périphérie (3-7 km)</h4>
                                    <p className="text-3xl font-bold text-slate-900">3 000 Ar</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm p-8 border-2 border-slate-200 hover:border-blue-300 transition-all">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="w-16 h-16 bg-emerald-50 text-blue-600 rounded-full flex items-center justify-center text-2xl border-2 border-emerald-100">
                                    🌄
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Zones éloignées (7+ km)</h4>
                                    <p className="text-base font-bold text-slate-500 uppercase">Sur devis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12 lg:mt-16">
                    <Link
                        href="/catalogue"
                        className="block w-full pharma-gradient hover:opacity-90 text-white text-center font-bold text-sm lg:text-base uppercase tracking-[0.15em] py-6 rounded-sm transition-all shadow-xl"
                    >
                        {t('orderDelivery')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
