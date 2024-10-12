import OurSpecialty from "@/components/user/OurSpecialty/OurSpecialty";
import { Be_Vietnam_Pro } from "next/font/google";
import SubPages from "@/components/user/SubPages/SubPages";
import HomeHead from "@/components/user/HomeHead/HomeHead";
import WorkExamplesMedia from "@/components/user/WorkExamplesMedia";

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function MainPage() {
  return (
    <>
      <HomeHead />
      <main className={beVietnamPro.className}>
        <OurSpecialty />
        <WorkExamplesMedia />
        <SubPages />
      </main>
    </>
  );
}