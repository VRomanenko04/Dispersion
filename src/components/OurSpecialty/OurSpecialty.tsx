'use client'
import React, { useState } from 'react';
import styles from './ourSpecialty.module.scss';
import { motion } from 'framer-motion';

const emergenceVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const OurSpecialty = () => {
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleViewportEnter = () => {
        if (!hasAnimated) {
            setHasAnimated(true);
        }
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.abilities__up}>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>NextJS</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>TypeScript</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1, duration: 1}} className={styles.semibold}>Website</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1.5, duration: 1}} className={styles.hight}>Individual</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>E-commerce</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>Advertizing</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1, duration: 1}} className={styles.semibold}>Branding</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 0.5, duration: 1}} className={styles.big}>Stylization</motion.span>
            </h2>
            <h2 className={styles.abilities__down}>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1.5, duration: 1}} className={styles.hight}>Optimization</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 0.5, duration: 1}} className={styles.big}>Webdev</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>Landing</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1, duration: 1}} className={styles.semibold}>SEO</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1.5, duration: 1}} className={styles.hight}>Business</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>Logotype</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 1.5, duration: 1}} className={styles.hight}>Social</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>3D Visualization</motion.span>
                <motion.span variants={emergenceVariant} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} onViewportEnter={handleViewportEnter} transition={{delay: 2, duration: 1}} className={styles.regular}>Animation</motion.span>
            </h2>
        </section>
    )
}

export default OurSpecialty;