'use client';
import React, { useEffect, useState } from 'react';
import styles from './TodoBlock.module.scss';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { GetTasks } from '@/services/GetTasks';
import { TodoProjectObject } from '@/app/(admin)/todo/page';
import SearchBar from '../SearchBar/SearchBar';
import TodoPrototype from '../TodoPrototype/TodoPrototype';


const TodoBlock = () => {
    const [todoList, setTodoList] = useState<TodoProjectObject[]>([]);
    const [filteredList, setFilteredList] = useState<TodoProjectObject[]>([]);

    const inizializeTasks = () => {
        onAuthStateChanged(auth, async (user) => {
            const tasksList = await GetTasks(user?.email?.split('.')[0]);

            if (tasksList) {
                // Преобразование объекта в массив объектов
                const projectsArray = Object.values(tasksList) as TodoProjectObject[];
    
                setTodoList(projectsArray);
                setFilteredList(projectsArray);
            }
        })
    }

    const handleSearchChange = (searchTerm: string) => {
        if (!searchTerm) {
            setFilteredList(todoList);
            return;
        }

        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = todoList.filter((project) =>
            project.projectName.toLowerCase().includes(lowercasedSearchTerm) ||
            project.orderCode.toLowerCase().includes(lowercasedSearchTerm)
        );

        setFilteredList(filtered);
    };

    useEffect(() => {
        inizializeTasks();
    }, []);

    return (
        <section className={styles.wrapper}>
            <SearchBar onChangeFunc={handleSearchChange}/>
            <section className={styles.container}>
                {filteredList?.map((task) => (
                    <div key={task.orderCode}>
                        <TodoPrototype orderCode={task.orderCode} projectName={task.projectName}/>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default TodoBlock;