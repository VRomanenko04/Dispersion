'use client';
import React, { useEffect, useState } from 'react';
import styles from './TodoBlock.module.scss';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { GetTasks } from '@/services/GetTasks';
import { TodoProjectObject } from '@/app/(admin)/todo/page';
import SearchBar from '../SearchBar/SearchBar';
import TodoPrototype from '../TodoPrototype/TodoPrototype';
import { DeleteTaskList } from '@/services/DeleteTaskList';


const TodoBlock = () => {
    const [todoList, setTodoList] = useState<TodoProjectObject[]>([]);
    const [filteredList, setFilteredList] = useState<TodoProjectObject[]>([]);
    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);


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

    const handleTasksSelection = (projectName: string) => {
        setSelectedTasks((prevSelected) =>
            prevSelected.includes(projectName)
                ? prevSelected.filter((name) => name !== projectName)
                : [...prevSelected, projectName]
        );
    };

    const handleDeleteSelectedProjects = async () => {
        onAuthStateChanged(auth, async (user) => {
            if (user?.email) {
                const userKey = user.email.split('.')[0];
                await DeleteTaskList(userKey, selectedTasks);

                setSelectedTasks([]);
                setIsDeleteOpen(false);
                inizializeTasks();
            }
        });
    };

    useEffect(() => {
        inizializeTasks();
    }, []);

    return (
        <section className={styles.wrapper}>
            <SearchBar 
                onChangeFunc={handleSearchChange} 
                onDeleteProjects={handleDeleteSelectedProjects}
                isOpen={isDeleteOpen}
                setIsOpen={setIsDeleteOpen}
                initialize={inizializeTasks}
            />
            <section className={styles.container}>
                {filteredList?.map((task) => (
                    <div key={task.orderCode}>
                        <TodoPrototype 
                            orderCode={task.orderCode} 
                            projectName={task.projectName}
                            isSelected={selectedTasks.includes(task.projectName)}
                            onSelect={handleTasksSelection}
                        />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default TodoBlock;