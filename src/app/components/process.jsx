import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./process.module.css";

const Process = () => {
    const [openProcess, setOpenProcess] = useState(1); // Start with process 1 open

    // Modified handler to only switch between processes, never close
    const handleProcessClick = (processNumber) => {
        if (processNumber !== openProcess) {
            setOpenProcess(processNumber);
        }
        // If clicking the same process, do nothing
    };

    return (
        <div className={styles.aboutProcess}>
          <div className={styles.singleProcess1}>
            <div className={`${styles.processTitle} ${openProcess === 1 ? styles.active : ''}`} 
                 onClick={() => handleProcessClick(1)}>
              <Image
                height={25}
                width={25}
                src={openProcess === 1 ? "/icons/add-black.png" : "/icons/add.png"}
                alt=""
                className={styles.processImage}
              />
              <div className={styles.processTitleReal}>
                Discovery
              </div>
            </div>
            {openProcess === 1 && (
              <div className={styles.processDescContainer}>
                <div className={styles.processDeco}>
                  DISCOVERY
                </div>
                <div className={styles.processDesc}>
                  Every impactful digital solution begins with understanding the unique challenges and goals of your business. In the Discovery phase, we dive deep into your brand, audience, and objectives to uncover insights that will shape a solution tailored to your needs. This step helps us identify the most effective approach to creating an online presence that resonates with your target audience and drives results.
                </div>
              </div>
            )}
          </div>

          <div className={styles.singleProcess2}>
            <div className={`${styles.processTitle} ${openProcess === 2 ? styles.active : ''}`}
                 onClick={() => handleProcessClick(2)}>
              <Image
                height={25}
                width={25}
                src={openProcess === 2 ? "/icons/add-black.png" : "/icons/add.png"}
                alt=""
                className={styles.processImage}
              />
              <div className={styles.processTitleReal}>
                Design
              </div>
            </div>
            {openProcess === 2 && (
              <div className={styles.processDescContainer}>
                <div className={styles.processDeco}>
                  DESIGNING
                </div>
                <div className={styles.processDesc}>
                  Armed with a solid foundation, we enter the Design phase, where our team crafts a visually engaging and intuitive experience. We go beyond aesthetics, designing an interface that supports your business goals—whether that's increasing engagement, improving user journeys, or driving conversions. Our goal is to create a digital environment where users naturally connect with your brand.
                </div>
              </div>
            )}
          </div>

          <div className={styles.singleProcess3}>
            <div className={`${styles.processTitle} ${openProcess === 3 ? styles.active : ''}`}
                 onClick={() => handleProcessClick(3)}>
              <Image
                height={25}
                width={25}
                src={openProcess === 3 ? "/icons/add-black.png" : "/icons/add.png"}
                alt=""
                className={styles.processImage}
              />
              <div className={styles.processTitleReal}>
                Development
              </div>
            </div>
            {openProcess === 3 && (
              <div className={styles.processDescContainer}>
                <div className={styles.processDeco}>
                  DEVELOPMENT
                </div>
                <div className={styles.processDesc}>
                  With the design in place, we bring the solution to life in the Development phase. Our team of developers builds a high-performing, responsive platform using the latest technologies, ensuring seamless functionality across all devices. From custom features to integrated tools, every aspect is tailored to meet your business needs, creating a solution that's both robust and scalable.
                </div>
              </div>
            )}
          </div>

          <div className={styles.singleProcess4}>
            <div className={`${styles.processTitle} ${openProcess === 4 ? styles.active : ''}`}
                 onClick={() => handleProcessClick(4)}>
              <Image
                height={25}
                width={25}
                src={openProcess === 4 ? "/icons/add-black.png" : "/icons/add.png"}
                alt=""
                className={styles.processImage}
              />
              <div className={styles.processTitleReal}>
                Publish
              </div>
            </div>
            {openProcess === 4 && (
              <div className={styles.processDescContainer}>
                <div className={styles.processDeco}>
                  PUBLISHING
                </div>
                <div className={styles.processDesc}>
                  In the Publish phase, we meticulously prepare your solution for launch, conducting rigorous testing to ensure every detail is flawless. Once live, we manage the deployment process and provide ongoing support to keep your digital presence secure, optimized, and aligned with evolving business goals. This isn't just a launch—it's the beginning of a solution that grows with your brand.
                </div>
              </div>
            )}
          </div>
        </div>
    );
};

export default Process;