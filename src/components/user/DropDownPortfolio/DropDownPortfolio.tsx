'use client';
import React, { useEffect, useRef, useState } from 'react';
import { SlidesObj } from '../PortfolioSubPage/PortfolioSubPage';
import styles from './DropDownPortfolio.module.scss';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type DropDownPortfolioProps = {
    slides: SlidesObj[]
}

const ProjectsList = ['SPACEDEV', 'ETALON', 'UCanPower'];

const DropDownPortfolio = ({ slides }: DropDownPortfolioProps) => {
    const [currentProject, setCurrentProject] = useState(0);
    const [isChangeble, setIsChangeble] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsChangeble(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className={styles.container}>
            <div ref={dropdownRef} className={`${styles.dropdown__container} ${isChangeble ? styles.dropdown__open : ''}`}>
                <div className={`${styles.dropdown__btn} ${isChangeble ? styles.dropdown__btn__open : ''}`} onClick={() => setIsChangeble((prev) => !prev)}>
                    {ProjectsList[currentProject]}
                    <p className={styles.arrow}>&gt;</p>
                </div>
                <AnimatePresence>
                    {isChangeble && (
                        <motion.ul
                            className={styles.list}
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{
                                duration: 0.1
                            }}
                        >
                            {ProjectsList.map((project, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => {
                                        setCurrentProject(index)
                                        setIsChangeble(false);
                                    }} 
                                    style={project === ProjectsList[currentProject] ? {display: 'none'} : undefined}
                                >
                                    {project}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
            <div className={styles.projects__list}>
                {slides[currentProject] && (
                    <>
                        <Image className={styles.image} src={slides[currentProject].image1} alt={slides[currentProject].description} placeholder='blur'/>
                        <Image className={styles.image} src={slides[currentProject].image2} alt={slides[currentProject].description} placeholder='blur'/>
                        <Image className={styles.image} src={slides[currentProject].image3} alt={slides[currentProject].description} placeholder='blur'/>
                        <Image className={styles.image} src={slides[currentProject].image4} alt={slides[currentProject].description} placeholder='blur'/>
                    </>
                )}
            </div>
        </section>
    )
}

export default DropDownPortfolio;