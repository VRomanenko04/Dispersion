import { ref, set } from 'firebase/database';
import { database } from '@/app/firebase';

type DataProps = {
    [key: string]: any;
};

export const PostNewProjectData = async (postData: DataProps, projectName: string) => {
    try {
        const projectRef = ref(database, `projects/under_consideration/${projectName}`);
        await set(projectRef, postData);

    } catch (err) {
        console.error('Ошибка при записи данных:', err);
        throw err;
    }
};