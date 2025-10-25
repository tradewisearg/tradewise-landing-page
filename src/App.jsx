import React, { useState, useRef, useEffect } from 'react';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import InstagramIcon from './components/InstagramIcon';
import Disclaimer from './components/Disclaimer';
import Terms from './components/Terms';
import Header from './components/Header';
import Infobar from './components/Infobar';
import CalendlyCall from './components/CalendlyIcon';
import './App.css';
import './index.css';

const LandingPageContent = () => (
    <>
        <Header />
        <Offer />
        <Testimonials />
        <Guarantee />
    </>
);

const App = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [currentPage, setCurrentPage] = useState('landing');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1)

            if (hash === 'privacidad') {
                setCurrentPage('disclaimer');
                window.scrollTo(0, 0);
            } else if (hash === 'terminos') {
                setCurrentPage('terms');
                window.scrollTo(0, 0);

            } else if (hash === 'faq') {
                setCurrentPage('faq');
                window.scrollTo(0, 0);
            }

            else {
                setCurrentPage('landing');
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'disclaimer':
                return <Disclaimer />;
            case 'terms':
                return <Terms />;
            case 'faq':
                return <FAQ />
            case 'landing':
            default:
                return <LandingPageContent />;
        }
    };

    return (
        <>
            <main>
                {renderPage()}
            </main>

            <Footer />

            {currentPage === 'landing' && <Infobar />}
            {currentPage === 'landing' && <CalendlyCall />}
            {currentPage === 'landing' && <InstagramIcon />}
        </>
    );
};

export default App;
