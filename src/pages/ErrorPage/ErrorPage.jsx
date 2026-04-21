import React, { useEffect, useState } from 'react';

const ErrorPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const styles = {
        container: {
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: '"Space Mono", monospace',
            color: '#fff',
        },
        gradient: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
        },
        glow: {
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
        },
        grid: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
        },
        content: {
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            animation: 'fadeInDown 0.8s ease-out',
        },
        errorContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
        },
        numberWrapper: {
            position: 'relative',
            animation: 'float 3s ease-in-out infinite',
        },
        number: {
            fontSize: 'clamp(80px, 20vw, 200px)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"Syne", sans-serif',
            letterSpacing: '-2px',
            display: 'block',
            lineHeight: '1',
        },
        underline: {
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)',
            width: '80px',
            margin: '20px auto 0',
            borderRadius: '2px',
            animation: 'slideIn 0.8s ease-out 0.2s both',
        },
        title: {
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: '700',
            fontFamily: '"Syne", sans-serif',
            letterSpacing: '-0.5px',
            animation: 'fadeInUp 0.8s ease-out 0.1s both',
        },
        subtitle: {
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '400px',
            lineHeight: '1.6',
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
        },
        buttonGroup: {
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out 0.3s both',
        },
        primaryButton: {
            padding: '14px 36px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            fontFamily: '"Space Mono", monospace',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            border: 'none',
            cursor: 'pointer',
        },
        secondaryButton: {
            padding: '14px 36px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            fontFamily: '"Space Mono", monospace',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
        },
        buttonText: {
            display: 'inline',
        },
        arrow: {
            display: 'inline-block',
            transition: 'transform 0.3s ease',
        },
        decoration: {
            width: '60px',
            height: '60px',
            border: '2px solid rgba(99, 102, 241, 0.3)',
            borderRadius: '50%',
            margin: '0 auto',
            animation: 'pulse 3s ease-in-out infinite',
        },
        footer: {
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
        },
        footerText: {
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.4)',
            fontWeight: '400',
        },
    };

    return (
        <div style={styles.container}>
            {/* Animated background gradient */}
            <div style={styles.gradient}></div>

            {/* Glow effect that follows cursor */}
            <div
                style={{
                    ...styles.glow,
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                }}
            ></div>

            {/* Animated grid background */}
            <svg style={styles.grid} viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path
                            d="M 50 0 L 0 0 0 50"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.05)"
                            strokeWidth="0.5"
                        />
                    </pattern>
                </defs>
                <rect width="1000" height="1000" fill="url(#grid)" />
            </svg>

            {/* Content */}
            <div style={styles.content}>
                <div style={styles.errorContainer}>
                    {/* Animated number */}
                    <div style={styles.numberWrapper}>
                        <span style={styles.number}>404</span>
                        <div style={styles.underline}></div>
                    </div>

                    {/* Message */}
                    <h1 style={styles.title}>Page Not Found</h1>
                    <p style={styles.subtitle}>
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* CTA Buttons */}
                    <div style={styles.buttonGroup}>
                        <button style={styles.primaryButton}>
                            <span style={styles.buttonText}>Return Home</span>
                            <span style={styles.arrow}>→</span>
                        </button>
                        <button style={styles.secondaryButton}>
                            <span style={styles.buttonText}>Go Back</span>
                        </button>
                    </div>

                    {/* Decorative element */}
                    <div style={styles.decoration}></div>
                </div>
            </div>

            {/* Footer hint */}
            <div style={styles.footer}>
                <p style={styles.footerText}>Lost in digital space</p>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                button {
                    cursor: pointer;
                    border: none;
                    background: none;
                    font-family: inherit;
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                button:hover {
                    transform: translateY(-2px);
                }

                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }

                @keyframes slideIn {
                    from { width: 0; }
                    to { width: 100%; }
                }
            `}</style>
        </div>
    );
};

export default ErrorPage;