'use client';
import React from 'react';
import styles from './UiSubPage.module.scss';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { StaticImageData } from 'next/image';
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
                            <div className={styles.sceleton__big}></div>
                            <article className={styles.article}>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        </div>
                        <div className={styles.bottom__standart}>
                            <div className={styles.sceleton__small}></div>
                            <div className={styles.sceleton__small}></div>
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
                            <div className={styles.sceleton__big}></div>
                        </div>
                        <div className={styles.bottom__unstandart}>
                            <Link className={`${styles.link} ${color === 'blue' ? styles.link__blue : color === 'magenta' ? styles.link__magenta : ''}`} href={link}>
                                Continue&gt;
                            </Link>
                            <div className={styles.sceleton__small}></div>
                            <div className={styles.sceleton__small}></div>
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