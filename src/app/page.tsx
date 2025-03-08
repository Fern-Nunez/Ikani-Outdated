"use client"

import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from 'react';
import styles from "./main.module.css";
import Navbar from "./components/navbar";
import Process from "./components/process";
import CustomCursor from './components/customCursor';
import ScrollFade from './components/scrollFade';
import Footer from './components/footer';

export default function Home() {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

  const [coinbaseImage, setCoinbaseImage] = useState("/images/coinbase.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCoinbaseImage("/images/coinbase-long.png");
      } else {
        setCoinbaseImage("/images/coinbase.png");
      }
    };

    // Set initial image
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
    <div className={styles.bodyWrapper}>
      <CustomCursor color="#008B64" />
      <Navbar initialColor="transparent" scrollColor="#1b1b1b" />
{/* -----------------------------------------------------Home---------------------------------------------------- */}
      <div className={styles.topbar}></div>
      <section id="home" className={styles.sections}>
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom1}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom2}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom3}`} />
        <div className={styles.gridBackground}></div>
        <div className={styles.homeContainer}>
          <div></div>
          <div className={styles.homeCopy}>
            <h1>UNLOCK YOUR</h1>
            <h1>DIGITAL POTENTIAL</h1>
          </div>
          <div className={styles.homeSubCopy}>
            <p>with Innovative Web Designs and Solutions, Tailored for You</p>
          </div>
          <div className={styles.homeButtonContainer}>
            <Link href={"/contact"}>
              <button className={styles.homeButton}>
                Contact
              </button>
            </Link>
          </div>
          <div></div>
          <div className={styles.homeArrowContainer}>
            <Image
              width={70}
              height={70}
              src={"/images/arrow.png"}
              alt="arrow-down"
              className={styles.arrowPic}
            />
          </div>
        </div>
      </section>
{/* -----------------------------------------------------Work---------------------------------------------------- */}
      <section id="work" className={styles.workSection}>
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom4}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom5}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom6}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom7}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom8}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom9}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom10}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom11}`} />
        <div className={styles.workGridContainer}>
          <div></div>
          <div className={styles.workGrid}>
            <Link href="/espresso">
              <ScrollFade delay={0}>
                <div className={styles.workItem}>
                  <Image
                    width={1000}
                    height={1454.9}
                    src={"/images/espresso-yourself.png"}
                    alt="espresso-yourself-work-picture"
                    className={styles.scaleImage}
                  />
                  <div className={styles.workTitle}>
                    Espresso Yourself
                  </div>
                  <div className={styles.workSubtitle}>
                    Creative coffee shop web design concept
                  </div>
                  <div className={styles.workDesc}>
                    <div className={styles.desc}>Web Design</div>
                    <div>•</div>
                    <div className={styles.desc}>Illustration</div>
                    <div>•</div>
                    <div className={styles.desc}>Artisanal</div>
                  </div>
                </div>
              </ScrollFade>
            </Link>

            <Link href={"/drsquatch"}>
              <ScrollFade delay={100}>
                <div className={styles.workItem}>
                  <Image
                    width={1000}
                    height={1454.9}
                    src={"/images/drsquatch1.png"}
                    alt="dr-squatch-work-picture"
                    className={styles.scaleImage}
                  />
                  <div className={styles.workTitle}>
                    Dr. Squatch              
                  </div>
                  <div className={styles.workSubtitle}>
                    A subscription based soap manufacturer
                  </div>
                  <div className={styles.workDesc}>
                    <div className={styles.desc}>Web Design</div>
                    <div>•</div>
                    <div className={styles.desc}>Illustration</div>
                    <div>•</div>
                    <div className={styles.desc}>Artisanal</div>
                  </div>
                </div>
              </ScrollFade>
            </Link>

            <Link href={"/nvidia"}>
              <ScrollFade delay={200}>
                <div className={styles.workItem}>
                  <Image
                    width={1000}
                    height={1454.9}
                    src={"/images/nvidia.png"}
                    alt="nvidia-work-picture"
                    className={styles.scaleImage}
                  />
                  <div className={styles.workTitle}>
                    Nvidia         
                  </div>
                  <div className={styles.workSubtitle}>
                    Brand Makeover for Tech's Biggest Innovator
                  </div>
                  <div className={styles.workDesc}>
                    <div className={styles.desc}>Web Design</div>
                    <div>•</div>
                    <div className={styles.desc}>Illustration</div>
                    <div>•</div>
                    <div className={styles.desc}>Artisanal</div>
                  </div>
                </div>
              </ScrollFade>
            </Link>

            <Link href={"/apple"}>
              <ScrollFade delay={300}>
                <div className={styles.workItem}>
                  <Image
                    width={1000}
                    height={1454.9}
                    src={"/images/apple.png"}
                    alt="apple-work-picture"
                    className={styles.scaleImage}
                  />
                  <div className={styles.workTitle}>
                    Apple
                  </div>
                  <div className={styles.workSubtitle}>
                    Redesign for the world's largest phone company
                  </div>
                  <div className={styles.workDesc}>
                    <div className={styles.desc}>Web Design</div>
                    <div>•</div>
                    <div className={styles.desc}>Illustration</div>
                    <div>•</div>
                    <div className={styles.desc}>Artisanal</div>
                  </div>
                </div>
              </ScrollFade>
            </Link>

            <Link href={"/coinbase"}>
              <ScrollFade delay={400}>
                <div className={styles.workItem}>
                  <Image
                    width={1000}
                    height={1454.9}
                    src={coinbaseImage}
                    alt="coinbase-work-picture"
                    className={styles.scaleImage}
                  />
                  <div className={styles.workTitle}>
                    Coinbase
                  </div>
                  <div className={styles.workSubtitle}>
                    Design system for a crypto asset intelligent solution
                  </div>
                  <div className={styles.workDesc}>
                    <div className={styles.desc}>Web Design</div>
                    <div>•</div>
                    <div className={styles.desc}>Illustration</div>
                    <div>•</div>
                    <div className={styles.desc}>Artisanal</div>
                  </div>
                </div>
              </ScrollFade>
            </Link>
          </div>
          <div></div>
        </div>
      </section>
{/* -----------------------------------------------------About---------------------------------------------------- */}
      <section id="about" className={styles.sections}>
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom12}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom13}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom15}`} />
        <div className={styles.aboutContainer}>
          <div>

          </div>
          <div className={styles.aboutTitle}>
            AT IKANI
          </div>
          <div className={styles.aboutSubtitle}>
            We believe in crafting digital experiences that not only look stunning but also drive results. With a team of dedicated professionals, we tailor our services to meet the unique needs of each client, ensuring that your online presence truly represents your brand.
          </div>
          <div>

          </div>
        </div>
          <div className={styles.processContainer}>
            <Process/>
          </div>
      </section>
{/* -----------------------------------------------------Services---------------------------------------------------- */}
      <section id="services" className={styles.sections}>
        <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom16}`} />
        <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom17}`} />
        <div className={styles.serviceContainer}>
          <div className={styles.serviceLeft}>
            <div>
              WHAT
            </div>
            <div>
              WE DO
            </div>
          </div>
          <div className={styles.serviceRight}>
            {[
              {
                title: "Custom Website Design & Development",
                description: "We craft fully customized websites tailored to your brand's needs and vision. From design to development, we create responsive, high-performing websites that are built to engage and convert."
              },
              {
                title: "Custom Application Design & Development",
                description: "Our team develops custom web applications designed to streamline your business operations and deliver an intuitive user experience. Each application is tailored to your unique requirements for maximum impact."
              },
              {
                title: "No Code Website Solutions",
                description: "For clients who need a quick solution, we offer high-quality template websites built in a single day. These are perfect for startups or small businesses looking to establish a strong online presence quickly."
              },
              {
                title: "Website Hosting & Maintenance",
                description: "Enjoy worry-free hosting and regular maintenance to keep your website secure, up-to-date, and running smoothly. We handle all technical details so you can focus on your business."
              },
              {
                title: "Performance Monitoring and Optimization",
                description: "We continuously monitor your site's performance, ensuring fast load times and smooth user experience. Our optimization services keep your website at peak efficiency."
              }
            ].map((service, index) => (
              <div key={index}>
                <div className={styles.service} onClick={() => setOpenServiceIndex(index === openServiceIndex ? null : index)}>
                  <div className={styles.serviceName}>
                    {service.title}
                  </div>
                  <div className={styles.plus}>
                    <Image
                      height={25}
                      width={25}
                      src="/icons/add.png"
                      alt="toggle"
                      className={openServiceIndex === index ? styles.rotate : ''}
                    />
                  </div>
                </div>
                <hr className={styles.serviceDivider} />
                <div className={`${styles.serviceDesc} ${openServiceIndex === index ? styles.active : ''}`}>
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* -----------------------------------------------------Contact---------------------------------------------------- */}
      <section id="contact" className={styles.sections}>
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom18}`} />
      <img src="/images/bloom.svg" alt="bloom" className={`${styles.bloom} ${styles.bloom19}`} />
        <div className={styles.contactContainer}>
          <div className={`${styles.outlineText} ${styles.contactText1}`}>
            IKANIIKANIIKANIIKANIIKANIIKANIIKANIIKANIIKANI
          </div>
          <Link href={"/contact"}>
            <button className={styles.contactSectionButton}>
              Let's Get Started
            </button>
          </Link>
          <div className={`${styles.outlineText} ${styles.contactText2}`}>
            IKANIIKANIIKANIIKANIIKANIIKANIIKANIIKANIIKANI
          </div>
        </div>
      </section>
{/* -----------------------------------------------------Footer---------------------------------------------------- */}
    </div>
      <Footer />
    </div>
  );
}