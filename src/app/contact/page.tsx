import React from 'react';
import styles from './ContactPage.module.scss';
import Image from 'next/image';
import Logo from '@/assets/dispersion_logo.svg';
import ContactForm from '@/components/user/ContactForm/ContactForm';
import { Be_Vietnam_Pro } from 'next/font/google';
import backIcon from '@/assets/back_arrow.svg';
import Link from 'next/link';

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ContactPage = () => {
    return (
        <>
            <header className={`${styles.header__wrapper} ${beVietnamPro.className}`}>
                <div className={styles.header__container}>
                    <Link href='/'>
                        <Image src={Logo} alt='Dispersion logo' className={styles.logo}/>
                    </Link>
                </div>
            </header>
            <main className={`${styles.main__wrapper} ${beVietnamPro.className}`}>
                <div className={styles.main__container}>
                    <Link href='/' className={styles.link}>
                        <Image className={styles.icon} src={backIcon} alt='Back button'/>
                        Back
                    </Link>
                    <ContactForm />
                </div>
            </main>
        </>
    )
}

export default ContactPage;