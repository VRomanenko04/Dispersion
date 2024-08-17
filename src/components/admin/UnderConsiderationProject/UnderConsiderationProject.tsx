'use client'
import React from 'react';
import styles from './UnderConsiderationProject.module.scss';
import Image from 'next/image';
import checkmark from '@/assets/check_mark_icon.svg';
import dicline from '@/assets/dicline_icon.svg';

type UnderConsiderationProjectProps = {
    orderCode: string
    fullName: string
    email: string
    additionalContact?: string
    message: string
    projectType: string
}

const UnderConsiderationProject = (props: UnderConsiderationProjectProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.prev__img}>
                <div></div>
            </div>
            <h6 className={styles.title}>{props.fullName}</h6>
            <p className={styles.order__code}>{props.orderCode}</p>
            <div className={styles.buttons__container}>
                <button className={styles.accept}>
                    <Image src={checkmark} alt='Checkmark icon'/>
                    Принять
                </button>
                <button className={styles.dicline}>
                    <Image src={dicline} alt='Dicline icon'/>
                    Отклонить
                </button>
            </div>
        </div>
    )
}

export default UnderConsiderationProject;