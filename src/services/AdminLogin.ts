import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';


export const LoginAdmin = async (email: string, pass: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, pass).then(() => {
            console.log('User has been logined');
        })
    } catch (err) {
        console.log(err);
        throw(err);
    }
}