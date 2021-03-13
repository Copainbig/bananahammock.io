import React from 'react';
import styles from 'Styles/WelcomeLogo.scss';

const WelcomeLogo = () => {
  return (
    <div className={styles.bananaLogoContainer}>
      <div>
        <div className={styles.bananaTitle} data-testid="welcome-logo-title">
          BananaHammock.io
        </div>
        <img className={styles.bananaLogo}
          data-testid="welcome-logo-icon"
          src="https://bananahammock.io/assets/banana_logo_m.png"
          alt="banana hammock icon"/>
      </div>
    </div>
  );
};

export default WelcomeLogo;
