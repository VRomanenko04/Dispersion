import { database } from '@/app/firebase';
import { ref, update } from 'firebase/database';


export const CompleteOrder = async (projectName: string) => {
    try{
        const orderRef = ref(database, `projects/accepted/${projectName}`);

        await update(orderRef, { status: "Completed" });
    } catch (err) {
        console.log(err);
        throw err;
    }
}