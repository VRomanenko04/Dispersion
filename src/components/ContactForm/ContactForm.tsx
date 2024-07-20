'use client'
import Link from 'next/link';
import React from 'react';
import styles from './ContactForm.module.scss';
import UiDropDownList from '../UiDropDownList/UiDropDownList';
import UiCheckbox from '../UiCheckbox/UiCheckbox';
import { SubmitHandler, useForm } from 'react-hook-form';

const ProjectType = ['Website', 'Design project', 'Personalized project'];
const ContactType = ['Email', 'Messenger', 'WhatsApp'];

export type ContactFormType = {
    'fullName': string
    'email': string
    'projectType': string
    'howToContact': string
    'contactDetails'?: string
    'message': string
    'isTermsAgree': boolean
}

const ContactForm = () => {
    const {register, handleSubmit, formState, control, reset, watch} = useForm<ContactFormType>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    });

    const howToContact = watch('howToContact');

    const isFullNameError = formState.errors['fullName']?.message;
    const isEmailError = formState.errors['email']?.message;
    const isContactDetailsError = formState.errors['contactDetails']?.message;
    const isMessageError = formState.errors['email']?.message;
    const isTermsAgreeError = formState.errors['isTermsAgree']?.message;

    const submitForm: SubmitHandler<ContactFormType> = (data) => {
        console.log(data);
        reset();
    }

    return (
        <section className={styles.wrapper}>
            <form className={styles.form__container} onSubmit={handleSubmit(submitForm)}>
                <section className={styles.form__top}>
                    <div className={`${styles.input__container} ${isFullNameError && styles.error__input__container}`}>
                        <div className={styles.label__content}>
                            <label htmlFor="">Full name</label>
                            {isFullNameError && <span className={styles.error}>{isFullNameError}</span>}
                        </div>
                        <input type="text" {...register('fullName', {
                            required: 'This field is required'
                        })}/>
                    </div>
                    <div className={`${styles.input__container} ${isEmailError && styles.error__input__container}`}>
                        <div className={styles.label__content}>
                            <label htmlFor="">Email</label>
                            {isEmailError && <span className={styles.error}>{isEmailError}</span>}
                        </div>
                        <input type="email" {...register('email', {
                            required: 'This field is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email adress"
                            }
                        })}/>
                    </div>
                    <div className={styles.input__container}>
                        <label htmlFor="">Type of proejct</label>
                        <UiDropDownList fieldName='projectType' controller={control} valuesList={ProjectType} defaultValue='Website'/>
                    </div>
                    <div className={styles.input__container}>
                        <label htmlFor="">How to contact you</label>
                        <UiDropDownList fieldName='howToContact' controller={control} valuesList={ContactType} defaultValue='Email'/>
                    </div>
                    {(howToContact === 'Messenger' || howToContact === 'WhatsApp') && (
                        <div className={`${styles.input__container} ${isContactDetailsError && styles.error__input__container}`}> 
                            <div className={styles.label__content}>
                                <label htmlFor="">Your contact details</label>
                                {isContactDetailsError && <span className={styles.error}>{isContactDetailsError}</span>}
                            </div>
                            <input type="text" {...register('contactDetails', {
                                required: 'This field is required'
                            })}/>
                        </div>
                    )}
                </section>
                <section className={`${styles.textarea__container} ${isMessageError && styles.error__textarea__container}`}>
                    <div className={styles.label__content}>
                        <label htmlFor="">Tell a bit about your project  (Name, What it is about e.t.c.)</label>
                        {isMessageError && <span className={styles.error}>{isMessageError}</span>}
                    </div>
                    <textarea {...register('message', {
                            required: 'This field is required'
                    })}/>
                </section>
                <section className={styles.checkbox__container} style={!isTermsAgreeError ? { marginBottom: 18}: undefined}>
                    <div>
                        <UiCheckbox controller={control}/>
                        <label htmlFor="">I agree with <Link href='/' className={styles.link}>terms & services</Link></label>
                    </div>
                    <div>
                        {isTermsAgreeError && <span className={styles.error__checkbox}>{isTermsAgreeError}</span>}
                    </div>
                </section>
                <button className={styles.button} type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;