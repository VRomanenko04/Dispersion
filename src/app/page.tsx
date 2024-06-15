import styles from "@/styles/mainPage.module.scss";
import Image from "next/image";
import Logo_wave from '@/assets/dispersion_wave.svg';
import Link from "next/link";


export default function MainPage() {
  return (
    <>
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <Image src={Logo_wave} alt="Dispersion" className={styles.image}/>
        <h1>dispersion</h1>
      </Link>
    </header>
    </>
  );
}