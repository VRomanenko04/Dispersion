'use client'
import React, { useState } from 'react';
import styles from './TodoPrototype.module.scss';
import { TodoProjectObject } from '@/app/(admin)/todo/page';
import Image from 'next/image';
import TrashIcon from '@/assets/trash-icon.svg';
import Checkbox from '../Checkbox/Checkbox';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { CreateTask } from '@/services/CreateTask';
import UiPopUp from '../UiPopUp/UiPopUp';


const TodoPrototype = ({ orderCode, projectName }: TodoProjectObject) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleCreateTask = async (projectName: string, task: string) => {
        onAuthStateChanged(auth, async (user) => {
            await CreateTask(user?.email?.split('.')[0], projectName, task).then(() => {
                setIsCreateOpen(false);
                window.location.reload();
            })
        });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <>
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
                <p className={styles.add_task} onClick={() => setIsCreateOpen(true)}>+ Добавить задачу</p>
                <Image className={styles.trash_icon} src={TrashIcon} alt='trash can icon'/>
            </div>
        </div>
        <UiPopUp isOpen={isCreateOpen} setIsOpen={setIsCreateOpen}>
            <div className={styles.modal__container}>
                <h6>Добавить новую задачу</h6>
                <div className={styles.input__container}>
                    <label htmlFor="">Текст задачи</label>
                    <input value={inputValue} onChange={handleInputChange} type="text" />
                </div>
                <button className={styles.modal__btn} onClick={() => handleCreateTask(projectName, inputValue)}>Добавить</button>
            </div>
        </UiPopUp>
        </>
    )
}

export default TodoPrototype;