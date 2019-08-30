import React from "react";
import styles from "../styles/Footer.module.scss";

import { ReactComponent as FacebookLogo } from "../logos/Facebook logo.svg";
import { ReactComponent as InstagramLogo } from "../logos/Instagram Logo.svg";
import { ReactComponent as TwitterLogo } from "../logos/Twitter logo.svg";
import { ReactComponent as LinkedInLogo } from "../logos/Linkedin logo.svg";
import { ReactComponent as ShortcutLogo } from "../logos/Shortcut Logo.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.flexContainer}>
        <div className={styles.flexContainerLeft}>
          {/* <div>
            <img className="shortcutlogo" src="/img/shortcutlogo.png" />
          </div> */}
          <ShortcutLogo className={styles.shortcutlogo} />
          <div className={styles.flexContainerMedia}>
            <div>
              <a href={'https://www.facebook.com/theshortcut/'}><FacebookLogo className={styles.logo} /></a>
            </div>
            <div>
              <a href={'https://www.instagram.com/theshortcutorg/?hl=fi'}><InstagramLogo className={styles.logo} /></a>
            </div>
            <div>
              <a href={'https://twitter.com/theshortcutorg'}><TwitterLogo className={styles.logo} /> </a>
            </div>
            <div>
              <a href={'https://www.linkedin.com/company/theshortcut/'}><LinkedInLogo className={styles.logo} /></a>
            </div>
          </div>
          <p className={styles.infoLeft}>
            ©2019 The Shortcut. Terms of Service and Data Description{" "}
          </p>
          <p className={styles.infoLeft}>
            Lapinlahdenkatu 16 (Entrance 15B), 00180 Helsinki
          </p>
        </div>

        <div className={styles.flexContainerRight}>
          <div className={styles.subscribe}>
            <p className={styles.newsletter}>Subsribe to our newsletter</p>
            <div className={styles.flexContainerInput}>
              <input
                className={styles.text}
                type='text'
                placeholder='Your email'
                name='school'
              />
              <input className={styles.go} type='submit' value='Go' />
            </div>
          </div>

          <a href="mailTo:info@theshortcut.org"><input className={styles.contact} type='submit' value='Contact us' /></a>
          <p className={styles.info}>
            info@theshortcut.org | (+358) 46 571 2720{" "}
          </p>
          <p className={styles.info}> Learn about our Privacy Policies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
