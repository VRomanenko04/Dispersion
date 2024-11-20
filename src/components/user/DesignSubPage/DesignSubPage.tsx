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
                text={<>Get your universal instruction of your visuals so every time you hire a designer he can follow them <br /> <br />Ideal for start ups, or someone who want refresh their appearance.</>}
                link='/contact'
                color='magenta'
                slides={Slides.guidelines}
            />
            <UiSubPage 
                isStandart={false}
                title='Socials design'
                text={<>Get vibrant designs that suits your business or personal socials to stand out among competitors! <br /> <br /> Perfect for advertisements, headers, posts, and more.</>}
                link='/contact'
                color='magenta'
                slides={Slides.socials}
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text={<>Perfect for specific design projects. <br /><br /> Ideal for packaging, posters, flyers, 2D/3D visualizations, and more.</>}
                link='/contact'
                color='magenta'
                slides={Slides.personalized}
            />
        </motion.section>
    )
}

export default DesignSubPage;