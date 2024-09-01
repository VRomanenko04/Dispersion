'use client';
import React, { useEffect, useState } from 'react';
import styles from './ActiveOrder.module.scss';

type ActiveOrderProps = {
    orderCode: string
    projectName: string
    projectStatus?: string
    deadline: string
}

const ActiveOrder = (props: ActiveOrderProps) => {
    const [timeToDeadline, setTimeToDeadline] = useState('');

    useEffect(() => {
        const deadlineDate = new Date(props.deadline);
        const now = new Date();
        const diff = deadlineDate.getTime() - now.getTime();

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            setTimeToDeadline(`${days}д. ${hours}ч.`);
        } else if (props.projectStatus){
            setTimeToDeadline('0д. 0ч.');
        } else {
            setTimeToDeadline('Срок истек');
        }
    }, []);

    return (
        <>
            {!props.projectStatus && (
                <div className={styles.container}>
                    <div className={styles.prev__img}>
                        <div></div>
                    </div>
                    <h6 className={styles.title}>{props.projectName}</h6>
                    <p className={styles.order__code}>№ {props.orderCode}</p>
                    <p className={`${styles.deadline} ${timeToDeadline === 'Срок истек' ? styles.red__deadline : ''}`}>{timeToDeadline}</p>
                </div>
            )}
        </>
    )
}

export default ActiveOrder;