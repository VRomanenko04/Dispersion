'use client'
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/dispersion_logo.svg';
import Logout_icon from '@/assets/Logout_icon.svg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { AdminLogout } from '@/services/AdminLogout';

const Header = () => {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
            } else {
                setEmail(null)
            }
        })
    }, [])

    const handleLogOut = async () => {
        await AdminLogout();
    }

    return (
        <header className={styles.header__wrapper}>
            <div className={styles.header__container}>
                <Link href='/general'>
                    <Image src={Logo} alt='Dispersion logo' className={styles.logo}/>
                </Link>
                <div className={styles.logout__container}>
                    <p>{email}</p>
                    <Image onClick={handleLogOut} className={styles.logout__icon} src={Logout_icon} alt='Logout icon'/>
                </div>
            </div>
        </header>
    )
}

export default Header;