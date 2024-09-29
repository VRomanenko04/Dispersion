import { database } from "@/app/firebase";
import { get, ref, set } from "firebase/database";


export const CreateTask = async (email: string | undefined, projectName: string, newTask: string) => {
    if (email) {
        try {
            const taskRef = ref(database, `tasks/${email}/${projectName}/tasksList`);

            // Получаем существующий список задач
            const taskSnapshot = await get(taskRef);
            const existingTasks = taskSnapshot.exists() ? taskSnapshot.val() : [];

            // Добавляем новую задачу к существующему списку
            const updatedTasks = [...existingTasks, newTask];
    
            // Обновляем список задач в базе данных
            await set(taskRef, updatedTasks);
    
        } catch (err) {
            throw err;
        }
    }
}