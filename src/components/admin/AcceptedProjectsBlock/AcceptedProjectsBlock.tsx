'use client'
import React, { useEffect, useState } from 'react';
import styles from './AcceptedProjectsBlock.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import { GetProjectsData } from '@/services/GetData';
import AcceptedProject from '../AcceptedProject/AcceptedProject';

type AcceptedProjectObject = {
    email: string
    fullName: string
    howToContact: string
    message: string
    projectType: string
    orderCode: string
    contactDetails?: string
    projectName: string
    deadline: string
}

const AcceptedProjectsBlock = () => {
    const [AcceptedProjects, setAcceptedProjects] = useState<AcceptedProjectObject[]>([]);

    const inizializeProjects = async () => {
        const projectsList = await GetProjectsData('accepted');

        if (projectsList) {
            // Преобразование объекта в массив объектов
            const projectsArray = Object.values(projectsList) as AcceptedProjectObject[];
            setAcceptedProjects(projectsArray);
        }
    }

    useEffect(() => {
        inizializeProjects();
    }, []);

    return (
        <section className={styles.container}>
            <SearchInput />
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
                <div className={styles.status}>
                    <p>Статус</p>
                </div>
            </div>
            <div className={styles.projects__container}>
                {AcceptedProjects.map((project) => (
                    <div key={project.orderCode}>
                        <AcceptedProject 
                            fullName={project.fullName} 
                            email={project.email} 
                            message={project.message} 
                            orderCode={project.orderCode} 
                            howToContact={project.howToContact}
                            contactDetails={project.contactDetails}
                            projectName={project.projectName}
                            deadline={project.deadline}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AcceptedProjectsBlock;