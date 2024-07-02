'use client'
import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const SubPagesClient = dynamic(() => import("./SubPagesClient"), {
    ssr: false,
});

const SubPages = () => {
    const [navVisible, setNavVisible] = useState(false);
    const [visibleTrigger, setVisibleTrigger] = useState(0.2);
    const navRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setNavVisible(entry.isIntersecting && entry.intersectionRatio >= visibleTrigger);
            },
            { threshold: [visibleTrigger] }
        );

        if (navRef.current) {
            observer.observe(navRef.current);
        }

        return () => {
            if (navRef.current) {
                observer.unobserve(navRef.current);
            }
        };
    }, [visibleTrigger]);

    return (
        <>
            <SubPagesClient 
                navVisible={navVisible} 
                navRef={navRef} 
                setVisibleTrigger={setVisibleTrigger} 
            />
        </>
    );
}

export default SubPages;