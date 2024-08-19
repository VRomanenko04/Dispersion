import { database } from '@/app/firebase';
import { get, ref } from 'firebase/database';


export const CreateOrderCode = async (projectType: 'Website' | 'Design project' | 'Personalized project') => {
    try {
        const projectsRef = ref(database, 'projects/')
        const snapshot = await get(projectsRef);
    
        if (snapshot.exists()) {
            const projectsData = snapshot.val();
    
            const underConsiderationCount = projectsData.under_consideration ? Object.keys(projectsData.under_consideration).length : 0;
            const activeCount = projectsData.active ? Object.keys(projectsData.active).length : 0;
            const declinedCount = projectsData.declined ? Object.keys(projectsData.declined).length : 0;
    
            const totalCount = underConsiderationCount + activeCount + declinedCount + 1;
    
            const prefix = projectType === 'Website' 
                ? 'WP' 
                : projectType === 'Design project' 
                ? 'DP' 
                : projectType === 'Personalized project'
                ? 'PP'
                : 'UP';
    
            console.log('Prefix:', prefix);
    
            const orderCode = `${prefix}${totalCount.toString().padStart(6, '0')}`;
            console.log('Order Code:', orderCode);
            return orderCode;
        } else {
            console.log('Error with count.');
            return null;
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}