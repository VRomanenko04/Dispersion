import React from 'react';
import styles from './WebdevSubPage.module.scss';
import UiSubPage from '../UiSubPage/UiSubPage';
import { motion } from 'framer-motion';

type WebDevProps = {
    isActive: boolean
}

const WebdevSubPage = ({ isActive }: WebDevProps) => {
    return (
        <motion.section 
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={isActive && { opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
        >
            <UiSubPage 
                isStandart={true}
                title='Basic website'
                text='Choose one of our templates, and receive your website in the shortest terms.'
                link='/'
                color="blue"
            />
            <UiSubPage 
                isStandart={false}
                title='Individual website'
                text= {<>Get a website which cover your needs <br /> + more customization options</>}
                link='/'
                color='blue'
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text='Absolutely unique website which would make you pop up around your competitors, more functious, more'
                link='/'
                color='blue'
            />
        </motion.section>
    )
}

export default WebdevSubPage;