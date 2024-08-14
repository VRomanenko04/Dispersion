import { database } from '@/app/firebase';
import { get, ref } from 'firebase/database';


export const GetProjectsData = async (projectsType: string) => {
    try {
        const projectsRef = ref(database, 'projects/' + projectsType);

        const snapshot = await get(projectsRef);

        if (snapshot.exists()) {
            const projectsList = snapshot.val();
            return Object.values(projectsList);
        } else {
            return [];
        }

    } catch(err) {
        console.log('Error with reading data:', err);
        throw err;
    }
}