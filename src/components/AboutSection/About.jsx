import React, { useEffect } from 'react';
import styles from './About.module.css';
import icons from '../../assets/icons.svg';

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.circle}/>
      <h2 className={styles.sectionTitle}>Коротко о нас</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Большой опыт</h3>
          <p className={styles.cardText}>
            Команда профессиональных разработчиков с большим опытом в сфере разработки ПО и искусственного интеллекта
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Современный инструментарий</h3>
          <p className={styles.cardText}>
            Используем только современный инструментарий разработки, не идем на компромиссы и не ищем легких путей для достижения поставленных целей
          </p>
          <div className={styles.iconContainer}>
            <img src={icons} alt='/' />
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Индивидуальный подход</h3>
          <p className={styles.cardText}>
            Всегда готовы подробно обсудить условия и перечень работ, чтобы прийти к наилучшим условиям для заказчика. Предлагаем гибкие и масштабируемые решения, которые растут вместе с вашим бизнесом
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Поддержка</h3>
          <p className={styles.cardText}>
            Мы предоставляем полную поддержку и обслуживание после запуска, гарантируя бесперебойную работу
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;