'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(to bottom right, #f8fafc, #dbeafe, #d1fae5)',
                    padding: '1rem',
                }}>
                    <div style={{ textAlign: 'center', maxWidth: '42rem' }}>
                        <div style={{ fontSize: '6rem', marginBottom: '2rem' }}>⚠️</div>
                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: '300',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: '#0f172a',
                            marginBottom: '1.5rem',
                        }}>
                            Erreur globale
                        </h1>
                        <p style={{
                            color: '#64748b',
                            fontSize: '1.125rem',
                            marginBottom: '3rem',
                        }}>
                            {error.message || "Une erreur inattendue s'est produite"}
                        </p>
                        <button
                            onClick={reset}
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                                color: 'white',
                                padding: '1.25rem 2.5rem',
                                borderRadius: '0.125rem',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                fontSize: '0.875rem',
                                cursor: 'pointer',
                                border: 'none',
                                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                            }}
                        >
                            Réessayer
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
