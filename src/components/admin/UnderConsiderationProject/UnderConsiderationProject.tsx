'use client'
import React, { useState } from 'react';
import styles from './UnderConsiderationProject.module.scss';
import Image from 'next/image';
import checkmark from '@/assets/check_mark_icon.svg';
import dicline from '@/assets/dicline_icon.svg';
import DeleteModalWindow from '../DeleteModalWindow/DeleteModalWindow';
import { OrderRejection } from '@/services/OrderRejection';
import AcceptProjectModalWindow from '../AcceptProjectModalWindow/AcceptProjectModalWindow';
import { AcceptOrder } from '@/services/AcceptOrder';

type UnderConsiderationProjectProps = {
    orderCode: string
    fullName: string
    email: string
    additionalContact?: string
    message: string
    projectType: string
}

const UnderConsiderationProject = (props: UnderConsiderationProjectProps) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);


    const handleDeclineOrder = async () => {
        await OrderRejection(props.fullName).then(() => {
            setIsDeleteModalOpen(false);
            window.location.reload();
        })
    }

    const handleAcceptOrder = async (projectName: string, timeForProject: number) => {
        await AcceptOrder(props.fullName, projectName, timeForProject).then(() => {
            setIsAcceptModalOpen(false);
            window.location.reload();
        })
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.prev__img}>
                    <div></div>
                </div>
                <h6 className={styles.title}>{props.fullName}</h6>
                <p className={styles.order__code}>№ {props.orderCode}</p>
                <div className={styles.buttons__container}>
                    <button className={styles.accept} onClick={() => setIsAcceptModalOpen(true)}>
                        <Image src={checkmark} alt='Checkmark icon'/>
                        Принять
                    </button>
                    <button className={styles.dicline} onClick={() => setIsDeleteModalOpen(true)}>
                        <Image src={dicline} alt='Dicline icon'/>
                        Отклонить
                    </button>
                </div>
            </div>
            <DeleteModalWindow setIsOpen={setIsDeleteModalOpen} isOpen={isDeleteModalOpen} deleteFunction={handleDeclineOrder}/>
            <AcceptProjectModalWindow setIsOpen={setIsAcceptModalOpen} isOpen={isAcceptModalOpen} acceptFunction={handleAcceptOrder}/>
        </>
    )
}

export default UnderConsiderationProject;