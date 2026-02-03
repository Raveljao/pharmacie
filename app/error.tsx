'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 px-4">
            <div className="text-center max-w-2xl">
                <div className="text-8xl mb-8">⚠️</div>
                <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.15em] text-slate-900 mb-6">
                    Une erreur est survenue
                </h1>
                <p className="text-slate-600 text-lg mb-12">
                    {error.message || "Quelque chose s'est mal passé"}
                </p>
                <button
                    onClick={reset}
                    className="inline-block pharma-gradient text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.12em] text-sm hover:opacity-90 transition-all shadow-xl"
                >
                    Réessayer
                </button>
            </div>
        </div>
    );
}
