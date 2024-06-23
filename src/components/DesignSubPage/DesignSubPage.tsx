import React from 'react';
import styles from './DesignSubPage.module.scss';
import UiSubPage from '../UiSubPage/UiSubPage';


const DesignSubPage = () => {
    return (
        <section className={styles.wrapper}>
            <UiSubPage 
                isStandart={true}
                title='Design guidelines'
                text='Get  universal instruction of your visuals so every time you decided to hire a designer he can follow them'
                link='/'
                color='magenta'
            />
            <UiSubPage 
                isStandart={false}
                title='Socials design'
                text='Get unique design  of various complexity for your business or personal projects to stand out among competitors!  '
                link='/'
                color='magenta'
            />
            <UiSubPage 
                isStandart={true}
                title='Personalized project'
                text='Custom project - perfect for someone who want have more or less.'
                link='/'
                color='magenta'
            />
        </section>
    )
}

export default DesignSubPage;