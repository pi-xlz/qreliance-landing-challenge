// others
import CtaButton from '../UI/CtaButton';

// styles
import styles from './AllTech.module.css';

const AllTech = () => {
  return (
    <section className={styles['all-tech']}>
      <h3 className={`${styles.subheading} subheading`}>
        We Offer Best IT Services
      </h3>
      <div className={styles['icon-container']}></div>
      <h2 className={`${styles.heading} heading`}>
        Easy Solutions for all Difficult IT Problems
      </h2>
      <CtaButton text="Get Started" />
    </section>
  );
};

export default AllTech;
