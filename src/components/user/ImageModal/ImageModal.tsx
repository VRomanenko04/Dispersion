'use client'
import React from 'react';
import styles from './ImageModal.module.scss';
import Image, { StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';


type ImageModalProps = {
    image: StaticImageData
    imageDescription: string
    onClose: () => void;
    isOpen: boolean
}

const ImageModal = ({ image, imageDescription, onClose, isOpen }: ImageModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={`${styles.modal__wrapper} ${isOpen ? styles.active__wrapper : ''}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={`${styles.modal__container} ${isOpen ? styles.active__container : ''}`}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className={styles.close__modal} onClick={onClose}>+</button>
                        <Image className={styles.image} src={image} alt={imageDescription}/>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ImageModal;