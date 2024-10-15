import React from 'react';
import styles from './WebdevSubPage.module.scss';
import UiSubPage from '../UiSubPage/UiSubPage';
import { motion } from 'framer-motion';
import BasicSlide1 from '@/assets/basic_website1.png';
import BasicSlide2 from '@/assets/basic_website2.png';
import BasicSlide3 from '@/assets/basic_website3.png';

type WebDevProps = {
    isActive: boolean
}

const Slides = {
    basic: [BasicSlide2, BasicSlide1, BasicSlide3],
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
                text='Choose one of our templates, and receive your website in the shortest terms.'
                link='/contact'
                color="blue"
                slides={Slides.basic}
            />
            <UiSubPage 
                isStandart={false}
                title='Individual website'
                text= {<>Get a website which cover your needs <br /> + more customization options</>}
                link='/contact'
                color='blue'
                slides={Slides.basic}
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text='Absolutely unique website which would make you pop up around your competitors, more functious, more'
                link='/contact'
                color='blue'
                slides={Slides.basic}
            />
        </motion.section>
    )
}

export default WebdevSubPage;