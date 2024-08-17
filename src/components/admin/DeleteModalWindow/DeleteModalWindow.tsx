'use client'
import React from 'react';
import styles from './DeleteModalWindow.module.scss';

type DeleteModalWindowProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    deleteFunction?: () => void
}

const DeleteModalWindow = ({ isOpen, setIsOpen, deleteFunction }: DeleteModalWindowProps) => {
    const modalClass = `${styles.modal} ${isOpen && styles.modal_open}`
    const backgroundClass = `${styles.wrapper} ${isOpen && styles.wrapper_open}`

    return (
        <div className={backgroundClass}>
            <div className={modalClass}>
                <h6 className={styles.title}>Вы уверены?</h6>
                <section className={styles.btns}>
                    <button className={styles.confirm__btn} onClick={deleteFunction}>Да, удалить</button>
                    <button className={styles.dicline__btn} onClick={() => setIsOpen(false)}>Галя отмена</button>
                </section>
            </div>
        </div>
    )
}

export default DeleteModalWindow;