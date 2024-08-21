'use client'
import React from 'react';
import styles from './UnderConsideration.module.scss';
import UnderConsiderationBlock from '@/components/admin/UnderConsiderationBlock/UnderConsiderationBlock';
import ProtectedPage from '@/components/admin/ProtectedPage';


const UnderConsiderationPage = () => {
    return (
        <section className={styles.container}>
            <UnderConsiderationBlock />
        </section>
    )
}

export default ProtectedPage(UnderConsiderationPage);