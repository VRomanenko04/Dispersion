import { Be_Vietnam_Pro } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/dispersion_logo.svg';
import backIcon from '@/assets/back_arrow.svg';
import styles from './TermsConditions.module.scss';
import Footer from '@/components/user/Footer/Footer';

const beVietnamPro = Be_Vietnam_Pro({subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const TermsConditions = () => {
    return (
        <>
            <header className={`${styles.header__wrapper} ${beVietnamPro.className}`}>
                <div className={styles.header__container}>
                    <Link href='/'>
                        <Image src={Logo} alt='Dispersion logo' className={styles.logo}/>
                    </Link>
                </div>
            </header>
            <main className={`${styles.main__container} ${beVietnamPro.className}`}>
                <section className={styles.text__container}>
                    <Link href='/contact' className={styles.link}>
                        <Image className={styles.icon} src={backIcon} alt='Back button'/>
                        Back
                    </Link>

                    <article>
                        <h6>Introduction</h6>
                        <p>Welcome to the Dispersion Studio website. These Terms and Conditions (hereinafter "Terms") govern your use of our website and the services we provide. By using our website and services, you agree to these Terms.</p>
                    </article>
                    <article>
                        <h6>Applicability of Terms</h6>
                        <p>These Terms apply to all users who access our website and/or fill out the contact form.</p>
                    </article>
                    <article>
                        <h6>Definitions</h6>
                        <p>
                            Services: all services provided by Dispersion Studio, including but not limited to design and web development. <br />
                            User: any individual using our website or submitting information through the forms on the site.
                        </p>
                    </article>
                    <article>
                        <h6>Services</h6>
                        <p>We offer a wide range of services in the field of design and web development. Details of each service can be found on our website.</p>
                    </article>
                    <article>
                        <h6>User Obligations</h6>
                        <p>Users agree to provide accurate and up-to-date information when filling out forms. You are responsible for complying with all applicable laws and regulations.</p>
                    </article>
                    <article>
                        <h6>Privacy and Data Protection</h6>
                        <p>We respect your privacy. All information you provide will be processed in accordance with our Privacy Policy. We will not share your personal data with third parties without your consent, except as required by law.</p>
                    </article>
                    <article>
                        <h6>Intellectual Property</h6>
                        <p>All materials on our website, including text, graphics, and logos, are the property of Dispersion Studio and are protected by copyright laws. Use of materials without our permission is prohibited.</p>
                    </article>
                    <article>
                        <h6>Limitation of Liability</h6>
                        <p>Dispersion Studio is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.</p>
                    </article>
                    <article>
                        <h6>Changes to Terms</h6>
                        <p>We reserve the right to modify these Terms at any time. Users will be notified of any changes, and continued use of the site will signify agreement to the updated Terms.</p>
                    </article>
                    <article>
                        <h6>Governing Law</h6>
                        <p>These Terms are governed by the laws of the United Kingdom. Any disputes arising in connection with the use of the website or services will be resolved in the courts of the United Kingdom.</p>
                    </article>
                    <article>
                        <h6>Contact Information</h6>
                        <p>If you have any questions regarding these Terms, please contact us at: <a href="mailto: dispersionwebagency@gmail.com">dispersionwebagency@gmail.com</a>.</p>
                    </article>
                </section>
            </main>
            <Footer color='purple'/>
        </>
    )
}

export default TermsConditions;