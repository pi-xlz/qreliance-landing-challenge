// style
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['logo-container']}>
          <h2 className={styles.logo}>QuickSelar</h2>
          <p className={styles.about}>
            We are a dynamic and innovative company that is dedicated to
            delivering cutting-edge solutions to our clients.
          </p>
        </div>

        {/* <div className={styles['links-container']}> */}
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>IT Services</h2>
          <ul className={styles.links}>
            <li>IT Services</li>
            <li>Cyber Security</li>
            <li>Cloud Computing</li>
            <li>Managed IT</li>
            <li>IT Support</li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>Quick Links</h2>
          <ul className={styles.links}>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>
        {/* </div> */}
      </div>

      <span className={styles.copy}>© 2023 QReliance. All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
