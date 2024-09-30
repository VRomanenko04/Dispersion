'use client'
import React, { useRef } from 'react';
import styles from './TodoItem.module.scss';
import { useDrag, useDrop } from 'react-dnd';

type TodoItemProps = {
    task: string
    index: number;
    tasksList: string[];
    setTasksList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoItem = ({ task, index, tasksList, setTasksList }: TodoItemProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const [, drag] = useDrag({
        type: 'TASK',
        item: { index, task },
    });

    const [, drop] = useDrop({
        accept: 'TASK',
        hover: (draggedItem: { index: number }) => {
            if (draggedItem.index !== index) {
                const newTasksList = [...tasksList];
                const [removed] = newTasksList.splice(draggedItem.index, 1);
                newTasksList.splice(index, 0, removed);
                setTasksList(newTasksList);
                draggedItem.index = index;
            }
        },
    });

    drag(drop(ref));
    
    return (
        <div ref={ref} className={styles.task}>
            <p>{task}</p>
        </div>
    )
}

export default TodoItem;