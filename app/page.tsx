'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const categories = [
    { id: 'antidouleur', label: t('catAntidouleur'), icon: '💊' },
    { id: 'bebe', label: t('catBebe'), icon: '👶' },
    { id: 'vitamines', label: t('catVitamines'), icon: '🍊' },
    { id: 'hygiene', label: t('catHygiene'), icon: '🧼' },
    { id: 'soins', label: t('catDermatologie'), icon: '🧴' },
  ];

  return (
    <main className="w-full min-h-screen pb-20">
      {/* Hero Section - Full Width Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-emerald-50/50 text-slate-900 border-b border-slate-200">
        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 py-20 lg:py-32 flex flex-col items-center text-center">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mb-10"></div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light uppercase tracking-[0.1em] lg:tracking-[0.15em] text-slate-900 leading-[1.1] max-w-6xl">
            Pharmacie<br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600">Nouvelle Ville</span>
          </h1>

          <p className="text-slate-600 max-w-3xl text-base md:text-xl lg:text-2xl tracking-wide leading-relaxed font-light mt-8 px-4">
            {t('heroTitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full max-w-2xl mt-12 px-4">
            <Link
              href="/catalogue"
              className="flex-1 bg-blue-600 text-white rounded-sm uppercase text-sm lg:text-base tracking-[0.12em] py-5 lg:py-6 hover:bg-blue-700 transition-all flex items-center justify-center font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              {t('order')}
            </Link>
            <Link
              href="/livraison"
              className="flex-1 bg-white text-slate-900 border-2 border-slate-300 rounded-sm uppercase text-sm lg:text-base tracking-[0.12em] py-5 lg:py-6 hover:bg-slate-50 hover:border-blue-400 transition-all flex items-center justify-center font-bold hover:scale-[1.02]"
            >
              {t('delivery')}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions - Full Width Grid */}
      <section className="w-full bg-white border-b border-slate-100">
        <div className="px-6 lg:px-12 xl:px-20 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1800px] mx-auto">
            <Link href="/catalogue" className="group block bg-gradient-to-br from-white to-slate-50 p-12 lg:p-16 border-2 border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 rounded-sm">
              <div className="flex flex-col items-center text-center gap-8">
                <span className="text-7xl lg:text-8xl grayscale group-hover:grayscale-0 transition-all duration-500">📦</span>
                <div className="space-y-4">
                  <h3 className="text-sm lg:text-base uppercase tracking-[0.2em] font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{t('clickCollect')}</h3>
                  <p className="text-sm lg:text-base text-slate-500 font-light max-w-md mx-auto leading-relaxed">Commandez en ligne et récupérez vos médicaments en pharmacie sans file d'attente.</p>
                </div>
              </div>
            </Link>

            <Link href="/ordonnance" className="group block bg-gradient-to-br from-white to-slate-50 p-12 lg:p-16 border-2 border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-500 rounded-sm">
              <div className="flex flex-col items-center text-center gap-8">
                <span className="text-7xl lg:text-8xl grayscale group-hover:grayscale-0 transition-all duration-500">📄</span>
                <div className="space-y-4">
                  <h3 className="text-sm lg:text-base uppercase tracking-[0.2em] font-bold text-slate-800 group-hover:text-blue-700 transition-colors">Ordonnance</h3>
                  <p className="text-sm lg:text-base text-slate-500 font-light max-w-md mx-auto leading-relaxed">Envoyez votre ordonnance par photo et nous préparons tout pour vous.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories - Full Width */}
      <section className="w-full bg-slate-50 border-b border-slate-200">
        <div className="px-6 lg:px-12 xl:px-20 py-16 lg:py-24">
          <div className="max-w-[1800px] mx-auto space-y-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-8 border-b-2 border-slate-300">
              <h2 className="text-2xl lg:text-4xl font-light uppercase tracking-[0.15em] text-slate-800">{t('categories')}</h2>
              <Link href="/catalogue" className="text-sm font-bold uppercase tracking-[0.12em] text-blue-600 hover:text-emerald-800 hover:underline transition-colors flex items-center gap-2">
                Voir tout le catalogue
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/catalogue?category=${cat.id}`}
                  className="group"
                >
                  <div className="aspect-[4/5] bg-white border-2 border-slate-200 flex flex-col items-center justify-center gap-6 transition-all duration-500 group-hover:border-blue-400 group-hover:bg-emerald-50/50 group-hover:shadow-xl group-hover:scale-105 rounded-sm">
                    <span className="text-4xl lg:text-5xl opacity-80 group-hover:scale-125 transition-transform duration-500">{cat.icon}</span>
                    <span className="text-xs lg:text-sm uppercase tracking-[0.12em] text-center text-slate-700 group-hover:text-blue-700 font-bold px-3 leading-tight">{cat.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section - Full Width Dark */}
      <section className="w-full bg-slate-900 text-white">
        <div className="px-6 lg:px-12 xl:px-20 py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>

          <div className="relative z-10 max-w-[1800px] mx-auto space-y-14">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl text-white uppercase tracking-[0.15em]">{t('info')}</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-400"></div>
            </div>

            <div className="grid gap-12 lg:gap-20 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-base lg:text-xl font-bold uppercase tracking-[0.12em] text-emerald-300">{t('hours')}</h3>
                <p className="text-lg lg:text-2xl font-light tracking-wide text-slate-200 leading-relaxed">{t('hoursDetail')}</p>
              </div>

              <div className="space-y-6">
                <h3 className="text-base lg:text-xl font-bold uppercase tracking-[0.12em] text-emerald-300">{t('contactUs')}</h3>
                <div className="space-y-3">
                  <p className="text-2xl lg:text-4xl font-light tracking-wide text-white">{t('phoneNumber')}</p>
                  <p className="text-sm lg:text-base font-light tracking-wide text-slate-400">{t('addressDetail')}</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block border-2 border-white/40 text-white px-12 py-5 text-sm uppercase tracking-[0.12em] hover:bg-white hover:text-slate-900 transition-all font-bold rounded-sm shadow-lg hover:shadow-2xl"
            >
              {t('contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Spacing for Fixed Nav */}
      <div className="h-20"></div>
    </main>
  );
}
