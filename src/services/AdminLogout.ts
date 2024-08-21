import { auth } from "@/app/firebase";
import { signOut } from "firebase/auth";

export const AdminLogout = async () => {
    await signOut(auth);
}