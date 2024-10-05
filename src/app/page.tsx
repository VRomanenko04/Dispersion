'use client';
import OurSpecialty from "@/components/user/OurSpecialty/OurSpecialty";
import WorkExamples from "@/components/user/WorkExamples/WorkExamples";
import { Be_Vietnam_Pro } from "next/font/google";
import SubPages from "@/components/user/SubPages/SubPages";
import HomeHead from "@/components/user/HomeHead/HomeHead";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileWorkExamples from "@/components/user/MobileWorkExamples/MobileWorkExamples";
import MiddleWorkExamples from "@/components/user/WorkExamples/MiddleWorkExamples";

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function MainPage() {
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
    <HomeHead />
    <main className={beVietnamPro.className}>
      <OurSpecialty />
      {isMobile ? (
          <MobileWorkExamples />
        ) : isMiddleDevice ? (
          <MiddleWorkExamples />
        ) : (
          <WorkExamples />
        )}
      <SubPages />
    </main>
    </>
  );
}