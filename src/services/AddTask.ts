import { database } from "@/app/firebase"
import { ref, set } from "firebase/database"
import { GetProjectsData } from "./GetData";


export const AddTask = async (email: string, projectName: string) => {
    try {
        const sanitizedEmail = email.split('.')[0];

        const newTaskRef = ref(database, `tasks/${sanitizedEmail}/${projectName}`);

        const Projects: any = await GetProjectsData('accepted');

        const foundProject = Projects.find((project: any) => project.projectName === projectName);

        if (!foundProject) {
            throw new Error(`Project with orderName: ${projectName} not found`);
        }

        const orderCode = foundProject.orderCode;

        const TaskInfo = {
            'projectName': projectName,
            'orderCode': orderCode,
        }

        await set(newTaskRef, TaskInfo);

    } catch (err) {
        console.log(err);
        throw err;
    }
}