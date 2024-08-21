'use client'
import React from 'react';
import styles from './GeneralPanel.module.scss';
import ActiveOrdersBlock from '@/components/admin/ActiveOrdersBlock/ActiveOrdersBlock';
import ProtectedPage from '@/components/admin/ProtectedPage';


const GeneralPanel = () => {
    return (
        <div className={styles.page__wrapper}>
            <section>
                <ActiveOrdersBlock />
                {/* Statistic */}
            </section>
            <section>
                {/* General to-do list */}
            </section>
        </div>
    )
}

export default ProtectedPage(GeneralPanel);