'use client';
import React from 'react';
import styles from './PortfolioSubPage.module.scss';
import { motion } from 'framer-motion';
import Slider from '../Slider/Slider';
import { useMediaQuery } from 'react-responsive';
import { StaticImageData } from 'next/image';
import DropDownPortfolio from '../DropDownPortfolio/DropDownPortfolio';

import ImageSpaceDev1 from '@/assets/SD1.webp';
import ImageSpaceDev2 from '@/assets/SD2.webp';
import ImageSpaceDev3 from '@/assets/SD3.webp';
import ImageSpaceDev4 from '@/assets/SD4.webp';
import ImageEtalon1 from '@/assets/ETAL1.webp';
import ImageEtalon2 from '@/assets/ETAL2.webp';
import ImageEtalon3 from '@/assets/ETAL3.webp';
import ImageEtalon4 from '@/assets/ETATL4.webp';
import ImageUCanPower1 from '@/assets/UCP1.webp';
import ImageUCanPower2 from '@/assets/UCP2.webp';
import ImageUCanPower3 from '@/assets/UCP3.webp';
import ImageUCanPower4 from '@/assets/UCP4.webp';


type PortfolioProps = {
    isActive: boolean
}

export interface SlidesObj {
    image1: StaticImageData;
    image2: StaticImageData;
    image3: StaticImageData;
    image4: StaticImageData;
    description: string;
}

const slides = [
    {
        image1: ImageSpaceDev1,
        image2: ImageSpaceDev2,
        image3: ImageSpaceDev3,
        image4: ImageSpaceDev4,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi sed nobis tempora error, sunt quibusdam libero, aliquid corporis, dolorum laborum nisi ipsa atque veritatis asperiores assumenda pariatur porro consequuntur inventore omnis praesentium voluptate sit consequatur. Quod placeat asperiores inventore?'
    },
    {
        image1: ImageEtalon1,
        image2: ImageEtalon2,
        image3: ImageEtalon3,
        image4: ImageEtalon4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reiciendis eos, aut quis ipsa dicta in nobis aspernatur doloribus architecto voluptas exercitationem facere amet! Neque vel aspernatur repudiandae sint fuga cupiditate, eius officia adipisci recusandae corporis saepe eaque dicta sit, pariatur voluptatem atque debitis. Totam tempore quo perspiciatis commodi quae.'
    },
    {
        image1: ImageUCanPower1,
        image2: ImageUCanPower2,
        image3: ImageUCanPower3,
        image4: ImageUCanPower4,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis commodi sed nobis tempora error, sunt quibusdam libero, aliquid corporis, dolorum laborum nisi ipsa atque veritatis asperiores assumenda pariatur porro consequuntur inventore omnis praesentium voluptate sit consequatur. Quod placeat asperiores inventore?'
    }
]

const PortfolioSubPage = ({ isActive }: PortfolioProps) => {
    const isMobile = useMediaQuery({ query: '(max-width: 800px)'});

    return (
        <motion.section
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={isActive && { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            {!isMobile ? (
                <div className={styles.container}>
                    <section className={styles.aboutus}>
                        <article>
                            <h6 className={styles.question__first}>Who we are?</h6>
                            <p className={styles.answer}>We are a young and ambitious team of professionals in design and web development. Using the most progressive technologies, we create innovative solutions that help businesses stand out in the market. We offer cost-effective solutions that enable efficient budget management. Currently, we support dozens of projects and have successfully completed over 100 design projects. Our passion for quality and attention to detail allow us to achieve outstanding results and build long-term relationships with our clients.</p>
                        </article>
                    </section>
                    <Slider slides={slides}/>
                </div>
            ) : (
                <div className={styles.container}>
                    <section className={styles.aboutus}>
                        <article className={styles.article}>
                            <h6 className={styles.question__first}>Who we are?</h6>
                            <p className={styles.answer}>We are a young and ambitious team of professionals in design and web development. Using the most progressive technologies, we create innovative solutions that help businesses stand out in the market. We offer cost-effective solutions that enable efficient budget management. Currently, we support dozens of projects and have successfully completed over 100 design projects. Our passion for quality and attention to detail allow us to achieve outstanding results and build long-term relationships with our clients.</p>
                        </article>
                    </section>
                    <DropDownPortfolio slides={slides}/>
                </div>
            )}
        </motion.section>
    )
}

export default PortfolioSubPage;