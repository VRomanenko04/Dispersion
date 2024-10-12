'use client';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileWorkExamples from './MobileWorkExamples/MobileWorkExamples';
import MiddleWorkExamples from './DesktopWorkExamples/MiddleWorkExamples';
import DesktopWorkExamples from './DesktopWorkExamples/DesktopWorkExamples';


const WorkExamplesMedia = () => {
    const [isMounted, setIsMounted] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
    const isMiddleDevice = useMediaQuery({query: '(min-width: 800px) and (max-width: 1400px)'});

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            {isMobile ? (
                <MobileWorkExamples />
            ) : isMiddleDevice ? (
                <MiddleWorkExamples />
            ) : (
                <DesktopWorkExamples />
            )}
        </>
    )
}

export default WorkExamplesMedia;