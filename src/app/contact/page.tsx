import React from 'react';
import styles from './ContactPage.module.scss';
import Image from 'next/image';
import Logo from '@/assets/dispersion_logo.svg';


const ContactPage = () => {
    return (
        <>
            <header className={styles.header__wrapper}>
                <div className={styles.header__container}>
                    <Image src={Logo} alt='Dispersion logo' className={styles.logo}/>
                </div>
            </header>
            <main>
                {/* Form component */}
            </main>
        </>
    )
}

export default ContactPage;