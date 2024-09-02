'use client';
import React, { useState } from 'react';
import styles from './DeclinedProject.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

type DeclinedProjectProps = {
    email: string
    fullName: string
    howToContact: string
    message: string
    orderCode: string
    contactDetails?: string
}

const DeclinedProject = (props: DeclinedProjectProps) => {
    const [isProjectOpen, setIsProjectOpen] = useState(false);

    const containerStyles = `${!isProjectOpen ? styles.container : styles.open__container}`

    return (
        <section className={styles.wrapper}>
            <div className={containerStyles} onClick={() => setIsProjectOpen(prev => !prev)}>
                <div className={styles.prev__img}>
                    <div></div>
                </div>
                <h6 className={styles.title}>{props.fullName}</h6>
                <p className={styles.order__code}>{isProjectOpen && 'Код заказа: '}№ {props.orderCode}</p>
                <p className={styles.status}>Отклонён</p>
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
        </section>
    )
}

export default DeclinedProject;