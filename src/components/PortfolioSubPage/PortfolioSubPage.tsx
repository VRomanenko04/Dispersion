import React from 'react';
import styles from './PortfolioSubPage.module.scss';
import { motion } from 'framer-motion';
import Slider from '../Slider/Slider';

type PortfolioProps = {
    isActive: boolean
}

const PortfolioSubPage = ({ isActive }: PortfolioProps) => {
    return (
        <motion.section
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={isActive && { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <div className={styles.container}>
                <section className={styles.aboutus}>
                    <article>
                        <h6 className={styles.question__first}>Who we are?</h6>
                        <p className={styles.answer}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, dignissimos fuga, hic facere vero ad temporibus ratione quisquam voluptatibus quae eligendi praesentium repellat nesciunt! Quisquam dolorem totam dolore quas iste!</p>
                    </article>
                </section>
                <Slider />
            </div>
        </motion.section>
    )
}

export default PortfolioSubPage;