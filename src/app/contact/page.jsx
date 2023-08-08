import React from 'react';
import Image from "next/image";
import styles from './page.module.css';
import Hero from "public/contact.png";

const Contact = () => {
    return (
        <div>
            <h1 className={styles.title}>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src={Hero} alt="Hero" className={styles.img} />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea
                        className={styles.textArea}
                        placeholder="message"
                        cols="20"
                        rows="8"
                    ></textarea>
                    <button className={styles.button}>Contact Us</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
