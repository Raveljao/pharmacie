'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { CustomerInfo } from '@/lib/types';
import Link from 'next/link';

export default function PanierPage() {
    const { t, language } = useLanguage();
    const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
        name: '',
        phone: '',
        neighborhood: '',
        address: '',
        deliveryMethod: 'click-collect',
        paymentMethod: 'on-site',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (cart.length === 0) return;

        // Build WhatsApp message
        let message = `🛒 *NOUVELLE COMMANDE*\n\n`;
        message += `👤 *Client:* ${customerInfo.name}\n`;
        message += `📱 *Téléphone:* ${customerInfo.phone}\n\n`;

        message += `📦 *Mode de livraison:* ${customerInfo.deliveryMethod === 'click-collect' ? 'Click & Collect' : 'Livraison à domicile'}\n`;

        if (customerInfo.deliveryMethod === 'delivery') {
            message += `📍 *Quartier:* ${customerInfo.neighborhood}\n`;
            message += `🏠 *Adresse:* ${customerInfo.address}\n`;
        }

        message += `💳 *Paiement:* ${getPaymentMethodLabel(customerInfo.paymentMethod)}\n\n`;

        message += `*PRODUITS:*\n`;
        cart.forEach((item, index) => {
            const productName = language === 'fr' ? item.nom : item.nom_mg;
            message += `${index + 1}. ${productName}\n`;
            message += `   Qté: ${item.quantity} x ${item.prix.toLocaleString()} Ar = ${(item.quantity * item.prix).toLocaleString()} Ar\n`;
        });

        message += `\n💰 *TOTAL: ${getTotalPrice().toLocaleString()} Ar*`;

        const whatsappUrl = `https://wa.me/261346609582?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const getPaymentMethodLabel = (method: string) => {
        const labels: Record<string, string> = {
            'on-site': t('payOnSite'),
            'mvola': t('mvola'),
            'orange': t('orangeMoney'),
            'airtel': t('airtelMoney'),
            'cash': t('cash'),
        };
        return labels[method] || method;
    };

    if (cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-slate-50 rounded-sm flex items-center justify-center mx-auto mb-8">
                    <span className="text-5xl opacity-50">🛒</span>
                </div>
                <h1 className="text-3xl font-light uppercase tracking-widest text-slate-900 mb-4">{t('emptyCart')}</h1>
                <p className="text-slate-500 mb-10 max-w-sm mx-auto text-sm font-light leading-relaxed">Votre panier est vide pour le moment. Découvrez nos produits et commencez votre commande.</p>
                <Link href="/catalogue" className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-colors">
                    {t('catalogue')} <span>→</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-24 space-y-12">
            <h1 className="text-3xl font-light uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-6">
                {t('myCart')}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Left Column: Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => {
                        const productName = language === 'fr' ? item.nom : item.nom_mg;
                        return (
                            <div key={item.id} className="bg-white rounded-sm p-6 border border-slate-100 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] flex gap-6 items-center">
                                <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-4xl shrink-0">
                                    {item.categorie === 'Antidouleur' ? '💊' :
                                        item.categorie === 'Bébé' ? '👶' :
                                            item.categorie === 'Vitamines' ? '🍊' : '📦'}
                                </div>

                                <div className="flex-1 min-w-0 flex flex-col h-24 justify-between">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">{item.categorie}</p>
                                            <h3 className="font-heading text-slate-900 text-lg leading-tight line-clamp-1 uppercase hover:text-blue-700 transition-colors cursor-pointer">{productName}</h3>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-slate-300 hover:text-red-500 transition-colors p-2"
                                            aria-label="Remove"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center border border-slate-200 rounded-sm">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="font-bold text-slate-900 text-sm w-10 text-center border-l border-r border-slate-200 h-8 flex items-center justify-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="font-light text-slate-900 text-xl tracking-tight">
                                            {(item.quantity * item.prix).toLocaleString()} <span className="text-xs font-bold text-slate-400 uppercase">Ar</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Column: Order Summary & Checkout */}
                <div className="space-y-6 lg:sticky lg:top-24">
                    {/* Total */}
                    <div className="pharma-gradient p-8 rounded-sm text-white shadow-lg shadow-blue-900/10 flex flex-col gap-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                        <div className="relative z-10 font-bold uppercase tracking-[0.2em] text-sm opacity-80">{t('total')}</div>
                        <div className="relative z-10 text-4xl font-light tracking-tight">
                            {getTotalPrice().toLocaleString()} <span className="text-lg font-bold opacity-70 uppercase ml-1">Ar</span>
                        </div>
                    </div>

                    {/* Order Form */}
                    <form onSubmit={handleSubmit} className="bg-white border border-slate-100 p-8 rounded-sm shadow-sm space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-l-2 border-blue-600 pl-3">{t('deliveryMethod')}</h2>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setCustomerInfo({ ...customerInfo, deliveryMethod: 'click-collect' })}
                                    className={`p-4 border transition-all flex flex-col items-center gap-3 text-center rounded-sm ${customerInfo.deliveryMethod === 'click-collect'
                                        ? 'border-blue-600 bg-blue-50/50 text-blue-700'
                                        : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
                                        }`}
                                >
                                    <span className="text-2xl grayscale">📦</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{t('clickAndCollect')}</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCustomerInfo({ ...customerInfo, deliveryMethod: 'delivery' })}
                                    className={`p-4 border transition-all flex flex-col items-center gap-3 text-center rounded-sm ${customerInfo.deliveryMethod === 'delivery'
                                        ? 'border-blue-600 bg-blue-50/50 text-blue-700'
                                        : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
                                        }`}
                                >
                                    <span className="text-2xl grayscale">🚚</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{t('homeDelivery')}</span>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-l-2 border-emerald-500 pl-3">{t('customerInfo')}</h2>

                            <div className="grid grid-cols-1 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{t('name')}</label>
                                    <input
                                        type="text"
                                        value={customerInfo.name}
                                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{t('phoneLabel')}</label>
                                    <input
                                        type="tel"
                                        value={customerInfo.phone}
                                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                    />
                                </div>

                                {customerInfo.deliveryMethod === 'delivery' && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{t('neighborhood')}</label>
                                            <input
                                                type="text"
                                                value={customerInfo.neighborhood}
                                                onChange={(e) => setCustomerInfo({ ...customerInfo, neighborhood: e.target.value })}
                                                required
                                                className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{t('addressLabel')}</label>
                                            <textarea
                                                value={customerInfo.address}
                                                onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                                                required
                                                rows={2}
                                                className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none transition-all resize-none"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-l-2 border-slate-900 pl-3">{t('paymentMethod')}</h2>

                            <div className="grid grid-cols-2 gap-3">
                                {['on-site', 'mvola', 'orange', 'airtel', 'cash'].map((method) => (
                                    <button
                                        key={method}
                                        type="button"
                                        onClick={() => setCustomerInfo({ ...customerInfo, paymentMethod: method as any })}
                                        className={`px-4 py-4 rounded-sm border text-xs font-bold uppercase tracking-wider transition-all ${customerInfo.paymentMethod === method
                                            ? 'border-slate-900 bg-slate-900 text-white'
                                            : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
                                            }`}
                                    >
                                        {getPaymentMethodLabel(method)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 transition-all"
                        >
                            <span className="font-bold uppercase tracking-[0.2em] text-sm">{t('validateOrder')}</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
