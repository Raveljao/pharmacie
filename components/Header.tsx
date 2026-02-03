'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'mg' : 'fr');
    };

    const navItems = [
        { href: '/', label: t('home') },
        { href: '/catalogue', label: t('catalogue') },
        { href: '/livraison', label: t('delivery') },
        { href: '/conseil', label: 'Conseil' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="glass sticky top-0 z-50 transition-all duration-300 border-b border-slate-100">
            <div className="w-full px-4 md:px-6 lg:px-12 xl:px-20 py-4">
                <div className="flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0">
                        <div className="w-10 h-10 pharma-gradient rounded-sm flex items-center justify-center shadow-lg shadow-blue-900/10">
                            <span className="text-white font-bold text-xl">+</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="font-bold text-base md:text-lg text-slate-900 leading-none tracking-[0.15em] uppercase font-heading">Nouvelle Ville</h1>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-blue-600 font-bold mt-0.5">Pharmacie</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all rounded-sm ${isActive
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Side: Cart + Language */}
                    <div className="flex items-center gap-3 shrink-0">
                        {/* Cart Button */}
                        <Link
                            href="/panier"
                            className="relative flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-sm text-xs font-bold transition-all border border-slate-200 hover:border-blue-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-bold shadow-sm border-2 border-white px-1">
                                    {totalItems}
                                </span>
                            )}
                            <span className="hidden md:inline">{t('cart')}</span>
                        </Link>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 px-3 md:px-4 py-2 bg-slate-50 hover:bg-white text-slate-600 hover:text-blue-700 rounded-sm text-xs font-bold transition-all border border-slate-200 hover:border-blue-200 uppercase tracking-wider"
                            aria-label="Toggle language"
                        >
                            <span className={language === 'fr' ? 'text-blue-600' : 'text-slate-400'}>FR</span>
                            <span className="text-slate-300">|</span>
                            <span className={language === 'mg' ? 'text-emerald-600' : 'text-slate-400'}>MG</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="lg:hidden flex items-center gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-all rounded-sm whitespace-nowrap ${isActive
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 border border-slate-200'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
