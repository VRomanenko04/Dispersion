'use client'
import React, { useState } from 'react';
import styles from './TodoPrototype.module.scss';
import { TodoProjectObject } from '@/app/(admin)/todo/page';
import Image from 'next/image';
import TrashIcon from '@/assets/trash-icon.svg';
import Checkbox from '../Checkbox/Checkbox';


const TodoPrototype = ({ orderCode, projectName }: TodoProjectObject) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={`${styles.container} ${isChecked ? styles.selected : ''}`}>
            <div className={styles.first__line}>
                <div>
                    <h2 className={styles.title}>{projectName}</h2>
                    <p className={styles.order_code}>№ {orderCode}</p>
                </div>
                <Checkbox isChecked={isChecked} setIsChecked={setIsChecked}/>
            </div>
            <div className={styles.list__container}>

            </div>
            <div className={styles.last__line}>
                <p className={styles.add_task}>+ Добавить задачу</p>
                <Image className={styles.trash_icon} src={TrashIcon} alt='trash can icon'/>
            </div>
        </div>
    )
}

export default TodoPrototype;