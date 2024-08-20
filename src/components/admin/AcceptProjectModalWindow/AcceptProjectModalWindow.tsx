'use client';
import React from 'react';
import styles from './AcceptProjectModalWindow.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import UiPopUp from '../UiPopUp/UiPopUp';

type AcceptProjectModalWindowProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    acceptFunction: (projectName: string, timeForProject: number) => Promise<void>
}

type AcceptProjectFormType = {
    projectName: string
    timeForProject: number
}

const AcceptProjectModalWindow = ({ isOpen, setIsOpen, acceptFunction }: AcceptProjectModalWindowProps) => {
    const { register, handleSubmit } = useForm<AcceptProjectFormType>();

    const acceptProject: SubmitHandler<AcceptProjectFormType> = (data) => {
        acceptFunction(data.projectName, data.timeForProject);
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
                            required: 'This field is required',
                            valueAsNumber: true,
                        })}/>
                    </div>
                    <button className={styles.btn} type='submit'>Принять</button>
                </form>
            </div>
        </UiPopUp>
    )
}

export default AcceptProjectModalWindow;