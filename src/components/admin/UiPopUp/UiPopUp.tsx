import React from 'react';
import styles from './UiPopUp.module.scss';

type UiPopUpProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

const UiPopUp = ({ isOpen, setIsOpen, children }: UiPopUpProps) => {
    const modalClass = `${styles.modal} ${isOpen && styles.modal_open}`
    const backgroundClass = `${styles.wrapper} ${isOpen && styles.wrapper_open}`
    
    return (
        <div className={backgroundClass} onClick={() => setIsOpen(false)}>
            <div className={modalClass} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default UiPopUp;