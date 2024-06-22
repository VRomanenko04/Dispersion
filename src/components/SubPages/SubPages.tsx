'use client'
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';


const SubPages = () => {
    const [currentPage, setCurrentPage] = useState("Website creation");

    return (
        <>
            <Navigation 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}

export default SubPages;