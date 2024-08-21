'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '@/app/firebase';
import { onAuthStateChanged } from 'firebase/auth';

type WithAuthProps = {}

export default function ProtectedPage<P extends WithAuthProps>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (!user) {
                    router.replace('/');
                } else {
                    setLoading(false);
                }
            });

            return () => unsubscribe();
        }, [router]);

        if (loading) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };
}