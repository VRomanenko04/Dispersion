'use client';
import React, { useEffect, useState } from 'react';
import styles from './AcceptedProject.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import CompleteModalWindow from '../CompleteModalWindow/CompleteModalWindow';

type AcceptedProjectProps = {
    email: string
    fullName: string
    howToContact: string
    message: string
    orderCode: string
    contactDetails?: string
    projectName: string
    deadline: string
}

const AcceptedProject = (props: AcceptedProjectProps) => {
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
    const [timeToDeadline, setTimeToDeadline] = useState('');

    useEffect(() => {
        const deadlineDate = new Date(props.deadline);
        const now = new Date();
        const diff = deadlineDate.getTime() - now.getTime();

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            setTimeToDeadline(`${days}д. ${hours}ч.`);
        } else {
            setTimeToDeadline('Срок истек');
        }
    }, []);

    const completeOrder = async () => {
        console.log('Completed')
    }

    const containerStyles = `${!isProjectOpen ? styles.container : styles.open__container}`

    return (
        <section className={styles.wrapper}>
            <div className={containerStyles} onClick={() => setIsProjectOpen(prev => !prev)}>
                <div className={styles.prev__img}>
                    <div></div>
                </div>
                <h6 className={styles.title}>{props.projectName}</h6>
                <p className={styles.order__code}>{isProjectOpen && 'Код заказа: '}№ {props.orderCode}</p>
                <p className={styles.deadline}>{timeToDeadline}</p>
                <p className={styles.status}>В процессе</p>
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
                        {isProjectOpen && <motion.button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsCompleteModalOpen(true)
                                            }}
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }} 
                                            exit={{ opacity: 0}} 
                                            transition={{ duration: 0.1 }} 
                                            className={styles.btn}>
                                                Завершить
                                        </motion.button>}
                        <div className={styles.contact__container}>
                                <p className={styles.sub__title}>Контактная информация:</p>
                                <div className={styles.contacts}>
                                    <p>Full Name: <b>{props.fullName}</b></p>
                                    <p>Email: <b>{props.email}</b></p>
                                    <p>Contact type: <b>{props.howToContact}</b></p>
                                    {props.howToContact !== 'Email' && props.contactDetails && (
                                        <p>Phone number or @: <b>{props.contactDetails}</b></p>
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
            <CompleteModalWindow isOpen={isCompleteModalOpen} setIsOpen={setIsCompleteModalOpen} completeFunction={completeOrder}/>
        </section>
    )
}

export default AcceptedProject;