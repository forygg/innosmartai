import React from 'react';
import styles from './Footer.module.css';
import privacyPolicyPdf from '../../assets/privacy_policy.pdf';

const Footer = ( {onContactClick} ) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftblock}>
                <div className={styles.logo}>
                    InnoSmart <span>AI</span>
                </div>
                <div className={styles.mail}>
                    sales@innosmart-ai.ru
                </div>
            </div>
            <div className={styles.middleblock}>
            <a 
                href={privacyPolicyPdf} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Политика конфиденциальности
            </a>
            </div>
            <div className={styles.rightblock} onClick={onContactClick}>
                <div className={styles.button}>
                    <span>
                        Оставить заявку
                    </span>
                </div>   
            </div>
        </footer>
    );
};

export default Footer;
