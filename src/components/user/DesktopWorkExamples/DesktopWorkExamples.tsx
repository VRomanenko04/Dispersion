'use client'
import React, { useRef } from 'react';
import styles from './workExamples.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ImageSpaceDev from '@/assets/topImage1.webp';
import ImageForum from '@/assets/topImage2.webp';
import ImageVFoolring from '@/assets/topImage3.webp';
import ImageXisk from '@/assets/topImage4.webp';
import ImageUCanPower from '@/assets/topImage5.webp';
import ImageUCanPower2 from '@/assets/topImage6.webp';
import ImageAnimation from '@/assets/topImage7.webp';
import ImageCrux from '@/assets/topImage8.webp';
import ImageFonts from '@/assets/topImage9.webp';
import ImageEtalon from '@/assets/topImage10.webp';

const DesktopWorkExamples = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.3 1", "1.1 1"]
    });

    const moveDown = useTransform(scrollYProgress, [0, 1], [-100, 50]);
    const moveUp = useTransform(scrollYProgress, [0, 1], [100, -50]);

    return (
        <section className={styles.wrapper} ref={ref}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.flex__end}
                    style={{ y: moveDown }}
                >
                    <Image src={ImageForum} alt='Forum image' className={styles.img__sceleton} placeholder='blur'/>
                    <Image src={ImageCrux} alt='Crux image' className={styles.img__sceleton} placeholder='blur'/>
                </motion.div>
                <motion.div 
                    className={styles.flex__start}
                    style={{ y: moveUp }}
                >
                    <Image src={ImageXisk} alt='Xisk image' className={styles.img__sceleton} placeholder='blur'/>
                    <Image src={ImageFonts} alt='Fonts image' className={styles.img__sceleton} placeholder='blur'/>
                </motion.div>
                <motion.div 
                    className={styles.flex__end}
                    style={{ y: moveDown }}
                >
                    <Image src={ImageUCanPower} alt='UCanPower image' className={styles.img__sceleton} placeholder='blur'/>
                    <Image src={ImageEtalon} alt='Etalon image' className={styles.img__sceleton} placeholder='blur'/>
                </motion.div>
                <motion.div 
                    className={styles.flex__start}
                    style={{ y: moveUp }}
                >
                    <Image src={ImageUCanPower2} alt='UCanPower2 image' className={styles.img__sceleton} placeholder='blur'/>
                    <Image src={ImageSpaceDev} alt='SpaceDev image' className={styles.img__sceleton} placeholder='blur'/>
                </motion.div>
                <motion.div 
                    className={styles.flex__end}
                    style={{ y: moveDown }}
                >
                    <Image src={ImageAnimation} alt='Animation image' className={styles.img__sceleton} placeholder='blur'/>
                    <Image src={ImageVFoolring} alt='VFoolring image' className={styles.img__sceleton} placeholder='blur'/>
                </motion.div>
            </div>
        </section>
    )
}

export default DesktopWorkExamples;