import React from 'react';
import styles from './DesignSubPage.module.scss';
import UiSubPage from '../UiSubPage/UiSubPage';
import { motion } from 'framer-motion';

type DesignProps = {
    isActive: boolean
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
            />
            <UiSubPage 
                isStandart={false}
                title='Socials design'
                text='Get unique design  of various complexity for your business or personal projects to stand out among competitors!  '
                link='/contact'
                color='magenta'
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text='Custom project - perfect for someone who want have more or less.'
                link='/contact'
                color='magenta'
            />
        </motion.section>
    )
}

export default DesignSubPage;