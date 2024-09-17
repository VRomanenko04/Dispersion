import styles from "@/styles/mainPage.module.scss";
import Image from "next/image";
import Logo_wave from '@/assets/dispersion_wave.svg';
import Link from "next/link";
import OurSpecialty from "@/components/user/OurSpecialty/OurSpecialty";
import WorkExamples from "@/components/user/WorkExamples/WorkExamples";
import { Be_Vietnam_Pro } from "next/font/google";
import SubPages from "@/components/user/SubPages/SubPages";
import HomeHead from "@/components/user/HomeHead/HomeHead";

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function MainPage() {
  return (
    <>
    <HomeHead />
    <main className={beVietnamPro.className}>
      <OurSpecialty />
      <WorkExamples />
      <SubPages />
    </main>
    </>
  );
}