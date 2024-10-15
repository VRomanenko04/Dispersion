import React from 'react';
import styles from './DesignSubPage.module.scss';
import UiSubPage from '../UiSubPage/UiSubPage';
import { motion } from 'framer-motion';
import BasicSlide1 from '@/assets/basic_website1.png';
import BasicSlide2 from '@/assets/basic_website2.png';
import BasicSlide3 from '@/assets/basic_website3.png';

type DesignProps = {
    isActive: boolean
}

const Slides = {
    basic: [BasicSlide2, BasicSlide1, BasicSlide3],
}

const DesignSubPage = ({ isActive }: DesignProps) => {
    return (
        <motion.section 
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={isActive && { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <UiSubPage 
                isStandart={true}
                title='Design guidelines'
                text='Get  universal instruction of your visuals so every time you decided to hire a designer he can follow them'
                link='/contact'
                color='magenta'
                slides={Slides.basic}
            />
            <UiSubPage 
                isStandart={false}
                title='Socials design'
                text='Get unique design  of various complexity for your business or personal projects to stand out among competitors!  '
                link='/contact'
                color='magenta'
                slides={Slides.basic}
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text='Custom project - perfect for someone who want have more or less.'
                link='/contact'
                color='magenta'
                slides={Slides.basic}
            />
        </motion.section>
    )
}

export default DesignSubPage;