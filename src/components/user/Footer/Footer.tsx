import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';
import Logo from '@/assets/dispersion_logo.svg';
import Link from 'next/link';

type FooterProps = {
    color: string
}

const Footer = ({ color }: FooterProps) => {
    return (
        <footer className={`${styles.footer} ${color === 'blue' ? styles.blue : color === 'magenta' ? styles.magenta : color === 'purple' ? styles.purple : ''}`}>
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