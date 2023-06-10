// styles
import styles from './Header.module.css';

// others
import CtaButton from '../UI/CtaButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={`${styles.heading} heading`}>
          The best solution to run your IT project faster.
        </h1>
        <p className={`${styles.paragraph} paragraph`}>
          As businesses rely more heavily on technology, the need for reliable
          IT solutions has never been greater. At QReliance, we offer a range of
          services to help you design, manage, and secure your IT
          infrasturcture, so you can focus on growing you business.
        </p>
        <CtaButton text="Get Started" />
      </div>
    </header>
  );
};

export default Header;
