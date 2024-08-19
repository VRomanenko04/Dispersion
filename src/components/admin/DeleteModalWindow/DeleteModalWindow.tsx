'use client'
import React from 'react';
import styles from './DeleteModalWindow.module.scss';
import UiPopUp from '../UiPopUp/UiPopUp';

type DeleteModalWindowProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    deleteFunction: () => void
}

const DeleteModalWindow = ({ isOpen, setIsOpen, deleteFunction }: DeleteModalWindowProps) => {
    return (
        <UiPopUp isOpen={isOpen} setIsOpen={setIsOpen}>
            <h6 className={styles.title}>Вы уверены?</h6>
            <section className={styles.btns}>
                <button className={styles.confirm__btn} onClick={deleteFunction}>Да, удалить</button>
                <button className={styles.dicline__btn} onClick={() => setIsOpen(false)}>Галя отмена</button>
            </section>
        </UiPopUp>
    )
}

export default DeleteModalWindow;