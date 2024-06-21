'use client'
import React, { useRef } from 'react';
import styles from './workExamples.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const WorkExamples = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.3 1", "1.6 1"]
    });

    const moveDown = useTransform(scrollYProgress, [0, 1], [150, -50]);
    const moveUp = useTransform(scrollYProgress, [0, 1], [-150, 50]);

    return (
        <section className={styles.wrapper} ref={ref}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.flex__start}
                    style={{ y: moveDown }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
                <motion.div 
                    className={styles.flex__end}
                    style={{ y: moveUp }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
                <motion.div 
                    className={styles.flex__start}
                    style={{ y: moveDown }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
                <motion.div 
                    className={styles.flex__end}
                    style={{ y: moveUp }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
                <motion.div 
                    className={styles.flex__start}
                    style={{ y: moveDown }}
                >
                    <div className={styles.img__sceleton}></div>
                    <div className={styles.img__sceleton}></div>
                </motion.div>
            </div>
        </section>
    )
}

export default WorkExamples;