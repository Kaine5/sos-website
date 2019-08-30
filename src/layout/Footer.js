import React, { useState } from "react";
import styles from "../styles/Footer.module.scss";
import axios from "axios";

import { ReactComponent as FacebookLogo } from "../logos/Facebook logo.svg";
import { ReactComponent as InstagramLogo } from "../logos/Instagram Logo.svg";
import { ReactComponent as TwitterLogo } from "../logos/Twitter logo.svg";
import { ReactComponent as LinkedInLogo } from "../logos/Linkedin logo.svg";
import { ReactComponent as ShortcutLogo } from "../logos/Shortcut Logo.svg";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};
function Footer() {
  const [currentEmail, setCurrentEmail] = useState("");
  const handleSubmit = e => {
    console.log(e.target);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const mail_chimp =
      "https://theshortcut.us12.list-manage.com/subscribe/post-json?u=4dd5200f27d975e60d3f59cd1&id=e34bc78430&EMAIL=";
    e.preventDefault();
    axios
      .post(`${proxy}${mail_chimp}${currentEmail}`, {}, axiosConfig)
      .then(res => {
        if (res.data.result === "success") {
          // If result is success
          console.log(res);
          setCurrentEmail("");
        } else {
          // If not success
          console.log(res);
          setCurrentEmail("");
        }
      })
      .catch(err => console.log(err));
  };
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
              <FacebookLogo className={styles.logo} />
            </div>
            <div>
              <InstagramLogo className={styles.logo} />
            </div>
            <div>
              <TwitterLogo className={styles.logo} />
            </div>
            <div>
              <LinkedInLogo className={styles.logo} />
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
            <form onSubmit={handleSubmit} className={styles.flexContainerInput}>
              <input
                className={styles.text}
                type='text'
                placeholder='Your email'
                name='school'
                onChange={e => setCurrentEmail(e.target.value)}
                value={currentEmail}
                autoComplete='off'
              />
              <input className={styles.go} type='submit' value='Go' />
            </form>
          </div>

          <input className={styles.contact} type='submit' value='Contact us' />
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
