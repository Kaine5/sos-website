import React from "react";
import { ReactComponent as FacebookLogo } from "../Facebook logo.svg";
import { ReactComponent as InstagramLogo } from "../Instagram Logo.svg";
import { ReactComponent as TwitterLogo } from "../Twitter logo.svg";
import { ReactComponent as LinkedInLogo } from "../Linkedin logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex-container">
        <div className="flex-container-left">
          <div>
            <img className="shortcutlogo" src="/img/shortcutlogo.png" />
          </div>
          <div className="flex-container-media">
            <div>
              <FacebookLogo className="logo" />
            </div>
            <div>
              <InstagramLogo className="logo" />
            </div>
            <div>
              <TwitterLogo className="logo" />
            </div>
            <div>
              <LinkedInLogo className="logo" />
            </div>
          </div>
          <p className="info-left">
            ©2019 The Shortcut. Terms of Service and Data Description{" "}
          </p>
          <p className="info-left">
            Lapinlahdenkatu 16 (Entrance 15B), 00180 Helsinki
          </p>
        </div>

        <div className="flex-container-right">
          <div>
            <p className="newsletter">Subsribe to our newsletter</p>
            <div className="flex-container-input">
              <input
                className="text"
                type="text"
                placeholder="Your email"
                name="school"
              />
              <input className="go" type="submit" value="Go" />
            </div>
          </div>

          <input className="contact" type="submit" value="Contact us" />
          <p className="info">info@theshortcut.org | (+358) 46 571 2720 </p>
          <p className="info"> Learn about our Privacy Policies</p>
        </div>
      </div>
    </div>
  );
}
