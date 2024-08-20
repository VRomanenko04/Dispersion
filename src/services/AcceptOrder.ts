import { database } from '@/app/firebase';
import { ref, get, set, remove } from "firebase/database";


export const AcceptOrder = async (orderFullName: string, projectName: string, timeForProject: number) => {
    try {
        const underConsiderationRef = ref(database, `projects/under_consideration/${orderFullName}`);
        const acceptedRef = ref(database, `projects/accepted/${projectName}`);

        const snapshot = await get(underConsiderationRef);

        if (snapshot.exists()) {
            const data = snapshot.val();

            // Получаем текущую дату и прибавляем к ней количество дней
            const currentDate = new Date();
            const deadlineDate = new Date(currentDate);
            deadlineDate.setDate(currentDate.getDate() + timeForProject);

            // Добавляем дату сдачи проекта в объект
            const dataWithDeadline = {
                ...data,
                deadline: deadlineDate.toISOString(), // Сохраняем дату в формате ISO строки
                projectName: projectName, // Сохраняем новое название для проекта
            };

            // Копируем данные в accepted
            await set(acceptedRef, dataWithDeadline);

            // Удаляем данные из under_consideration
            await remove(underConsiderationRef);
        } else {
            console.log('Error with accepting project');
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}