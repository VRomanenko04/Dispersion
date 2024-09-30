'use client'
import React, { useEffect, useState } from 'react';
import styles from './TodoPrototype.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { CreateTask } from '@/services/CreateTask';
import UiPopUp from '../UiPopUp/UiPopUp';
import { GetTasksList } from '@/services/GetTasks';
import TodoItem from '../TodoItem/TodoItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TrashBin from '../TrashBin/TrashBin';
import { DeleteTask } from '@/services/DeleteTask';

type TodoPrototypeProps = {
    orderCode: string
    projectName: string
    isSelected: boolean;
    onSelect: (orderCode: string) => void;
}

const TodoPrototype = ({ orderCode, projectName, isSelected, onSelect }: TodoPrototypeProps) => {
    const [tasksList, setTasksList] = useState<string[]>([]);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const inizializeTasks = (projectName: string) => {
        onAuthStateChanged(auth, async (user) => {
            const tasksList = await GetTasksList(user?.email?.split('.')[0], projectName);

            if (tasksList) {
                const todoArray = tasksList as string[];
    
                setTasksList(todoArray);
            }
        })
    }

    const handleCreateTask = async (projectName: string, task: string) => {
        onAuthStateChanged(auth, async (user) => {
            await CreateTask(user?.email?.split('.')[0], projectName, task).then(() => {
                setIsCreateOpen(false);
                inizializeTasks(projectName)
            })
        });
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleDeleteTask = async (task: string) => {
        setTasksList((prevTasks) => prevTasks.filter((t) => t !== task));
        onAuthStateChanged(auth, async (user) => {
            await DeleteTask(user?.email?.split('.')[0], projectName, task)
        })
    };

    useEffect(() => {
        inizializeTasks(projectName);
        console.log(tasksList);
    }, [])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={`${styles.container} ${isSelected ? styles.selected : ''}`}>
                <div className={styles.first__line}>
                    <div>
                        <h2 className={styles.title}>{projectName}</h2>
                        <p className={styles.order_code}>№ {orderCode}</p>
                    </div>
                    <Checkbox isChecked={isSelected} setIsChecked={() => onSelect(projectName)}/>
                </div>
                <div className={styles.list__container}>
                    {tasksList.map((task, index) => (
                        <TodoItem task={task} key={task} index={index} tasksList={tasksList} setTasksList={setTasksList}/>
                    ))}
                </div>
                <div className={styles.last__line}>
                    <p className={styles.add_task} onClick={() => setIsCreateOpen(true)}>+ Добавить задачу</p>
                    <TrashBin onDropTask={handleDeleteTask} />
                </div>
            </div>
            <UiPopUp isOpen={isCreateOpen} setIsOpen={setIsCreateOpen}>
                <div className={styles.modal__container}>
                    <h6>Добавить новую задачу</h6>
                    <div className={styles.input__container}>
                        <label htmlFor="">Текст задачи</label>
                        <input value={inputValue} onChange={handleInputChange} type="text" />
                    </div>
                    <button className={styles.modal__btn} onClick={() => handleCreateTask(projectName, inputValue)}>Добавить</button>
                </div>
            </UiPopUp>
        </DndProvider>
    )
}

export default TodoPrototype;