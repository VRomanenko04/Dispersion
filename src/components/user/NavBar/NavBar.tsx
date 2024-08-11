'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './NavBar.module.scss';
import { motion } from 'framer-motion';

type NavBarProps = {
    setActiveLink: React.Dispatch<React.SetStateAction<string>>
    setOtherImage: React.Dispatch<React.SetStateAction<string>>
    setItemsIndex: React.Dispatch<React.SetStateAction<string[]>>
    activeLink: string
    navVisible: boolean
}

const links = ["Website creation", "Design services", "Portfolio"];

const NavBar = ({ setActiveLink, setOtherImage, setItemsIndex, activeLink, navVisible }: NavBarProps) => {
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    const navRef = useRef<HTMLUListElement>(null);


    const handleNavClick = (link: string) => {
        setActiveLink(link);
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

                if (activeLink === 'Website creation') {
                    width += 5;
                } else if (activeLink === 'Design services') {
                    width;
                } else if (activeLink === 'Portfolio') {
                    width -= 5;
                }

                setUnderlineStyle({ left, width });
            }
        }
    }, [activeLink]);

    return (
        <motion.nav 
            className={`${styles.container}`}
            animate={{
                backgroundColor: activeLink === 'Website creation' 
                    ? "#2554D2" 
                    : activeLink === 'Design services' 
                    ? '#F61B5D' 
                    : activeLink === 'Portfolio' 
                    ? '#5116FB' 
                    : '',
                    opacity: navVisible ? 1 : 0
            }}
            initial={{ opacity: 0}}
            transition={{ duration: 0.3 }}
        >
            <ul className={styles.menu} ref={navRef}>
                {links.map((link) => (
                    <li 
                        key={link}
                        className={`${styles.link} ${link === activeLink ? styles.active__link : ''}`}
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

export default NavBar;