'use client';
import React from 'react';
import styles from './AcceptProjectModalWindow.module.scss';
import { useForm } from 'react-hook-form';
import UiPopUp from '../UiPopUp/UiPopUp';

type AcceptProjectModalWindowProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AcceptProjectModalWindow = ({ isOpen, setIsOpen }: AcceptProjectModalWindowProps) => {
    const { register, handleSubmit } = useForm();

    const acceptProject = () => {
        console.log('Accepted');
        setIsOpen(false);
        window.location.reload();
    }

    return (
        <UiPopUp isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={styles.container}>
                <h6 className={styles.title}>Принять заказ</h6>
                <form className={styles.form} onSubmit={handleSubmit(acceptProject)}>
                    <div className={styles.input__container}>
                        <label htmlFor="newProjectName">Новое название</label>
                        <input type="text" id='newProjectName' {...register('projectName', {
                            required: 'This field is required'
                        })}/>
                    </div>
                    <div className={styles.input__container}>
                        <label htmlFor="timeForProject">Время выполнения заказа (дней)</label>
                        <input type="number" id='timeForProject' {...register('timeForProject', {
                            required: 'This field is required'
                        })}/>
                    </div>
                    <button className={styles.btn}>Принять</button>
                </form>
            </div>
        </UiPopUp>
    )
}

export default AcceptProjectModalWindow;