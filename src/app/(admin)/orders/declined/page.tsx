'use client';
import React from 'react';
import styles from './DeclinedPage.module.scss';
import ProtectedPage from '@/components/admin/ProtectedPage';
import DeclinedProjectsBlock from '@/components/admin/DeclinedProjectsBlock/DeclinedProjectsBlock';


const DeclinedPage = () => {
    return (
        <section className={styles.container}>
            <DeclinedProjectsBlock />
        </section>
    )
}

export default ProtectedPage(DeclinedPage);