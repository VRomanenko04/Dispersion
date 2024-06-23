'use client'
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import WebdevSubPage from '../WebdevSubPage/WebdevSubPage';
import DesignSubPage from '../DesignSubPage/DesignSubPage';


const SubPages = () => {
    const [currentPage, setCurrentPage] = useState("Website creation");

    return (
        <>
            <Navigation 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            {currentPage === "Website creation" && <WebdevSubPage />}
            {currentPage === "Design services" && <DesignSubPage />}
        </>
    )
}

export default SubPages;