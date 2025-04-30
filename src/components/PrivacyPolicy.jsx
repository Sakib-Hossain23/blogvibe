import styles from "./Legal.module.css";

const PrivacyPolicy = () => {
  return (
    <section className={styles.legalSection}>
      <h2 className={styles.title}>Privacy Policy</h2>
      <p className={styles.text}>
        Welcome to our website! Your privacy is very important to us. we respect
        your privacy and are committed to protecting your personal information.
      </p>
      <p className={styles.text}>
        Our website contains affiliate links, which means we may earn a small
        commission when you purchase products through those links.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
