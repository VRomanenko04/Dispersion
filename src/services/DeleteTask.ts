import { database } from "@/app/firebase";
import { get, ref, set } from "firebase/database";


export const DeleteTask = async (email: string | undefined, projectName: string, taskToDelete: string) => {
    if(email) {
        try {
            const taskRef = ref(database, `tasks/${email}/${projectName}/tasksList`);

            // Получаем существующий список задач
            const taskSnapshot = await get(taskRef);
            const existingTasks = taskSnapshot.exists() ? taskSnapshot.val() : [];

            // Фильтруем список задач, удаляя нужную задачу
            const updatedTasks = existingTasks.filter((task: string) => task !== taskToDelete);

            // Обновляем список задач в базе данных
            await set(taskRef, updatedTasks);

        } catch (err) {
            throw err;
        }
    }
}