import React from 'react';
import styles from './AdminAuth.module.scss';
import { Be_Vietnam_Pro } from 'next/font/google';
import Link from 'next/link';
import Image from "next/image";
import Logo_wave from '@/assets/dispersion_wave.svg';
import AuthForm from '@/components/admin/AuthForm/AuthForm';

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const AdminAuth = () => {
    return (
        <main className={`${styles.auth__wrapper} ${beVietnamPro.className}`}>
            <section className={styles.container}>
                <section className={styles.logo__container}>
                    <Link href='/' className={styles.logo}>
                        <Image src={Logo_wave} alt="Dispersion" className={styles.image}/>
                        <h1>dispersion</h1>
                    </Link>
                    <p>BACKDOOR</p>
                </section>
                <AuthForm />
                <p className={styles.down__text}>If you’re here by accident - you dont need to be here ;)</p>
            </section>
        </main>
    )
}

export default AdminAuth;