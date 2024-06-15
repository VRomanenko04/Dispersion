import styles from "@/styles/mainPage.module.scss";
import Image from "next/image";
import Logo_wave from '@/assets/dispersion_wave.svg';
import Link from "next/link";
import OurSpecialty from "@/components/OurSpecialty/OurSpecialty";


export default function MainPage() {
  return (
    <>
    <header className={styles.header}>
      <div>
        <Link href='/' className={styles.logo}>
          <Image src={Logo_wave} alt="Dispersion" className={styles.image}/>
          <h1>dispersion</h1>
        </Link>
      </div>
    </header>
    <main>
      <OurSpecialty />
    </main>
    </>
  );
}