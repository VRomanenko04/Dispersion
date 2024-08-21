'use client'
import React from 'react';
import styles from './UnderConsideration.module.scss';
import UnderConsiderationBlock from '@/components/admin/UnderConsiderationBlock/UnderConsiderationBlock';
import ProtectedPage from '@/components/admin/ProtectedPage';
import SearchInput from '@/components/admin/SearchInput/SearchInput';


const UnderConsiderationPage = () => {
    return (
        <section className={styles.container}>
            <SearchInput />
            <UnderConsiderationBlock />
        </section>
    )
}

export default ProtectedPage(UnderConsiderationPage);