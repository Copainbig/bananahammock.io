import React from 'react';
import './../styles/welcomeLogo.css';

const WelcomeLogo = () => {
    return (
        <div>
            <div className="bananaTitle"> BananaHammock.io </div>
            <img className="bananaLogo" 
                src="https://s3.amazonaws.com/bananahammock.io.public/banana_logo_m.png"
                alt="banana hammock icon" 
            />
        </div>
    )
};

export default WelcomeLogo;