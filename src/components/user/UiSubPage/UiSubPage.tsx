'use client';
import React from 'react';
import styles from './UiSubPage.module.scss';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Image, { StaticImageData } from 'next/image';
import UiSubPageMobile from '../UiSubPageMobile/UiSubPageMobile';

type UISubProps = {
    isStandart: boolean
    title: string
    text: string | React.ReactNode
    link: string
    color: 'magenta' | 'blue'
    slides: StaticImageData[]
}

const UiSubPage = ({ isStandart, title, text, link, color, slides }: UISubProps) => {
    const isMobile = useMediaQuery({query: '(max-width: 800px)'});

    return (
        <>
            {!isMobile ? (
                isStandart ? (
                    <div className={`${styles.container} ${color === 'blue' ? styles.blue : color === 'magenta' ? styles.magenta : ''}`}>
                        <div className={styles.top__standart}>
                            <Image src={slides[0]} alt='' className={styles.sceleton__big} placeholder='blur'/>
                            <article className={styles.article}>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        </div>
                        <div className={styles.bottom__standart}>
                            <Image src={slides[1]} alt='' className={styles.sceleton__small} placeholder='blur'/>
                            <Image src={slides[2]} alt='' className={styles.sceleton__small} placeholder='blur'/>
                            <Link className={`${styles.link} ${color === 'blue' ? styles.link__blue : color === 'magenta' ? styles.link__magenta : ''}`} href={link}>
                                Continue&gt;
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className={`${styles.container} ${color === "blue" ? styles.blue : color === "magenta" ? styles.magenta : ''}`}>
                        <div className={styles.top__unstandart}>
                            <article className={styles.article__unstandart}>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                            <Image src={slides[0]} alt='' className={styles.sceleton__big} placeholder='blur'/>
                        </div>
                        <div className={styles.bottom__unstandart}>
                            <Link className={`${styles.link} ${color === 'blue' ? styles.link__blue : color === 'magenta' ? styles.link__magenta : ''}`} href={link}>
                                Continue&gt;
                            </Link>
                            <Image src={slides[1]} alt='' className={styles.sceleton__small} placeholder='blur'/>
                            <Image src={slides[2]} alt='' className={styles.sceleton__small} placeholder='blur'/>
                        </div>
                    </div>
                )
            ) : (
                <UiSubPageMobile 
                    slides={slides}
                    text={text}
                    title={title}
                    link={link}
                    color={color}
                />
            )}
        </>
    )
}

export default UiSubPage;