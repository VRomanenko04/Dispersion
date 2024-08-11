'use client'
import React, { useState } from 'react';
import styles from './UiDropDownList.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Control, Controller } from 'react-hook-form';
import { ContactFormType } from '../ContactForm/ContactForm';

type DropDownListProps = {
    valuesList: string[]
    defaultValue: string
    controller: Control<ContactFormType>
    fieldName: "email" | "message" | "fullName" | "projectType" | "howToContact" | "contactDetails" | "isTermsAgree"
}

const UiDropDownList = ({ valuesList, controller, fieldName, defaultValue }: DropDownListProps) => {
const [isChangeble, setIsChangeble] = useState(false);

    return (
        <Controller 
            control={controller}
            name={fieldName}
            defaultValue={defaultValue}
            render={({ field }) => (
                <div className={`${styles.dropdown__container} ${isChangeble ? styles.dropdown__open : ''}`}>
                    <div className={`${styles.dropdown__btn} ${isChangeble ? styles.dropdown__btn__open : ''}`} onClick={() => setIsChangeble((prev) => !prev)}>
                        {field.value}
                        <p className={styles.arrow}>&gt;</p>
                    </div>
                    <AnimatePresence>
                        {isChangeble && (
                            <motion.ul 
                                className={styles.list}
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{
                                    duration: 0.1
                                }}
                            >
                                {valuesList.map((value) => (
                                    <li 
                                        key={value} 
                                        onClick={() => {
                                            field.onChange(value)
                                            setIsChangeble(false)
                                        }}
                                        style={value === field.value ? {display: 'none'} : undefined}
                                    >
                                        {value}
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            )}
        />
    )
}

export default UiDropDownList;