'use client'
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import WebdevSubPage from '../WebdevSubPage/WebdevSubPage';
import DesignSubPage from '../DesignSubPage/DesignSubPage';
import Footer from '../Footer/Footer';


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
            <Footer color={currentPage === "Website creation" ? 'blue' : currentPage === "Design services" ? 'magenta' : currentPage === "Portfolio" ? 'purple' : ''}/>
        </>
    )
}

export default SubPages;