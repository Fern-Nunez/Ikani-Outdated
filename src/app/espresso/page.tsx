"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import styles from "./espresso.module.css";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import CustomCursor from '../components/customCursor';
import ScrollFade from "../components/scrollFade";

export default function Espresso() {
  const content = " Branding \u2003•\u2003 Website\u00A0Design \u2003•\u2003 Illustration \u2003•\u2003 ";

  return (
    <div className={styles.bodyWrapper}>
      <CustomCursor color="#008B64" />
      <Navbar initialColor="#223635" scrollColor="#1b1b1b" />
      <div className={styles.top}>
          <div className={styles.title}>
            Espresso Yourself Cafe
          </div>
          <div className={styles.subTitle}>
            Creative Coffee Shop Website Design
          </div>
          <div>
            <Image
            src={"/images/espresso-page-main-image.png"}
            alt="Espresso Yourself"
            width={2560}
            height={1440}
            />
          </div>
      </div>
     
      <div className={styles.contentContainer}>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          <div className={`${styles.marqueeText}`}>
            {content}{content}{content}{content}
          </div>
          <div className={`${styles.marqueeText}`}>
            {content}{content}{content}{content}
          </div>
        </div>
      </div>

        <div className={styles.section}>
          <ScrollFade delay={300}>
            <div className={styles.sectionTitle}>
              Objective
            </div>
            <div className={styles.sectionContent}>
              The Espresso Yourself project, completed in just three days, combines the charm of a local coffee shop with a polished design. Created for a college project, it lets users order coffee, earn points, and enjoy a seamless experience.
            </div>
          </ScrollFade>
          <ScrollFade delay={300}>
            <div>
              <Image
              src={"/images/espresso-page-main-image.png"}
              alt="Espresso Yourself"
              width={1944}
              height={1043.5}
              className={styles.sectionImage}
              />
            </div>
          </ScrollFade>
        </div>
        <div className={styles.section}>
          <ScrollFade delay={300}>
            <div className={styles.sectionTitle}>
              Design Approach
            </div>
            <div className={styles.sectionContent}>
              The color palette consisted of six carefully chosen shades to create a  warm and cohesive feel. The font Raleway was selected for its clean and  approachable style. These elements were seamlessly integrated into the  design, resulting in a harmonious and professional outcome.
            </div>
          </ScrollFade>
          <ScrollFade delay={300}>
          <Image
          src={"/images/pallete.png"}
          alt="Espresso Yourself"
          width={1944}
          height={1043.5}
          className={styles.sectionImage}
          />
          </ScrollFade>
        </div>
        <div className={styles.section}>
          <ScrollFade delay={200}>
            <div className={styles.sectionTitle}>
              Results
            </div>
            <div className={styles.sectionContent}>
              The finished design successfully achieves the goal of creating a website that feels like a small, local business while maintaining a clean and  professional aesthetic. The warm tones, inviting layout, and seamless  functionality deliver an excellent user experience.
            </div>
          </ScrollFade>
          <div></div>
        </div>
      </div>
      <Link href={"/nvidia"}>
        <div className={styles.nextProject}>
          <div className={styles.nextProjectTitle}>
            Nvidia
          </div>
          <div>
            <Image
            src={"/images/nvidia-page-main-image.jpg"}
            alt="Nvidia"
            width={2560}
            height={700}
            />
          </div>
        </div>
      </Link>
      <Footer />
    </div>
  );
}