'use client'
import React from 'react';
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

    const handleNavClick = (link: string) => {
        setActiveLink(link);
        setOtherImage(link);
        setItemsIndex((prevItems) => {
            const updatedItems = prevItems.filter((item) => item !== link);
            updatedItems.unshift(link);
            return updatedItems;
        });
    }

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
            <ul className={styles.menu}>
                {links.map((link) => (
                    <li 
                        key={link}
                        className={`${styles.link} ${link === activeLink ? styles.active__link : ''}`}
                        onClick={() => handleNavClick(link)}
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </motion.nav>
    )
}

export default NavBar;