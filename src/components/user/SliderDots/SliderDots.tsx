import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import styles from './SliderDots.module.scss';

type SliderDotsProps = {
    imgIndex: number
}

const dots = ['', '', ''];

const SliderDots = ({ imgIndex }: SliderDotsProps) => {
    return (
        <section className={styles.container}>
            <AnimatePresence>
                {dots.map((_, index) => (
                    <motion.div
                        key={index}
                        className={styles.dot}
                        animate={index === imgIndex ? { scale: 1.05, backgroundColor: '#545455'} : { scale: 1, backgroundColor: '#d7d8d9'}}
                        initial={{ scale: 1, backgroundColor: '#d7d8d9'}}
                    ></motion.div>
                ))}
            </AnimatePresence>
        </section>
    )
}

export default SliderDots;