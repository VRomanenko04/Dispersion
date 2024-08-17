import React from 'react';
import styles from './UnderConsideration.module.scss';
import UnderConsiderationBlock from '@/components/admin/UnderConsiderationBlock/UnderConsiderationBlock';


const UnderConsiderationPage = () => {
    return (
        <section className={styles.container}>
            <UnderConsiderationBlock />
        </section>
    )
}

export default UnderConsiderationPage;