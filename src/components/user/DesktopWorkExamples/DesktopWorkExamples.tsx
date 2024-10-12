'use client'
import React, { useRef } from 'react';
import styles from './workExamples.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const DesktopWorkExamples = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.3 1", "1.1 1"]
    });

    const moveDown = useTransform(scrollYProgress, [0, 1], [-100, 50]);
    const moveUp = useTransform(scrollYProgress, [0, 1], [100, -50]);

    return (
        <section className={styles.wrapper} ref={ref}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.flex__end}
                    style={{ y: moveDown }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
                <motion.div 
                    className={styles.flex__start}
                    style={{ y: moveUp }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
                <motion.div 
                    className={styles.flex__end}
                    style={{ y: moveDown }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
                <motion.div 
                    className={styles.flex__start}
                    style={{ y: moveUp }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
                <motion.div 
                    className={styles.flex__end}
                    style={{ y: moveDown }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
            </div>
        </section>
    )
}

export default DesktopWorkExamples;