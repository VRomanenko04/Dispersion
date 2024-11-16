import React from 'react';
import styles from './DesignSubPage.module.scss';
import UiSubPage from '../UiSubPage/UiSubPage';
import { motion } from 'framer-motion';
import Guidelines1 from '@/assets/Guidelines1.webp';
import Guidelines2 from '@/assets/Guidelines2.webp';
import Guidelines3 from '@/assets/Guidelines3.webp';
import Socials1 from '@/assets/Socials1.webp';
import Socials2 from '@/assets/Socials2.webp';
import Socials3 from '@/assets/Socials3.webp';
import Personalized1 from '@/assets/DesignPersonal1.webp';
import Personalized2 from '@/assets/DesignPersonal2.webp';
import Personalized3 from '@/assets/DesignPersonal3.webp';

type DesignProps = {
    isActive: boolean
}

const Slides = {
    guidelines: [Guidelines1, Guidelines2, Guidelines3],
    socials: [Socials1, Socials2, Socials3],
    personalized: [Personalized1, Personalized2, Personalized3]
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
                slides={Slides.guidelines}
            />
            <UiSubPage 
                isStandart={false}
                title='Socials design'
                text='Get unique design  of various complexity for your business or personal projects to stand out among competitors!  '
                link='/contact'
                color='magenta'
                slides={Slides.socials}
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text='Custom project - perfect for someone who want have more or less.'
                link='/contact'
                color='magenta'
                slides={Slides.personalized}
            />
        </motion.section>
    )
}

export default DesignSubPage;