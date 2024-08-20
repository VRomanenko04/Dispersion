import { database } from '@/app/firebase';
import { get, ref } from 'firebase/database';


export const CreateOrderCode = async (projectType: 'Website' | 'Design project' | 'Personalized project') => {
    try {
        const projectsRef = ref(database, 'projects/')
        const snapshot = await get(projectsRef);

        let totalCount = 1;

        if (snapshot.exists()) {
            const projectsData = snapshot.val();
    
            const underConsiderationCount = projectsData.under_consideration ? Object.keys(projectsData.under_consideration).length : 0;
            const acceptedCount = projectsData.accepted ? Object.keys(projectsData.accepted).length : 0;
            const declinedCount = projectsData.declined ? Object.keys(projectsData.declined).length : 0;
    
            totalCount = underConsiderationCount + acceptedCount + declinedCount + 1;
        }

        const randomNumber = Math.floor(100 + Math.random() * 900); 

        // Определяем количество нулей, чтобы общая длина была 8
        const numberPart = randomNumber.toString().padStart(3, '0'); 
        const totalCountPart = totalCount.toString().padStart(4, '0'); // оставляем 5 символов для totalCount
        const codeWithZeros = `${totalCountPart}${numberPart}`;

        const prefix = projectType === 'Website' 
            ? 'WP' 
            : projectType === 'Design project' 
            ? 'DP' 
            : projectType === 'Personalized project'
            ? 'PP'
            : 'UP';

        const orderCode = `${prefix}${codeWithZeros}`;
        return orderCode;

    } catch(err) {
        console.log(err);
        throw err;
    }
}