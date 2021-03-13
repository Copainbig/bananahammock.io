import React from 'react';
import styles from 'Styles/footer/Footer.scss';

import EmailButton from 'Sources/components/buttons/EmailButton';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <EmailButton emailAddress="charles@bananahammock.io" />
    </div>
  );
};

export default Footer;
