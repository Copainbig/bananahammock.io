import React from 'react';

const WelcomeLogo = () => {
    return (
        <div className="bananaLogoContainer">
            <div>
                <div className="bananaTitle" data-testid="welcome-logo-title"> BananaHammock.io </div>
                <img className="bananaLogo" 
                    data-testid="welcome-logo-icon"
                    src="https://s3.amazonaws.com/bananahammock.io.public/banana_logo_m.png"
                    alt="banana hammock icon" 
                />
            </div>
        </div>
    )
};

export default WelcomeLogo;