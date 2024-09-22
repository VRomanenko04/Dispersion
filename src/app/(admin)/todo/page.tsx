'use client';
import React from 'react';
import styles from './TodoPage.module.scss';
import TodoBlock from '@/components/admin/TodoBlock/TodoBlock';
import ProtectedPage from '@/components/admin/ProtectedPage';

export type TodoProjectObject = {
    orderCode: string
    projectName: string
}

const TodoPage = () => {
    return (
        <section className={styles.container}>
            <TodoBlock />
        </section>
    )
}

export default ProtectedPage(TodoPage);