'use client'
import React, { useEffect, useState } from 'react';
import styles from './ActiveOrdersBlock.module.scss';
import { GetProjectsData } from '@/services/GetData';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/assets/ArrowIcon.svg';
import ActiveOrder from '../ActiveOrder/ActiveOrder';

type ProjectObject = {
    orderCode: string
    projectName: string
    status?: string
    deadline: string
}

const ActiveOrdersBlock = () => {
    const [activeOrders, setActiveOrders] = useState<ProjectObject[]>([]);

    const inizializeProjects = async () => {
        const projectsList = await GetProjectsData('accepted');

        if (projectsList) {
            // Преобразование объекта в массив объектов
            const projectsArray = Object.values(projectsList) as ProjectObject[];

            projectsArray.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
            
            setActiveOrders(projectsArray);
        }
    };

    useEffect(() => {
        console.log('initialized');
        inizializeProjects();
    }, []);


    return (
        <div className={styles.container}>
            <h6 className={styles.title}>Активные заказы</h6>
            <section className={styles.project__container}>
                <div className={styles.filter__container}>
                    <div className={styles.prev}>
                        <p>Превью</p>
                    </div>
                    <div className={styles.name}>
                        <p>Название</p>
                    </div>
                    <div className={styles.order__code}>
                        <p>№ Код заказа</p>
                    </div>
                    <div className={styles.time__left}>
                        <p>Осталось времени:</p>
                    </div>
                </div>
                <div className={styles.projects__container}>
                    {activeOrders.map((project) => (
                        <div key={project.orderCode}>
                            <ActiveOrder 
                                orderCode={project.orderCode}
                                projectStatus={project.status}
                                projectName={project.projectName}
                                deadline={project.deadline}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
            </section>
            <Link href='/orders/accepted' className={styles.link}>
                <Image src={ArrowIcon} alt='Arrow link' />
            </Link>
        </div>
    )
}

export default ActiveOrdersBlock;