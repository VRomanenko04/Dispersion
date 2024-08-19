'use client'
import React, { useEffect, useState } from 'react';
import styles from './UnderConsiderationBlock.module.scss';
import { GetProjectsData } from '@/services/GetData';
import UnderConsiderationProject from '../UnderConsiderationProject/UnderConsiderationProject';

type ProjectObject = {
    email: string
    fullName: string
    howToContact: string
    message: string
    projectType: string
    orderCode: string
}

const UnderConsiderationBlock = () => {
    const [underConsiderationProjects, setUnderConsiderationProjects] = useState<ProjectObject[]>([]);

    const inizializeProjects = async () => {
        const projectsList = await GetProjectsData('under_consideration');

        if (projectsList) {
            // Преобразование объекта в массив объектов
            const projectsArray = Object.values(projectsList) as ProjectObject[];
            setUnderConsiderationProjects(projectsArray);
        }
    };

    useEffect(() => {
        console.log('initialized');
        inizializeProjects();
    }, []);

    return (
        <section className={styles.container}>
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
                <div className={styles.empty__wrap}></div>
            </div>
            <div>
                {underConsiderationProjects.map((project, index) => (
                    <div key={index}>
                        <UnderConsiderationProject fullName={project.fullName} email={project.email} message={project.message} projectType={project.projectType} orderCode={project.orderCode}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default UnderConsiderationBlock;