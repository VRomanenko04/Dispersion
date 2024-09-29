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
            {isOpen && (
                <motion.div 
                    className={styles.container}
                    initial={{ top: -100 }}
                    animate={{ top: 30 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                >
                    <p className={`${!isSend ? styles.error : styles.text}`}>
                        {isSend ? 'Your form has been send successfully' : 'Something goes wrong...'}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default FormPopup;