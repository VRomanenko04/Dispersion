import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/dispersion_logo.svg';

const Header = () => {
    return (
        <header className={styles.header__wrapper}>
            <div className={styles.header__container}>
                <Link href='/general'>
                    <Image src={Logo} alt='Dispersion logo' className={styles.logo}/>
                </Link>
            </div>
        </header>
    )
}

export default Header;