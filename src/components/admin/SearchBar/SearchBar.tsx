'use client';
import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import TrashIcon from '@/assets/trash-icon.svg';
import SearchInput from '../SearchInput/SearchInput';
import Image from 'next/image';
import UiPopUp from '../UiPopUp/UiPopUp';
import DeleteModalWindow from '../DeleteModalWindow/DeleteModalWindow';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { AddTaskList } from '@/services/AddTaskList';

type Props = {
    onChangeFunc?: (value: string) => void
}

const SearchBar = ({ onChangeFunc }: Props) => {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleDeleteTasks = () => {
        console.log('Delete');
    }

    const handleCreateTask = (projectName: string) => {
        onAuthStateChanged(auth, async (user) => {
            if(user?.email) {
                await AddTaskList(user?.email, projectName).then(() => {
                    setIsCreateOpen(false);
                }).finally(() => {
                    setTimeout(() => {
                        window.location.reload();
                    }, 500)
                });
            }
        })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <section className={styles.container}>
                <SearchInput onChangeFunc={onChangeFunc}/>
                <div className={styles.buttons}>
                    <button className={styles.plus} onClick={() => setIsCreateOpen(true)}>+</button>
                    <button className={styles.trash__btn} onClick={() => setIsDeleteOpen(true)}><Image className={styles.trash__icon} src={TrashIcon} alt='trash can icon'/></button>
                </div>
            </section>
            <UiPopUp isOpen={isCreateOpen} setIsOpen={setIsCreateOpen}>
                <div className={styles.modal__container}>
                    <h6>Добавить новую задачу</h6>
                    <div className={styles.input__container}>
                        <label htmlFor="">Название проекта</label>
                        <input value={inputValue} onChange={handleInputChange} type="text" />
                    </div>
                    <button className={styles.modal__btn} onClick={() => handleCreateTask(inputValue)}>Добавить</button>
                </div>
            </UiPopUp>
            <DeleteModalWindow isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} deleteFunction={handleDeleteTasks}/>
        </>
    )
}

export default SearchBar;