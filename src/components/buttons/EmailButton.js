import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from 'Styles/buttons/EmailButton.scss';

const EmailButton = (props) => {
  const [showOpenEnvelope, setOpenEnvelope] = useState(false);

  const linkHref = `mailto: ${props.emailAddress}`;
  const imageLink = showOpenEnvelope ? 'https://bananahammock.io/assets/envelope_open.png' : 'https://bananahammock.io/assets/envelope_closed.png';

  return (
    <div className={styles.emailButton} data-testid='emailbutton-div'>
      <a href={linkHref}>
        <img
          src={imageLink}
          alt='contact me'
          onMouseOver={() => setOpenEnvelope(true)}
          onMouseOut={() => setOpenEnvelope(false)}
          data-testid='envelope-icon'
        />
      </a>
    </div>
  );
};

EmailButton.propTypes = {
  emailAddress: PropTypes.string,
};

export default EmailButton;
