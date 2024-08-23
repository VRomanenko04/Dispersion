'use client'
import React from 'react';
import styles from './AcceptedPage.module.scss';
import ProtectedPage from '@/components/admin/ProtectedPage';
import ActiveProjectsBlock from '@/components/admin/AcceptedProjectsBlock/AcceptedProjectsBlock';

const ActivePage = () => {
    return (
        <section className={styles.container}>
            <ActiveProjectsBlock />
        </section>
    )
}

export default ProtectedPage(ActivePage);