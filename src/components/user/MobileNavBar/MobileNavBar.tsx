'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './MobileNavBar.module.scss';
import { motion } from 'framer-motion'


type MobileNavBarProps = {
    currentPage: string
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
    setOtherImage: React.Dispatch<React.SetStateAction<string>>
    setItemsIndex: React.Dispatch<React.SetStateAction<string[]>>
}

const links = ["Website creation", "Design services", "Portfolio"];

const MobileNavBar = ({ currentPage, setCurrentPage, setItemsIndex, setOtherImage }: MobileNavBarProps) => {
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    const navRef = useRef<HTMLUListElement>(null);

    const handleNavClick = (link: string) => {
        setCurrentPage(link);
        setOtherImage(link);
        setItemsIndex((prevItems) => {
            const updatedItems = prevItems.filter((item) => item !== link);
            updatedItems.unshift(link);
            return updatedItems;
        });
    }

    useEffect(() => {
        if (navRef.current) {
            const activeItem = navRef.current.querySelector(`.${styles.active__link}`);
            if (activeItem) {
                const { offsetLeft, offsetWidth } = activeItem as HTMLElement;
                let left = offsetLeft;
                let width = offsetWidth;

                if (currentPage === 'Website creation') {
                    width += 5;
                } else if (currentPage === 'Design services') {
                    width;
                } else if (currentPage === 'Portfolio') {
                    width -= 5;
                }

                setUnderlineStyle({ left, width });
            }
        }
    }, [currentPage]);

    return (
        <motion.nav 
            className={styles.container}
            animate={{
                backgroundColor: currentPage === 'Website creation' 
                    ? "#2554D2" 
                    : currentPage === 'Design services' 
                    ? '#F61B5D' 
                    : currentPage === 'Portfolio' 
                    ? '#5116FB' 
                    : ''
            }}
            transition={{ duration: 0.3 }}
        >   
            <ul className={styles.menu} ref={navRef}>
                {links.map((link) => (
                    <li 
                    key={link}
                    className={`${styles.link} ${link === currentPage ? styles.active__link : ''}`}
                    onClick={() => handleNavClick(link)}
                    >
                        {link}
                    </li>
                ))}
                <motion.div 
                    className={styles.underline}
                    animate={underlineStyle}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
            </ul>
        </motion.nav>
    )
}

export default MobileNavBar;