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
import { AnimatePresence, motion } from 'framer-motion';

type UnderConsiderationProjectProps = {
    orderCode: string
    fullName: string
    email: string
    additionalContact?: string
    howToContact: string
    message: string
}

const UnderConsiderationProject = (props: UnderConsiderationProjectProps) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
    const [isProjectOpen, setIsProjectOpen] = useState(false);


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

    const containerStyles = `${!isProjectOpen ? styles.container : styles.open__container}`

    return (
        <>
            <section className={styles.wrapper}>
                <div className={containerStyles} onClick={() => setIsProjectOpen(prev => !prev)}>
                    <div className={styles.prev__img}>
                        <div></div>
                    </div>
                    <h6 className={styles.title}>{props.fullName}</h6>
                    <p className={styles.order__code}>{isProjectOpen && 'Код заказа: '}№ {props.orderCode}</p>
                    <div className={styles.buttons__container}>
                        <button className={styles.accept} onClick={(e) => {
                            e.stopPropagation();
                            setIsAcceptModalOpen(true)
                        }}>
                            <Image src={checkmark} alt='Checkmark icon'/>
                            Принять
                        </button>
                        <button className={styles.dicline} onClick={(e) => {
                            e.stopPropagation();
                            setIsDeleteModalOpen(true)
                        }}>
                            <Image src={dicline} alt='Dicline icon'/>
                            Отклонить
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {isProjectOpen && (
                        <motion.div 
                            className={styles.additional__container}
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.contact__container}>
                                <p className={styles.sub__title}>Контактная информация:</p>
                                <div className={styles.contacts}>
                                    <p>Full Name: <b>{props.fullName}</b></p>
                                    <p>Email: <b>{props.email}</b></p>
                                    <p>Contact type: <b>{props.howToContact}</b></p>
                                    {props.howToContact !== 'Email' && props.additionalContact && (
                                        <p>Phone number or @: <b>{props.additionalContact}</b></p>
                                    )}
                                </div>
                            </div>
                            <div className={styles.message__container}>
                                <p className={styles.sub__title}>Описание работы:</p>
                                <p className={styles.message}>{props.message}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
            <DeleteModalWindow setIsOpen={setIsDeleteModalOpen} isOpen={isDeleteModalOpen} deleteFunction={handleDeclineOrder}/>
            <AcceptProjectModalWindow setIsOpen={setIsAcceptModalOpen} isOpen={isAcceptModalOpen} acceptFunction={handleAcceptOrder}/>
        </>
    )
}

export default UnderConsiderationProject;