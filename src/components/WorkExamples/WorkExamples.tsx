'use client'
import React, { useRef } from 'react';
import styles from './workExamples.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const WorkExamples = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.3 1", "1.3 1"]
    });

    const moveDown = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const moveUp = useTransform(scrollYProgress, [0, 1], [-150, 0]);

    return (
        <section className={styles.wrapper}>
            <div className={styles.container} ref={ref}>
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