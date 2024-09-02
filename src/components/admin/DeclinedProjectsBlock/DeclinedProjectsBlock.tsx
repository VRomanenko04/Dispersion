'use client';
import React, { useEffect, useState } from 'react';
import styles from './DeclinedProjectsBlock.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import { GetProjectsData } from '@/services/GetData';
import DeclinedProject from '../DeclinedProject/DeclinedProject';

type DeclinedProjectsObject = {
    email: string
    fullName: string
    howToContact: string
    message: string
    orderCode: string
    contactDetails?: string
}

const DeclinedProjectsBlock = () => {
    const [DeclinedProjects, setDeclinedProjects] = useState<DeclinedProjectsObject[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<DeclinedProjectsObject[]>([]);

    const inizializeProjects = async () => {
        const projectsList = await GetProjectsData('declined');

        if (projectsList) {
            // Преобразование объекта в массив объектов
            const projectsArray = Object.values(projectsList) as DeclinedProjectsObject[];

            setDeclinedProjects(projectsArray);
            setFilteredProjects(projectsArray);
        }
    }

    useEffect(() => {
        inizializeProjects();
    }, []);

    const handleSearchChange = (searchTerm: string) => {
        if (!searchTerm) {
            setFilteredProjects(DeclinedProjects);
            return;
        }

        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = DeclinedProjects.filter((project) =>
            project.orderCode.toLowerCase().includes(lowercasedSearchTerm) ||
            project.fullName.toLowerCase().includes(lowercasedSearchTerm)
        );

        setFilteredProjects(filtered);
    };

    return (
        <section className={styles.container}>
            <SearchInput onChangeFunc={handleSearchChange}/>
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
                <div className={styles.status}>
                    <p>Статус</p>
                </div>
            </div>
            <div>
                {filteredProjects.map((project) => (
                    <div key={project.orderCode}>
                        <DeclinedProject
                            fullName={project.fullName} 
                            email={project.email} 
                            message={project.message} 
                            orderCode={project.orderCode} 
                            howToContact={project.howToContact}
                            contactDetails={project.contactDetails}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DeclinedProjectsBlock;