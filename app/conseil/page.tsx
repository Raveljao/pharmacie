'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ConseilPage() {
    const { t } = useLanguage();

    const adviceCategories = [
        {
            icon: '🤒',
            title: t('whatToTake'),
            examples: ['Mal de tête', 'Fièvre', 'Toux', 'Douleurs musculaires'],
            message: 'Bonjour, que me conseillez-vous pour...',
        },
        {
            icon: '💰',
            title: t('cheaperAlternative'),
            examples: ['Génériques', 'Alternatives efficaces', 'Meilleur rapport qualité-prix'],
            message: 'Bonjour, existe-t-il un équivalent moins cher pour...',
        },
        {
            icon: '📦',
            title: t('availability'),
            examples: ['Stock disponible', 'Date de réapprovisionnement', 'Produits similaires'],
            message: 'Bonjour, avez-vous en stock...',
        },
    ];

    const handleAdviceClick = (message: string) => {
        const whatsappUrl = `https://wa.me/261346609582?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="w-full min-h-screen pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-emerald-50/50 border-b border-slate-200">
                <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20 flex flex-col items-center text-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mb-8"></div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.1em] lg:tracking-[0.15em] text-slate-900 leading-[1.1] max-w-4xl">
                        {t('adviceTitle')}
                    </h1>

                    <p className="text-slate-600 max-w-2xl text-sm md:text-base lg:text-lg tracking-wide leading-relaxed font-light mt-6">
                        {t('adviceDesc')}
                    </p>
                </div>
            </section>

            <div className="w-full px-6 lg:px-12 xl:px-20 max-w-[1800px] mx-auto py-16 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                    {adviceCategories.map((category, index) => (
                        <div key={index} className="bg-white rounded-sm p-8 lg:p-10 border-2 border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all group flex flex-col">
                            <div className="flex flex-col items-center text-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-100 rounded-sm flex items-center justify-center text-4xl shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                                    <span className="group-hover:scale-125 transition-transform">{category.icon}</span>
                                </div>
                                <h2 className="text-sm lg:text-base font-bold uppercase tracking-[0.12em] text-slate-900 group-hover:text-blue-600 transition-colors">{category.title}</h2>
                            </div>

                            <div className="flex-1 mb-8">
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {category.examples.map((example, i) => (
                                        <span key={i} className="px-4 py-2 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wide rounded-sm border border-slate-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                                            {example}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => handleAdviceClick(category.message)}
                                className="w-full pharma-gradient hover:opacity-90 text-white font-bold uppercase tracking-[0.12em] text-xs lg:text-sm py-5 rounded-sm transition-all flex items-center justify-center gap-3 shadow-lg mt-auto"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Demander conseil
                            </button>
                        </div>
                    ))}
                </div>

                {/* Info Banner */}
                <div className="bg-slate-50 rounded-sm p-8 lg:p-12 border-l-4 border-l-emerald-600 border-2 border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-8 text-sm lg:text-base uppercase tracking-[0.12em] flex items-center gap-3">
                        <span className="text-2xl">ℹ️</span> Important
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4">
                            <span className="text-blue-600 text-2xl leading-none mt-1">•</span>
                            <span className="text-sm text-slate-600 font-medium leading-relaxed">Nos conseils ne remplacent pas une consultation médicale</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-blue-600 text-2xl leading-none mt-1">•</span>
                            <span className="text-sm text-slate-600 font-medium leading-relaxed">En cas de symptômes graves, consultez immédiatement un médecin</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-blue-600 text-2xl leading-none mt-1">•</span>
                            <span className="text-sm text-slate-600 font-medium leading-relaxed">Certains médicaments nécessitent une ordonnance obligatoire</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
