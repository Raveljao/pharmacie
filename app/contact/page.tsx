'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();

    const handleWhatsApp = () => {
        window.open('https://wa.me/261346609582', '_blank');
    };

    const handleMap = () => {
        window.open('https://maps.google.com/?q=Lot+2+B+Tanandava+Toamasina+Madagascar', '_blank');
    };

    const handleEmail = () => {
        window.location.href = 'mailto:nouvelleville.pharmacie@gmail.com';
    };

    return (
        <div className="w-full min-h-screen pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-emerald-50/50 border-b border-slate-200">
                <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20 flex flex-col items-center text-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mb-8"></div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.1em] lg:tracking-[0.15em] text-slate-900 leading-[1.1] max-w-4xl">
                        {t('contactTitle')}
                    </h1>

                    <p className="text-slate-600 max-w-2xl text-sm md:text-base lg:text-lg tracking-wide leading-relaxed font-light mt-6">
                        Nous sommes à votre écoute
                    </p>
                </div>
            </section>

            <div className="w-full px-6 lg:px-12 xl:px-20 max-w-[1800px] mx-auto py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Contact Cards */}
                    <div className="space-y-8">
                        {/* WhatsApp Card */}
                        <div className="pharma-gradient rounded-sm p-10 lg:p-12 text-white shadow-xl relative overflow-hidden group cursor-pointer" onClick={handleWhatsApp}>
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] group-hover:bg-white/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="text-6xl mb-6 opacity-90">💬</div>
                                <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-[0.12em] mb-3">WhatsApp</h2>
                                <p className="text-emerald-100 font-light tracking-wide text-base lg:text-lg mb-6">
                                    Discutez directement avec notre équipe
                                </p>
                                <div className="inline-flex items-center gap-3 text-white font-bold text-lg">
                                    {t('phoneNumber')}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white rounded-sm p-10 lg:p-12 border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-emerald-50 text-blue-600 rounded-sm flex items-center justify-center text-3xl border-2 border-emerald-100 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    📞
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-900 mb-4">{t('phone')}</h3>
                                    <a
                                        href="tel:+261346609582"
                                        className="text-2xl lg:text-3xl text-slate-900 font-light hover:text-blue-600 transition-colors block"
                                    >
                                        {t('phoneNumber')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-sm p-10 lg:p-12 border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group cursor-pointer" onClick={handleEmail}>
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-emerald-50 text-blue-600 rounded-sm flex items-center justify-center text-3xl border-2 border-emerald-100 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    ✉️
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-900 mb-4">{t('email')}</h3>
                                    <p className="text-lg lg:text-xl text-slate-600 font-light hover:text-blue-600 transition-colors break-all">
                                        {t('emailAddress')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Info Cards */}
                    <div className="space-y-8">
                        {/* Hours Card */}
                        <div className="bg-slate-50 rounded-sm p-10 lg:p-12 border-2 border-slate-200">
                            <h3 className="text-base font-bold uppercase tracking-[0.12em] text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
                                {t('openingHours')}
                            </h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b-2 border-slate-200 pb-4">
                                    <span className="text-slate-600 font-medium text-sm lg:text-base">Lundi - Samedi</span>
                                    <span className="font-bold text-slate-900 text-base lg:text-lg">7h30 - 20h00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 font-medium text-sm lg:text-base">Dimanche</span>
                                    <span className="font-bold text-slate-900 text-base lg:text-lg">8h00 - 18h00</span>
                                </div>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="bg-white rounded-sm p-10 lg:p-12 border-2 border-slate-200 shadow-sm">
                            <h3 className="text-base font-bold uppercase tracking-[0.12em] text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
                                {t('address')}
                            </h3>
                            <p className="text-slate-600 mb-8 leading-relaxed text-base lg:text-lg font-light">
                                {t('addressDetail')}
                            </p>
                            <button
                                onClick={handleMap}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-[0.12em] text-sm py-5 rounded-sm transition-all flex items-center justify-center gap-3 shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {t('viewMap')}
                            </button>
                        </div>

                        {/* Info Card */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-sm p-10 lg:p-12 text-white">
                            <h3 className="text-base font-bold uppercase tracking-[0.12em] mb-6 text-emerald-300">
                                Pharmacie Nouvelle Ville
                            </h3>
                            <p className="text-slate-300 font-light leading-relaxed text-sm lg:text-base">
                                Votre santé, notre priorité. Service professionnel et conseil personnalisé depuis Toamasina.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
