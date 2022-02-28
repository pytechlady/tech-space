import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlus, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialAccounts = () => {
  return (
    <div className="social-accounts">
                        <div className="fb"><FontAwesomeIcon className="centered" icon={faFacebookF} /></div>
                        <div className="gg"><FontAwesomeIcon className="centered" icon={faGooglePlus} /></div>
                        <div className="tw"><FontAwesomeIcon className="centered" icon={faTwitter} /></div>
                        <div className="yt"><FontAwesomeIcon className="centered" icon={faYoutube} /></div>
                        <div className="li"><FontAwesomeIcon className="centered" icon={faLinkedin} /></div>
                    </div>
  )
}

export default SocialAccounts