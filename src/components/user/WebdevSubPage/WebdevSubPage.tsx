import React from 'react';
import styles from './WebdevSubPage.module.scss';
import UiSubPage from '../UiSubPage/UiSubPage';
import { motion } from 'framer-motion';
import BasicSlide1 from '@/assets/Basic1.webp';
import BasicSlide2 from '@/assets/Basic2.webp';
import BasicSlide3 from '@/assets/Basic3.webp';
import Individual1 from '@/assets/Individual1.webp';
import Individual2 from '@/assets/Individual2.webp';
import Individual3 from '@/assets/Individual3.webp';
import Personalized1 from '@/assets/Personalized1.webp';
import Personalized2 from '@/assets/Personalized2.webp';
import Personalized3 from '@/assets/Personalized3.webp';

type WebDevProps = {
    isActive: boolean
}

const Slides = {
    basic: [BasicSlide1, BasicSlide2, BasicSlide3],
    individual: [Individual1, Individual2, Individual3],
    peronalized: [Personalized1, Personalized2, Personalized3]
}

const WebdevSubPage = ({ isActive }: WebDevProps) => {
    return (
        <motion.section 
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={isActive && { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <UiSubPage 
                isStandart={true}
                title='Basic website'
                text='Quick creation of simple websites for a specific task. For example, a restaurant landing page or a business card website for your company, etc.'
                link='/contact'
                color="blue"
                slides={Slides.basic}
            />
            <UiSubPage 
                isStandart={false}
                title='Individual website'
                text='The most popular option.  A website with an individual design for you and thoughtful business logic. For example, online stores, booking sites, etc.'
                link='/contact'
                color='blue'
                slides={Slides.individual}
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text='A completely unique web application tailored to your specific needs of any complexity. For example, an educational platform application or a website with a custom SRM system, etc.'
                link='/contact'
                color='blue'
                slides={Slides.peronalized}
            />
        </motion.section>
    )
}

export default WebdevSubPage;