import { database } from '@/app/firebase';
import { ref, get, set, remove } from "firebase/database";

export const OrderRejection = async (orderFullName: string) => {
    try {
        const underConsiderationRef = ref(database, `projects/under_consideration/${orderFullName}`);
        const declinedRef = ref(database, `projects/declined/${orderFullName}`);

        const snapshot = await get(underConsiderationRef);

        if (snapshot.exists()) {
            const data = snapshot.val();

            // Копируем данные в declined
            await set(declinedRef, data);

            // Удаляем данные из under_consideration
            await remove(underConsiderationRef);

        } 
    } catch(err) {
        console.log("Error moving order:", err);
        throw(err);
    }
}