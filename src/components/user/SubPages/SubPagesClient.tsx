'use client'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Navigation from '../Navigation/Navigation';
import WebdevSubPage from '../WebdevSubPage/WebdevSubPage';
import DesignSubPage from '../DesignSubPage/DesignSubPage';
import Footer from '../Footer/Footer';
import PortfolioSubPage from '../PortfolioSubPage/PortfolioSubPage';
import NavBar from '../NavBar/NavBar';
import MobileNavBar from '../MobileNavBar/MobileNavBar';

type SubPagesClientProps = {
    navVisible: boolean
    navRef: React.MutableRefObject<null>
    setVisibleTrigger: React.Dispatch<React.SetStateAction<number>>
}

const SubPagesClient = ({ navVisible, navRef, setVisibleTrigger }: SubPagesClientProps) => {
    const isMobile = useMediaQuery({query: "(max-width : 800px)"});
    const smallHeightDevice = useMediaQuery({query:"only screen and (max-height : 720px)"});
    const mediumHeightDevice = useMediaQuery({query:"only screen and (min-height : 721px) and (max-height : 900px)"});
    const largeHeightDevice = useMediaQuery({query:"only screen and (min-height : 901px) and (max-height : 1200px)"});
    const ultraLargeHeightDevice = useMediaQuery({query:"only screen and (min-height : 1201px) and (max-height : 1350px)"});
    const monsterLargeHeightDevice = useMediaQuery({query:"only screen and (min-height : 1351px)"});

    const [currentPage, setCurrentPage] = useState("Website creation");
    const [navImage, setNavImage] = useState("Website creation");
    const [items, setItems] = useState(["Website creation", "Design services", "Portfolio"]);

    const visibleTrigger = smallHeightDevice ? 0.15 : mediumHeightDevice ? 0.2 : largeHeightDevice ? 0.25 : ultraLargeHeightDevice ? 0.3 : monsterLargeHeightDevice ? 0.5 : 0.2;

    React.useEffect(() => {
        setVisibleTrigger(visibleTrigger);
    }, [visibleTrigger, setVisibleTrigger]);

    return (
        <>
            {!isMobile ? (
                <>
                    <Navigation 
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        items={items}
                        setItems={setItems}
                        navImage={navImage}
                        setNavImage={setNavImage}
                    />
                    <NavBar 
                        setActiveLink={setCurrentPage} 
                        setOtherImage={setNavImage} 
                        setItemsIndex={setItems} 
                        activeLink={currentPage} 
                        navVisible={navVisible}
                    />
                </>
            ) : <MobileNavBar 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setOtherImage={setNavImage} 
                    setItemsIndex={setItems} 
                />}
            <section ref={navRef}>
                {currentPage === "Website creation" && <WebdevSubPage isActive={currentPage === "Website creation"}/>}
                {currentPage === "Design services" && <DesignSubPage isActive={currentPage === "Design services"}/>}
                {currentPage === "Portfolio" && <PortfolioSubPage isActive={currentPage === "Portfolio"}/>}
            </section>
            <Footer color={currentPage === "Website creation" ? 'blue' : currentPage === "Design services" ? 'magenta' : currentPage === "Portfolio" ? 'purple' : ''}/>
        </>
    )
}

export default SubPagesClient;