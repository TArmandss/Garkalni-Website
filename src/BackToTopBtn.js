import React, { useEffect, useState, useRef } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import './BackToTopArrow.css';

function BackToTopBtn() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    const backToTopButtonRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
                updateBackground();
            } else {
                setBackToTopButton(false);
            }
        };

        const updateBackground = () => {
            const pos = window.scrollY;
            const calcHeight = document.documentElement.clientHeight;
            const percentVal = (pos / (document.body.scrollHeight - calcHeight)) * 100;
            backToTopButtonRef.current.style.background = `conic-gradient(#138808 ${percentVal}%, transparent ${percentVal}%)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <button
                onClick={ScrollTop}
                className={`back-to-top-button ${backToTopButton ? 'visible' : ''}`}
                ref={backToTopButtonRef}
            >
                <div className="inner">
                    <IoIosArrowUp />
                </div>
            </button>
        </div>
    );
}

export default BackToTopBtn;
