'use client'
import React, { useState } from 'react';
import styles from './ContactsHelper.module.scss';
import Image from 'next/image';
import InformationIcon from '@/assets/Information_icon.svg';
import { motion } from 'framer-motion';


const ContactsHelper = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.container}>
            <Image 
                className={styles.image} 
                src={InformationIcon} 
                alt='Information button'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <motion.div 
                className={styles.comment__container}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <div className={styles.triangle}></div>
                <div className={styles.comment__block}>
                    <p>Like @something</p>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactsHelper;