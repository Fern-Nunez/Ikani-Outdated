"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import styles from "./contact.module.css";
import Navbar from "../components/navbar";
import CustomCursor from '../components/customCursor';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
    <Navbar initialColor="transparent" scrollColor="#1b1b1b" />
    <div>
    <div className={styles.bodyWrapper}>
      <CustomCursor color="#008B64" />
      <div className={styles.bloomSection}>
        <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom1}`} />
        <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom2}`} />
        <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom3}`} />
      </div>
        <div className={styles.contentContainer}>


          <div className={styles.left}>
            <div className={styles.title}>
              <div>
                GET IN
              </div>
              <div>
                TOUCH
              </div>
            </div>
            <div className={styles.subTitle}>
              Prefer to email directly? Reach us at&nbsp; 
              <span style={{ color: '#008B64' }}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=inquiry@ikani.co&su=Email%20Inquiry&body=Hello%20Ikani%20team,"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#008B64', textDecoration: 'underline' }}
              >
                inquiry@ikani.co
              </a>


              </span>
            </div>
          </div>

  
          <div className={styles.right}>
            <form>
              <div className={styles.top}>
                <div className={styles.section}>
                  <div className={`${styles.requiredInput} ${styles.firstName}`}>
                    <input type="text" className={styles.formInput} placeholder="First Name" required />
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={`${styles.requiredInput} ${styles.lastName}`}>
                    <input type="text" className={styles.formInput} placeholder="Last Name" required />
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <div className={`${styles.requiredInput} ${styles.email}`}>
                  <input type="email" className={styles.formInput} placeholder="Email Address" required />
                </div>
              </div>

              <div className={styles.section}>
                <div className={`${styles.requiredInput} ${styles.company}`}>
                  <input type="text" className={styles.formInput} placeholder="Company Name" required />
                </div>
              </div>

              <div className={styles.section}>
                <input type="text" className={styles.formInput} placeholder="Existing URL" />
              </div>

              <div className={styles.section}>
                <div className={`${styles.requiredInput} ${styles.phone}`}>
                  <input type="tel" className={styles.formInput} placeholder="Phone Number" required />
                </div>
              </div>

              <div className={styles.section}>
                <div className={`${styles.requiredInput} ${styles.service}`}>
                  <input type="text" className={styles.formInput} placeholder="Service Needed" required />
                </div>
              </div>

              <div className={styles.section}>
                <input type="text" className={styles.formInput} placeholder="Additional Details" />
              </div>

              <div className={styles.buttonContainer}>
                <button className={styles.sendButton}>Send Inquiry</button>
              </div>

            </form>
          </div>

        </div>
    </div>
      <Footer />
    </div>
    </>
  );
}