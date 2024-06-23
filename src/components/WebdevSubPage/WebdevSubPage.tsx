import React from 'react';
import styles from './WebdevSubPage.module.scss';
import UiSubPage from '../UiSubPage/UiSubPage';


const WebdevSubPage = () => {
    return (
        <section className={styles.wrapper}>
            <UiSubPage 
                isStandart={true}
                title='Basic website'
                text='Choose one of our templates, and receive your website in the shortest terms.'
                link='/'
                color="blue"
            />
            <UiSubPage 
                isStandart={false}
                title='Individual website'
                text= <>Get a website which cover your needs <br /> + more customization options'</>
                link='/'
                color='blue'
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text='Absolutely unique website which would make you pop up around your competitors, more functious, more'
                link='/'
                color='blue'
            />
        </section>
    )
}

export default WebdevSubPage;