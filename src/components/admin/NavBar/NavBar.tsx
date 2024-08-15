'use client'
import React from 'react';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import homeIcon from '@/assets/home_icon.svg';
import ordersIcon from '@/assets/orders_icon.svg';
import statsIcon from '@/assets/stats_icon.svg';
import todoIcon from '@/assets/todo_icon.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const links = [
    {
        text: 'Главная',
        link: '/general',
        icon: homeIcon
    },
    {
        text: 'Заявки',
        link: '/orders/consideration',
        icon: ordersIcon
    },
    {
        text: 'Статистика',
        link: '/stats',
        icon: statsIcon
    },
    {
        text: 'Список задач',
        link: '/todo',
        icon: todoIcon
    }
]

const NavBar = () => {
    const currentPath = usePathname();

    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                {links.map((link) => (
                    <Link 
                        className={`${styles.link} ${currentPath === link.link ? styles.active__link : ''}`}
                        key={link.text} 
                        href={link.link}
                    >
                        <Image src={link.icon} alt={link.text} className={styles.icon}/>
                        <p>{link.text}</p>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;