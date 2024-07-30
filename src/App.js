import React, { lazy, useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const GallarySection = lazy(() => import('./components/Gallery/GallarySection'));
const AllServices = lazy(() => import('./components/ServicesGarkalniSection/AllServices'));

function InitialTransition({ children }) {
    return (
        <>
            <motion.div
                initial={{ x: '0' }}
                animate={{ x: '-100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 3 }}
                key="intro-page"
                className="noise-bg"
            >
                <div className="animation-bg">
                    <div className="animation-content">
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                            exit={{ opacity: 0 }}
                            className="animation-bg-logo"
                        ></motion.span>

                        <>
                            <motion.h1
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 20,
                                    delay: 0.6
                                }}
                                exit={{ opacity: 0 }}
                                className="intro-text"
                            >
                                Atpūtas vieta <br />
                                <span>Garkalni</span>
                            </motion.h1>
                        </>
                    </div>
                </div>
            </motion.div>
            {children}
        </>
    );
}

function App() {

    const [sideMenu, setSideMenu] = useState(false);
    const [showMenuIcon, setShowMenuIcon] = useState(false);
    const [menuDisplay, setMenuDisplay] = useState(false); // Managing "Papild info" state

    useEffect(() => {
        const updateScrollDepth = () => {
            const scrollDepth = window.scrollY > 100;
            if (scrollDepth) {
                setShowMenuIcon(true);
            } else {
                setShowMenuIcon(false);
            }
        };

        window.addEventListener('scroll', updateScrollDepth);

        return () => {
            window.removeEventListener('scroll', updateScrollDepth);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            <BrowserRouter forceRefresh={true}>
                <Suspense
                    fallback={
                        <div className="loading-container ">
                            <div class="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    }
                >
                    <Routes>
                        <Route
                            index
                            element={
                                <InitialTransition >
                                    <HomePage
                                        showMenuIcon={showMenuIcon}
                                        setShowMenuIcon={setShowMenuIcon}
                                        menuDisplay={menuDisplay}
                                        setMenuDisplay={setMenuDisplay}
                                    />
                                </InitialTransition>
                            }
                        />
                        <Route
                            path="/services"
                            element={
                                <InitialTransition key="services-page">
                                    <AllServices
                                        showMenuIcon={showMenuIcon}
                                        sideMenu={sideMenu}
                                        setSideMenu={setSideMenu}
                                        menuDisplay={menuDisplay}
                                        setMenuDisplay={setMenuDisplay}
                                    />
                                </InitialTransition>
                            }
                        />
                        <Route
                            path="/gallery"
                            element={
                                <InitialTransition key="gallery-page">
                                    <GallarySection />
                                </InitialTransition>
                            }
                        />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </AnimatePresence>
    );
}

export default App;
