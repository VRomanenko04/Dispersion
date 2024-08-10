'use client'
import React, { useEffect } from 'react';
import styles from './AuthForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginAdmin } from '@/services/AdminLogin';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { useRouter } from 'next/navigation';


type LoginFormType = {
    username: string
    password: string
}


const AuthForm = () => {
    const { register, handleSubmit } = useForm<LoginFormType>();

    const router = useRouter();

    const submitLoginForm: SubmitHandler<LoginFormType> = async (data) => {
        console.log(data)
        await LoginAdmin(data.username, data.password).then(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log('User has been logined')
                    router.push('/general');
                }
            });
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User has been logined')
                router.push('/general');
            }
        });
    }, []);

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(submitLoginForm)}>
                <div className={styles.input__container}>
                    <label htmlFor="">Username</label>
                    <input type="text" {...register('username', {
                        required: 'This field is required'
                    })}/>
                </div>
                <div className={styles.input__container}>
                    <label htmlFor="">Password</label>
                    <input type="password" {...register('password', {
                        required: 'This field is required'
                    })}/>
                </div>
                <button className={styles.btn} type='submit'>Log in</button>
            </form>
        </section>
    )
}

export default AuthForm;