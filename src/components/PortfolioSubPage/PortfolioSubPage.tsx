import React from 'react';
import styles from './PortfolioSubPage.module.scss';
import { motion } from 'framer-motion';

type PortfolioProps = {
    isActive: boolean
}

const PortfolioSubPage = ({ isActive }: PortfolioProps) => {
    return (
        <motion.section
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={isActive && { opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
        >
            <div className={styles.container}>
                <section className={styles.aboutus}>
                    <article>
                        <h6 className={styles.question__first}>Who we are?</h6>
                        <p className={styles.answer}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, dignissimos fuga, hic facere vero ad temporibus ratione quisquam voluptatibus quae eligendi praesentium repellat nesciunt! Quisquam dolorem totam dolore quas iste!</p>
                    </article>
                    <article>
                        <h6 className={styles.question__second}>Why choosing us?</h6>
                        <p className={styles.answer}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, molestiae? Beatae, nam est quisquam aspernatur sunt pariatur. Et nisi aperiam inventore repellat, cumque quam cupiditate accusamus vitae veniam ut alias in tenetur eaque non minima, ducimus magni voluptatibus delectus natus sint repudiandae?</p>
                    </article>
                </section>
                {/* Slider component */}
            </div>
        </motion.section>
    )
}

export default PortfolioSubPage;