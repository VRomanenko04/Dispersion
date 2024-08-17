'use client'
import React, { useState } from 'react';
import styles from './UnderConsiderationProject.module.scss';
import Image from 'next/image';
import checkmark from '@/assets/check_mark_icon.svg';
import dicline from '@/assets/dicline_icon.svg';
import DeleteModalWindow from '../DeleteModalWindow/DeleteModalWindow';

type UnderConsiderationProjectProps = {
    orderCode: string
    fullName: string
    email: string
    additionalContact?: string
    message: string
    projectType: string
}

const UnderConsiderationProject = (props: UnderConsiderationProjectProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
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
                    <button className={styles.dicline} onClick={() => setIsModalOpen(prev => !prev)}>
                        <Image src={dicline} alt='Dicline icon'/>
                        Отклонить
                    </button>
                </div>
            </div>
            <DeleteModalWindow setIsOpen={setIsModalOpen} isOpen={isModalOpen}/>
        </>
    )
}

export default UnderConsiderationProject;