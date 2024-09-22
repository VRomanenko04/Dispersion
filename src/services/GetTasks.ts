import { database } from '@/app/firebase';
import { get, ref } from 'firebase/database';


export const GetTasks = async (email: string | undefined) => {
    if(email) {
        try {
            const tasksRef = ref(database, `/tasks/${email}`);
    
            const snapshot = await get(tasksRef);
    
            if (snapshot.exists()) {
                const tasksList = snapshot.val();
                return Object.values(tasksList);
            } else {
                return [];
            }
    
        } catch(err) {
            console.log('Error with reading data:', err);
            throw err;
        }
    }
}