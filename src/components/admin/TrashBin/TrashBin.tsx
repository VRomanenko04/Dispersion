'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './TrashBin.module.scss';
import { useDrop } from 'react-dnd';
import TrashIcon from '@/assets/trash-icon.svg';

type TrashBinProps = {
    onDropTask: (task: string) => void;
}

const TrashBin = ({ onDropTask }: TrashBinProps) => {
    const ref = useRef<HTMLDivElement>(null);
    
    const [, drop] = useDrop({
        accept: 'TASK',
        drop: (item: { task: string }) => {
            onDropTask(item.task);
        },
    });

    drop(ref);
    
    return (
        <div ref={ref} className={styles.trash_bin}>
            <Image className={styles.trash_icon} src={TrashIcon} alt='trash can icon'/>
        </div>
    )
}

export default TrashBin;