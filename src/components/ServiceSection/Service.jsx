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
                        <p className={styles.cardText}>
                            • Извлечение ценной информации из огромных объемов данных<br />
                            • Прогнозирование поведения клиентов и рыночных тенденций<br />
                            • Создание отчетов и аналитики для принятия стратегических решений
                        </p>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Машинное зрение</h3>
                        <p className={styles.cardText}>
                            • Распознавание объектов и изображений для автоматизации визуальных процессов<br />
                            • Контроль качества продукции с помощью анализа изображений<br />
                            • Система видеонаблюдения и мониторинг для обеспечения безопасности
                        </p>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Распознавание текста</h3>
                        <p className={styles.cardText}>
                            • Автоматическая обработка и анализ документов<br />
                            • Перевод изображений текста в цифровой формат<br />
                            • Оптимизация документооборота для сокращения времени и ошибок
                        </p>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>R&D проекты</h3>
                        <p className={styles.cardText}>
                            • Разработка уникальных AI-решений под нужды вашего бизнеса<br />
                            • Исследование и тестирование инновационных технологий<br />
                            • Прототипирование и внедрение передовых решений
                        </p>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Генеративный ИИ</h3>
                        <p className={styles.cardText}>
                            • Автоматическое создание текстов для статей, предложений и отчетов<br />
                            • Генерация брендированного визуального контента — изображения, баннеры, презентации<br />
                            • Разработка умного чат-бота, который продает услуги компании и взаимодействует с клиентами<br />
                            • Персонализированные рекомендации для клиентов
                        </p>
                    </div>
                    <button className={styles.button} onClick={onContactClick}>Заказать</button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;