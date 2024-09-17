import React from 'react';
import styles from './HomeHead.module.scss';
import Image from 'next/image';
import Background_image from '@/assets/backgrond-dispersion-logo.svg';
import Logo from '@/assets/dispersion_logo.svg'
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const HomeHead = () => {    
    return (
        <header className={`${styles.container} ${beVietnamPro.className}`}>
            <Image className={styles.background} src={Background_image} alt='backgrond dispersion logo'/>
            <div className={styles.text__container}>
                <Image src={Logo} alt='dispersion logo'/>
                <h1>web design & web development studio</h1>
            </div>
        </header>
    )
}

export default HomeHead;