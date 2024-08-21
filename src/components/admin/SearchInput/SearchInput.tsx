'use client'
import React, { useState } from 'react';
import styles from './SearchInput.module.scss';

type SearchInputType = {
    onChangeFunc?: (value: string) => void
}

const SearchInput = ({ onChangeFunc }: SearchInputType) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onChangeFunc) {
            onChangeFunc(newValue); // Вызов функции из пропсов
        }
    };

    return (
        <div className={styles.input__container}>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='Название или код заказа' 
                value={value} 
                onChange={handleChange}
            />
            <div className={styles.input__divider}></div>
        </div>
    )
}

export default SearchInput;