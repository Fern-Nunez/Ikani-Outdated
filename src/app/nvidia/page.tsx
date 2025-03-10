"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "./nvidia.module.css";
import Navbar from "../components/navbar";

export default function Nvidia() {
  return (
    <div className={`${styles.bodyWrapper}`}>
        <Navbar initialColor="#76B900" scrollColor="#1b1b1b" />
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.title}>
          Nvidia
        </div>
        <div className={styles.subtitle}>
          Brand Makeover for leading company in computational technology 
        </div>
      </div>

      <Image
        height={1080}
        width={1920}
        src={"/images/nvidia-page-main-image.png"}
        alt=""
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        Objective
      </div>
      <div className={styles.sectionSubtitle}>
        The Espresso Yourself project aimed to create a functional coffee shop website where users could order coffee and earn points. Commissioned by college students for a class project, it delivered both functionality and a visually appealing, professional design.
      </div>
    </div>

    <Image
        height={1080}
        width={1920}
        src={"/images/nvidia-page-main-image.png"}
        alt=""
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
    />
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        Design Approach
      </div>
      <div className={styles.sectionSubtitle}>
        The color palette consisted of six carefully chosen shades to create a warm and cohesive feel. The font Raleway was selected for its clean and approachable style. These elements were seamlessly integrated into the design, resulting in a harmonious and professional outcome.
      </div>
    </div>

    <Image
        height={1080}
        width={1920}
        src={"/images/nvidia-page-main-image.png"}
        alt=""
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
    />
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        Challenges
      </div>
      <div className={styles.sectionSubtitle}>
        The project faced a tight one-week deadline but was completed in just three days. Despite the time constraints, the design achieved a warm, inviting aesthetic with the charm of a local business and a polished, professional look.
      </div>
    </div>

    <Image
        height={1080}
        width={1920}
        src={"/images/nvidia-page-main-image.png"}
        alt=""
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
    />
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        Results
      </div>
      <div className={styles.sectionSubtitle}>
        The finished design successfully achieves the goal of creating a website that feels like a small, local business while maintaining a clean and professional aesthetic. The warm tones, inviting layout, and seamless functionality deliver an excellent user experience.
      </div>
    </div>

    <Link href={"/nvidia"}>
      <div className={styles.nextPageContainer}>
        <div className={styles.nextPageTitle}>
          Nvidia
        </div>
        <Image
            height={1080}
            width={1920}
            src={"/images/nvidia-page-main-image.png"}
            alt=""
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </Link>

    <footer className={styles.footer}>
      <hr className={styles.serviceDivider}></hr>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          IKANI
        </div>
        <div>
        </div>
      </div>
    </footer>
    </div>
  );
}