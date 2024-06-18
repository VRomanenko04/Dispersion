'use client'
import React, { useState } from 'react';
import styles from './navigation.module.scss';
import Image from 'next/image';
import Web_3d from '@/assets/web_3d.png';
import Design_3d from '@/assets/picture_3d.png';
import Portfolio_3d from '@/assets/bag_3d.png';


const Navigation = () => {
const [navImage, setNavImage] = useState("Website creation");

const chosenImage = navImage === "Website creation" ? Web_3d : navImage === "Design services" ? Design_3d : navImage === "Portfolio" ? Portfolio_3d : '';
const chosenBlur = `${navImage === "Website creation" ? styles.blue__blur : navImage === "Design services" ? styles.pink__blur : navImage === "Portfolio" ? styles.purple_blur : ''}`

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <nav>
                    <ul className={styles.menu}>
                        <li 
                            className={`${styles.menu__item} ${navImage === "Website creation" && styles.active__first}`} 
                            onClick={() => setNavImage("Website creation")}
                        >
                            <div className={styles.line}></div>
                            <h3>Website creation</h3>
                        </li>
                        <li 
                            className={`${styles.menu__item} ${navImage === "Design services" && styles.active__second}`} 
                            onClick={() => setNavImage("Design services")}
                        >
                            <div className={styles.line}></div>
                            <h3>Design services</h3>
                        </li>
                        <li 
                            className={`${styles.menu__item} ${navImage === "Portfolio" && styles.active__third}`} 
                            onClick={() => setNavImage("Portfolio")}
                        >
                            <div className={styles.line}></div>
                            <h3>Portfolio</h3>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Image width={900} height={900} src={chosenImage} alt={navImage}/>
                    <div className={chosenBlur}></div>
                </div>
            </div>
        </section>
    )
}

export default Navigation;