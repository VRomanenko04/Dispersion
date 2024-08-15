import { database } from '@/app/firebase';
import { get, ref } from 'firebase/database';

type ProjectsCount = {
    under_consideration: number;
    active: number;
    declined: number;
};

export const GetProjectsCount = async (): Promise<ProjectsCount> => {
    try {
        const projectsRef = ref(database, 'projects/');
        const snapshot = await get(projectsRef);

        if (snapshot.exists()) {
            const projectsData = snapshot.val();

            const result: ProjectsCount = {
                under_consideration: projectsData.under_consideration 
                    ? Object.keys(projectsData.under_consideration).length 
                    : 0,
                active: projectsData.active 
                    ? Object.keys(projectsData.active).length 
                    : 0,
                declined: projectsData.declined 
                    ? Object.keys(projectsData.declined).length 
                    : 0
            };

            return result;
        } else {
            return {
                under_consideration: 0,
                active: 0,
                declined: 0
            };
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}