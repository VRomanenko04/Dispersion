'use client'
import React, { useState } from 'react';
import styles from './navigation.module.scss';
import Image from 'next/image';
import Web_3d from '@/assets/web_3d.png';
import Design_3d from '@/assets/picture_3d.png';
import Portfolio_3d from '@/assets/bag_3d.png';


const Navigation = () => {
const [navImage, setNavImage] = useState("Website creation");
const [changePage, setChangePage] = useState("Website creation");
const [isHidden, setIsHidden] = useState(false);

const chosenImage = navImage === "Website creation" ? Web_3d : navImage === "Design services" ? Design_3d : navImage === "Portfolio" ? Portfolio_3d : '';
const chosenBlur = `${styles.blur} ${navImage === "Website creation" ? styles.blue__blur : navImage === "Design services" ? styles.pink__blur : navImage === "Portfolio" ? styles.purple_blur : ''}`;

const handleNavClick = (imageType: string) => {
    if (navImage !== imageType) {
        setChangePage(imageType);
        setIsHidden(true);
        setTimeout(() => {
            setIsHidden(false);
        }, 800);
        setTimeout(() => {
            setNavImage(imageType);
        }, 600);
    }
};

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.menu}>
                        <li 
                            className={`${styles.menu__item} ${changePage === "Website creation" && styles.active__first}`} 
                            onClick={() => handleNavClick("Website creation")}
                        >
                            <div className={styles.line}></div>
                            <h3>Website creation</h3>
                        </li>
                        <li 
                            className={`${styles.menu__item} ${changePage === "Design services" && styles.active__second}`} 
                            onClick={() => handleNavClick("Design services")}
                        >
                            <div className={styles.line}></div>
                            <h3>Design services</h3>
                        </li>
                        <li 
                            className={`${styles.menu__item} ${changePage === "Portfolio" && styles.active__third}`} 
                            onClick={() => handleNavClick("Portfolio")}
                        >
                            <div className={styles.line}></div>
                            <h3>Portfolio</h3>
                        </li>
                    </ul>
                </nav>
                <div className={styles.image__block}>
                    <Image className={`${styles.image} ${isHidden ? styles.hidden__image : ''}`} src={chosenImage} alt={navImage}/>
                    <div className={`${chosenBlur} ${isHidden ? styles.hidden : ''}`}></div>
                </div>
            </div>
        </section>
    )
}

export default Navigation;