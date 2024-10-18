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
        description: 'SPACEDEV, an educational web application designed to teach programming and IT management. Built on NEXT.js and Node.js, with Firebase as the BaaS solution, the platform offers a seamless learning experience. This project is an example of a personal approach.  It uses a large number of non-standard solutions, complex animations and 3D objects. And also a very wide functionality in the form of authorization, online payment, admin panel and close contact between backend and frontend applications. Its interactive features and modern design engage users, making complex concepts accessible. This project not only empowers individuals to enhance their tech skills but also positions SPACEDEV as a valuable resource in the education sector.'
    },
    {
        image1: ImageEtalon1,
        image2: ImageEtalon2,
        image3: ImageEtalon3,
        image4: ImageEtalon4,
        description: 'A high-converting sales website for the ETALON residential complex, featuring an intuitive interface that allows users to select layouts easily. Built on NEXT.js and Node.js, the site combines fast performance with a modern design, enhancing user experience. This project not only showcases the residential offerings effectively but also drives significant business results, helping ETALON achieve its sales goals and strengthen its market presence.'
    },
    {
        image1: ImageUCanPower1,
        image2: ImageUCanPower2,
        image3: ImageUCanPower3,
        image4: ImageUCanPower4,
        description: "UCan Power, a budget-friendly e-commerce platform for a company specializing in high-capacity batteries and inverters. Utilizing NEXT.js and Node.js, the project was completed within a tight deadline and limited budget, directly addressing the company’s business needs. The site combines a user-friendly interface with efficient functionality, enabling seamless product browsing and choosing products. UCan Power effectively supports the company's growth and market competitiveness while maximizing value for both the client and their customers."
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