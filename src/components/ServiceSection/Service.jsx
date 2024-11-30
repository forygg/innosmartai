import React, { useEffect } from 'react';
import styles from './ServiceSection.module.css';

const ServicesSection = ({ onContactClick }) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.fadeIn);
                    }
                });
            },
            { threshold: 0.2 } // Adjust threshold as needed
        );

        const elements = document.querySelectorAll(`.${styles.sectionTitle}, .${styles.sectionSubtitle}, .${styles.card}`);
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <section className={styles.servicesSection}>
            <div className={styles.circle} />
            <h2 className={styles.sectionTitle}>Автоматизация бизнес процессов с помощью AI</h2>
            <p className={styles.sectionSubtitle}>
                Оптимизируем и автоматизируем ваши процессы для увеличения эффективности, сокращения расходов
                и роста прибыли. Позвольте технологиям сделать рутинные задачи быстрее и точнее
            </p>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Анализ больших данных</h3>
                        <ul className={styles.cardText}>
                            <li>Извлечение ценной информации из огромных объемов данных</li>
                            <li>Прогнозирование поведения клиентов и рыночных тенденций</li>
                            <li>Создание отчетов и аналитики для принятия стратегических решений</li>
                        </ul>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Машинное зрение</h3>
                        <ul className={styles.cardText}>
                            <li>Распознавание объектов и изображений для автоматизации визуальных процессов</li>
                            <li>Контроль качества продукции с помощью анализа изображений</li>
                            <li>Система видеонаблюдения и мониторинг для обеспечения безопасности</li>
                        </ul>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Распознавание текста</h3>
                        <ul className={styles.cardText}>
                            <li>Автоматическая обработка и анализ документов</li>
                            <li>Перевод изображений текста в цифровой формат</li>
                            <li>Оптимизация документооборота для сокращения времени и ошибок</li>
                        </ul>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>R&D проекты</h3>
                        <ul className={styles.cardText}>
                            <li>Разработка уникальных AI-решений под нужды вашего бизнеса</li>
                            <li>Исследование и тестирование инновационных технологий</li>
                            <li>Прототипирование и внедрение передовых решений</li>
                        </ul>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Генеративный ИИ</h3>
                        <ul className={styles.cardText}>
                            <li>Автоматическое создание текстов для статей, предложений и отчетов</li>
                            <li>Генерация брендированного визуального контента — изображения, баннеры, презентации</li>
                            <li>Разработка умного чат-бота, который продает услуги компании и взаимодействует с клиентами</li>
                            <li>Персонализированные рекомендации для клиентов</li>
                        </ul>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;