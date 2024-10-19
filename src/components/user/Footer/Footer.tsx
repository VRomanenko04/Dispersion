import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';
import Logo from '@/assets/dispersion_logo.svg';
import Link from 'next/link';
import { Be_Vietnam_Pro } from 'next/font/google';

type FooterProps = {
    color: string
}

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const Footer = ({ color }: FooterProps) => {
    return (
        <footer className={`${styles.footer} ${color === 'blue' ? styles.blue : color === 'magenta' ? styles.magenta : color === 'purple' ? styles.purple : ''} ${beVietnamPro.className}`}>
            <div className={styles.footer__container}>
                <address className={styles.adress}>
                    <h6>Support:</h6>
                    <p>Inst: <a className={styles.link} href="https://www.instagram.com/dispersion_studio?igsh=dnNtMXIybWlxa3V1&utm_source=qr">@dispertion_studio</a></p>
                    <p>E-mail: <a className={styles.link} href="mailto: dispersionwebagency@gmail.com">dispersionwebagency@gmail.com</a></p>
                </address>
                <Link href='/'>
                    <Image src={Logo} alt='Dispersion logo' className={styles.logo}/>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;