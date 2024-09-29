import React from 'react';
import styles from './Checkbox.module.scss';
import Checkmark from '@/assets/bold-checkmark.svg';
import Image from 'next/image';

type Props = {
    isChecked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const Checkbox = ({ isChecked, setIsChecked }: Props) => {
    return (
        <div className={styles.box} onClick={() => setIsChecked(prev => !prev)}>
            {isChecked && <Image src={Checkmark} alt='Checkmark' className={styles.image}/>}
        </div>
    )
}

export default Checkbox;