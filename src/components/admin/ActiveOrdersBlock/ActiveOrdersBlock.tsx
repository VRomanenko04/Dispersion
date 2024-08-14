'use client'
import React, { useEffect, useState } from 'react';
import styles from './ActiveOrdersBlock.module.scss';
import { GetProjectsData } from '@/services/GetData';

type ProjectObject = {
    email: string
    fullName: string
    howToContact: string
    message: string
    projectType: string
}


const ActiveOrdersBlock = () => {
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
        <div>
            {underConsiderationProjects.map((project, index) => (
                <li key={index}>{project.fullName} {project.message}</li>
            ))}
        </div>
    )
}

export default ActiveOrdersBlock;