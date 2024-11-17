'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactsHelper.module.scss';
import Image from 'next/image';
import InformationIcon from '@/assets/Information_icon.svg';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


const ContactsHelper = () => {
    const [isHovered, setIsHovered] = useState(false);
    const commentRef = useRef<HTMLDivElement>(null);

    const isMobile = useMediaQuery({query: "(max-width : 800px)"});

    const handleClick = () => {
        setIsHovered(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (commentRef.current && !commentRef.current.contains(event.target as Node)) {
                setIsHovered(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container}>
            {isMobile ? (
                <Image 
                    className={styles.image} 
                    src={InformationIcon} 
                    alt='Information button'
                    onClick={handleClick}
                />
            ) : (
                <Image 
                    className={styles.image} 
                    src={InformationIcon} 
                    alt='Information button'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            )}
            <motion.div 
                ref={commentRef}
                className={`${styles.comment__container} ${isHovered ? styles.show : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={ !isMobile ? { duration: 0.2, delay: 0.1 } : { duration: 0.2 }}
            >
                <div className={styles.triangle}></div>
                <div className={styles.comment__block}>
                    <p>Please write your phone number to contact by WhatsApp or @username to contact by Messenger</p>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactsHelper;