'use client';
import React from 'react';
import styles from './CompleteModalWindow.module.scss';
import UiPopUp from '../UiPopUp/UiPopUp';

type CompleteModalWindowProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    completeFunction: () => Promise<void>
}

const CompleteModalWindow = ({ isOpen, setIsOpen, completeFunction }: CompleteModalWindowProps) => {
    return (
        <UiPopUp isOpen={isOpen} setIsOpen={setIsOpen}>
            <h6 className={styles.title}>Вы уверены?</h6>
            <section className={styles.btns}>
                <button className={styles.confirm__btn} onClick={completeFunction}>Да, завершить</button>
                <button className={styles.dicline__btn} onClick={() => setIsOpen(false)}>Отмена</button>
            </section>
        </UiPopUp>
    )
}

export default CompleteModalWindow;