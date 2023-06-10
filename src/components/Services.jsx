// styles
import styles from './Services.module.css';

// components
import Service from '../UI/Service';
import CtaButton from '../UI/CtaButton';

const services = [
  {
    title: 'IT Management',
    body: 'We help businesses by making sure their technology systems work well and meet their goals. This includes tasks like fixing hardware and software, keeping the network safe, organizing data, and planning for future technology needs.',
    iconKey: 'manage',
  },
  {
    title: 'Software Engineering',
    body: 'We specialize in software engineering, which is the process of using engineering principles and methods to design, develop, and maintain high-quality software systems during development.',
    iconKey: 'soft',
  },
  {
    title: 'Cloud Computing',
    body: 'We assist businesses and individuals with cloud computing, which enables access to data, software, and other resources online. Our service helps to reduce costs, increase flexibility, and improve teamwork.',
    iconKey: 'cloud',
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h3 className="subheading">Our Service</h3>
      <h2 className={`${styles.heading} heading`}>
        We Offer a Wide Variety of IT Services
      </h2>
      <CtaButton text="See More" />
      <div className={styles['services-container']}>
        {services.map((s) => (
          <Service
            key={s.title}
            title={s.title}
            body={s.body}
            iconKey={s.iconKey}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
