// ReturnTop.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ReturnTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div 
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                        cursor: 'pointer',
                        backgroundColor: 'rgba(18, 123, 255,0.8)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '20px',
                        zIndex: 1000,
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(40,86,161,1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(40,86,161,0.8)'}
                    role="button"
                    tabIndex={0}
                    aria-label="ページトップへ戻る"
                >
                    <ArrowUp size={24} />
                </div>
            )}
        </>
    );
};

