import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.serviceDivider} />
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          IKANI
        </div>
        <div className={styles.footerLinks}>
          <div>Work</div>
          <div>About</div>
          <div>Services</div>
        </div>
      </div>
    </footer>
  );
}
