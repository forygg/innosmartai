import React, { useState } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    service: false,
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      email: !formData.email,
      privacyPolicy: !formData.privacyPolicy
    };
    setErrors(newErrors);
  
    if (!Object.values(newErrors).some(error => error)) {
      // Submit the form data
      console.log('Form submitted:', formData);
  
      fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.text())
        .then(data => {
          console.log('Success:', data);
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsSubmitted(false);
        });
    } else {
      // Display error message
      console.log('Please fill in all required fields');
      setIsSubmitted(false);
    }
  };

  return (
    <section className={styles.contact}>
      <h2>Свяжитесь с нами</h2>
      <span>Оставьте заявку, и мы свяжимся с вами в ближайшее время. Или напишите нам на почту sales@innosmart-ai.ru</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Как к вам обратиться?"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.error : ''}
        />
        <input
          type="email"
          name="email"
          placeholder="Почта"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.error : ''}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? styles.error : ''}
        />
        <input
          type="text"
          name="service"
          placeholder="Какой услугой вы интересуетесь?"
          value={formData.service}
          onChange={handleChange}
          className={errors.service ? styles.error : ''}
        />
        <button type="submit">
          <span>Отправить</span>
        </button>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            name="privacyPolicy"
            className={styles.checkbox}
            id="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
          />
          <label htmlFor="privacyPolicy" className={`${styles.checkboxLabel} ${errors.privacyPolicy ? styles.error : ''}`}>
            Я согласен с Политикой конфиденциальности
          </label>
        </div>
        {isSubmitted ? (
          <div className={styles.successMessage}>
            Ваша заявка отправлена, ответим вам как можно быстрее!
          </div>
        ) : (
          Object.values(errors).some(error => error) && (
            <div className={styles.errorMessage}>
              {errors.privacyPolicy ? 'Необходимо согласиться с Политикой конфиденциальности' : 'Заполните все поля'}
            </div>
          )
        )}
      </form>
    </section>
  );
};

export default ContactSection;