// styles
import styles from './Service.module.css';

// lib imports
import {
  FolderOpenIcon,
  CloudIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

const Service = ({ title, body, iconKey }) => {
  return (
    <div className={styles.service}>
      <div className={styles['icon-container']}>
        {iconKey === 'manage' && (
          <FolderOpenIcon
            width={24}
            height={24}
          />
        )}
        {iconKey === 'soft' && (
          <CodeBracketIcon
            width={24}
            height={24}
          />
        )}
        {iconKey === 'cloud' && (
          <CloudIcon
            width={24}
            height={24}
          />
        )}
      </div>
      <div className={styles.desc}>
        <h4 className={styles['service-heading']}>{title}</h4>
        <p className={`${styles['description']} paragraph `}>{body}</p>
      </div>
    </div>
  );
};

export default Service;
