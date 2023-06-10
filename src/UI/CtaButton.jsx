// lib imports
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// styles
import styles from './CtaButton.module.css';

const CtaButton = ({ text }) => {
  return (
    <button className={styles.button}>
      {text}{' '}
      <ArrowRightIcon
        width={20}
        height={20}
      />{' '}
    </button>
  );
};

export default CtaButton;
