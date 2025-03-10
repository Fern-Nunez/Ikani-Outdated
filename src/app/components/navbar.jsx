import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = ({ initialColor, scrollColor }) => {
    const [navbarColor, setNavbarColor] = useState(initialColor);
    const [isOpen, setIsOpen] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setNavbarColor(scrollColor);
            } else {
                setNavbarColor(initialColor);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial color check
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [initialColor, scrollColor]); // Add dependencies

    const handleMenuClick = () => {
        if (!isOpen) {
            setIsPulsing(true);
            setTimeout(() => {
                setIsMenuVisible(true);
            }, 300);
        } else {
            setIsClosing(true);
            setIsMenuVisible(false);

            setTimeout(() => {
                setIsPulsing(false);
                setIsClosing(false);
            }, 500);
        }
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={styles.headerWrapper}
            style={{ backgroundColor: navbarColor }}
        >
            <header className={styles.head}>
                <Link href="/" className={styles.logo}>
                    IKANI
                </Link>
                <div className={styles.menuContainer}>
                    <div className={styles.menuIconContainer}>
                        <Image
                            height={27}
                            width={27}
                            src={"/icons/menu.png"}
                            alt="menu"
                            onClick={handleMenuClick}
                            className={`${styles.menuIcon} ${styles.cursorPointer} ${
                                isOpen ? styles.rotate : styles.visible
                            }`}
                        />

                        <Image
                            height={27}
                            width={27}
                            src={"/icons/x.png"}
                            alt="close"
                            onClick={handleMenuClick}
                            className={`${styles.closeIcon} ${styles.cursorPointer} ${
                                isOpen ? styles.visible : ""
                            } ${isClosing ? styles.closing : ""}`}
                        />
                    </div>

                    <div className={styles.menuPulseContainer}>
                        <div
                            className={`${styles.menuPulse} ${
                                isPulsing && !isClosing ? styles.active : ""
                            } ${isClosing ? styles.closing : ""}`}
                        />
                        <div
                            className={`${styles.closeRing} ${
                                isClosing ? styles.active : ""
                            }`}
                        />
                    </div>

                    <div
                        className={`${styles.menuLinks} ${
                            isMenuVisible ? styles.visible : ""
                        }`}
                    >
                        <div
                            className={`${styles.menuItems} ${
                                isMenuVisible ? styles.visible : ""
                            }`}
                        >
                            <Link
                                href="/#work"
                                className={styles.link}
                                onClick={handleMenuClick}
                            >
                                Work
                            </Link>
                            <hr className={styles.serviceDivider}></hr>
                            <Link
                                href="/#about"
                                className={styles.link}
                                onClick={handleMenuClick}
                            >
                                About
                            </Link>
                            <hr className={styles.serviceDivider}></hr>
                            <Link
                                href="/#services"
                                className={styles.link}
                                onClick={handleMenuClick}
                            >
                                Services
                            </Link>
                            <hr className={styles.serviceDivider}></hr>
                            <Link href={"/contact"}>
                                <div
                                    className={styles.link}
                                    aria-label="Contact Us"
                                    onClick={handleMenuClick}
                                >
                                    Contact
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
