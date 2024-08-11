'use client'
import React from 'react';
import styles from './UiCheckbox.module.scss';
import Image from 'next/image';
import Checkmark from '@/assets/icons8-checkmark.svg';
import { Control, Controller } from 'react-hook-form';
import { ContactFormType } from '../ContactForm/ContactForm';

type Props = {
    controller: Control<ContactFormType>
}

const UiCheckbox = ({ controller }: Props) => {
    return (
        <Controller 
            control={controller}
            name='isTermsAgree'
            defaultValue={false}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
                <div 
                className={`${styles.checkbox__container} ${field.value ? styles.checkbox__agree : ''}`}
                onClick={() => field.onChange(!field.value)}
                >
                    {field.value && <Image className={styles.checkmark} src={Checkmark} alt='Check mark'/>}
                </div>
            )}
        />
    )
}

export default UiCheckbox;