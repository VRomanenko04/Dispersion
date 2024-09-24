'use client';
import React from 'react';
import styles from './FormPopup.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
    isOpen: boolean
    isSend: boolean | undefined
}

const FormPopup = ({ isOpen, isSend }: Props) => {
    return (
        <AnimatePresence>
            <motion.div 
                className={styles.container}
                initial={{top: -100}}
                animate={isOpen ? {top: 30} : {top: -100}}
            >
                <p className={`${!isSend ? styles.error : styles.text}`}>{isSend ? 'Your form has been send succesfully' : 'Something wrong...'}</p>
            </motion.div>
        </AnimatePresence>
    )
}

export default FormPopup;