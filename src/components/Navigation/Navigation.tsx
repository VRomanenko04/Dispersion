'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './navigation.module.scss';
import Image from 'next/image';
import Web_3d from '@/assets/web_3d.png';
import Design_3d from '@/assets/picture_3d.png';
import Portfolio_3d from '@/assets/bag_3d.png';


const Navigation = () => {
const [navImage, setNavImage] = useState("Website creation");
const [changePage, setChangePage] = useState("Website creation");
const [isHidden, setIsHidden] = useState(false);
const [items, setItems] = useState(["Website creation", "Design services", "Portfolio"]);

const chosenImage = navImage === "Website creation" ? Web_3d : navImage === "Design services" ? Design_3d : navImage === "Portfolio" ? Portfolio_3d : '';
const chosenBlur = `${styles.blur} ${navImage === "Website creation" ? styles.blue__blur : navImage === "Design services" ? styles.pink__blur : navImage === "Portfolio" ? styles.purple_blur : ''}`;

const handleNavClick = (selectedItem: string) => {
    if (navImage !== selectedItem) {
        setItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item !== selectedItem);
            updatedItems.unshift(selectedItem);
            return updatedItems;
        });
        setChangePage(selectedItem);
        setIsHidden(true);
        setTimeout(() => {
            setIsHidden(false);
        }, 1000);
        setTimeout(() => {
            setNavImage(selectedItem);
        }, 1000);
    }
};

const getActiveClass = (item: string) => {
    if (changePage === "Website creation" && item === "Website creation") return styles.active__1;
    if (changePage === "Design services" && item === "Design services") return styles.active__2;
    if (changePage === "Portfolio" && item === "Portfolio") return styles.active__3;
    return '';
};

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.menu}>
                        {items.map((item) => {
                            const isActive = changePage === item;
                            const listItemStyles = `${styles.menu__item} ${isActive ? getActiveClass(item) : ''}`;
                            return (
                                <motion.li
                                    className={listItemStyles}
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    layout
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.div 
                                        className={styles.line}
                                        initial={{ width: "4px", height: "19px"}}
                                        animate={{ width: isActive ? "8px" : "4px", height: isActive ? "38px" : "19px" }}
                                        transition={{ duration: 0.01 }}
                                    ></motion.div>
                                    <motion.h3
                                        initial={{ scale: 1 }}
                                        animate={{ scale: isActive ? 1.4 : 1 }}
                                        transition={{ duration: 0.01 }}
                                    >{item}</motion.h3>
                                </motion.li>
                            )
                        })}
                    </ul>
                </nav>
                <div className={styles.image__block}>
                    <Image loading='eager' className={`${styles.image} ${isHidden ? styles.hidden__image : ''}`} src={chosenImage} alt={navImage}/>
                    <div className={`${chosenBlur} ${isHidden ? styles.hidden : ''}`}></div>
                </div>
            </div>
        </section>
    )
}

export default Navigation;