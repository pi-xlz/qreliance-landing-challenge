// styles
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h3 className="subheading">About Company</h3>
      <h2 className={`${styles.heading} heading`}>Who we are</h2>
      <div className={styles.wrapper}>
        <div className={styles.customers}>
          <span className={styles.subtext}>
            Over <span className={styles.catch}>2500+</span> Customers
          </span>
        </div>
        <p className={`${styles.paragraph} paragraph`}>
          We are a team of passionate IT professionals dedicated to delivering
          cutting-edge solutions to businesses of all sizes. Our expertise spans
          across a range of industries, and we are committed to providing
          customized services to suit your unique needs.
        </p>
      </div>

      <div className={styles.years}>
        <span className={styles['big-flex']}>27 years and still going!</span>
      </div>
    </section>
  );
};

export default About;
