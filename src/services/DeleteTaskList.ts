import { database } from "@/app/firebase";
import { ref, remove } from "firebase/database";


export const DeleteTaskList = async (email: string | undefined, projectNames: string[]) => {
    if (email) {
        try {
            const deletePromises = projectNames.map((projectName) => {
                const taskRef = ref(database, `tasks/${email}/${projectName}`);
                return remove(taskRef);
            });

            await Promise.all(deletePromises);

        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}