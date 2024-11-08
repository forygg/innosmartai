import React, { useEffect } from 'react';
import styles from './Hero.module.css';
import image from '../../assets/666.png';

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
          }
        });
      },
      { threshold: 0.5}// Adjust threshold as needed
    );

    const heroSection = document.querySelector(`.${styles.hero}`);
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.leftRectangle}></div>
      <div className={styles.rightRectangle}></div>
      <p className={styles.mainText}>
        Наша страсть — создавать умные системы, которые преумножают вашу прибыль с помощью передовых AI-решений
      </p>
      <div className={styles.experienceContainer}>
        <img src={image} alt="/" className={styles.experienceNumber} />
        <span className={styles.experienceText}>лет опыта разработки</span>
      </div>
    </section>
  );
};

export default HeroSection;