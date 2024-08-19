'use client'
import React, { useEffect, useState } from 'react';
import styles from './OrdersNavBar.module.scss';
import Link from 'next/link';
import { GetProjectsCount } from '@/services/GetProjectsCount';
import { usePathname } from 'next/navigation';

const OrdersNavBar = () => {
    const [projectsCount, setProjectsCount] = useState({
        under_consideration: 0,
        accepted: 0,
        declined: 0,
    });

    useEffect(() => {
        const fetchProjectsCount = async () => {
            try {
                const result = await GetProjectsCount();
                setProjectsCount(result);
            } catch (error) {
                console.error('Error fetching projects count:', error);
            }
        };

        fetchProjectsCount();
    }, []);

    const currentPath = usePathname();
    
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <Link className={`${styles.link} ${currentPath === '/orders/consideration' ? styles.active : ''}`} href='/orders/consideration'>На расмотрении <p>({projectsCount.under_consideration})</p></Link>
                <Link className={`${styles.link} ${currentPath === '/orders/active' ? styles.active : ''}`} href='/orders/active'>Принятые заявки <p>({projectsCount.accepted})</p></Link>
                <Link className={`${styles.link} ${currentPath === '/orders/declined' ? styles.active : ''}`} href='/orders/declined'>Отклонённые заявки <p>({projectsCount.declined})</p></Link>
            </ul>
        </nav>
    )
}

export default OrdersNavBar;