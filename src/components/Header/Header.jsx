import React from 'react';
import styles from './Header.module.css';
import arrow from '../../assets/arrow.svg';



const Header = ({ onContactClick }) => {

    const scrollToHero = () => {
        const heroElement = document.getElementById("hero");
        if (heroElement) {
            heroElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.header}>
            <button className={styles.button} onClick={onContactClick}> Оставить заявку</button>
            <div className={styles.circlesContainer}>
                <div className={styles.earth}>
                    <div className={styles.moon}></div>
                </div>
            </div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                    InnoSmart
                    <div className={styles.animContainer}>
                        <div className={styles.topBar}></div>
                        <span className={styles.titleHighlight}>AI</span>
                        <div className={styles.bottomBar}></div>
                    </div>
                </h1>
                <span className={styles.subtitle}>
                    Создаем AI решения для бизнеса: ускоряем, оптимизируем, выводим на новый уровень
                </span>
            </div>
            <div className={styles.move} onClick={scrollToHero}>
                <img src={arrow} alt='/' />
            </div>
        </header>
    );
};

export default Header;
