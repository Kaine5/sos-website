import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/GetInvolved.module.scss";
import Button from "../components/Button";

const GetInvolved = props => {
  const [headText, setHeadText] = useState(
    "Want to get involved? <br/> Click on one of two buttons below!"
  );
  return (
    <div className={styles.getInvolved}>
      <Header />

      <div className="">
        <p
          className={styles.item1}
          dangerouslySetInnerHTML={{ __html: `${headText}` }}
        ></p>

        <div className={styles.item2}>
          <div className={styles.btnImage}>
            <Button
              height="20vmax"
              width="20vmax"
              name="Be a sponsor"
              backgroundImage={`url("/img/btn-illustration21.png")`}
              onClick={() =>
                setHeadText(
                  "Become an SOS 2019 sponsor and connect with talents <br/> and the hottest startup ecosystem in Helsinki. <br/> Contact: vickie@theshortcut.org"
                )
              }
            />
          </div>

          <div className={styles.btnImage}>
            <Button
              height="20vmax"
              width="20vmax"
              name="Volunteer in the events"
              backgroundImage={`url("/img/btn-illustration3.png")`}
              onClick={() =>
                setHeadText(
                  `Access startup companies and doers by doing! <br/>
                  Run the show, make the connections, create the experience! <br/>
                  <a href="https://forms.gle/yQjES7FXi5r18hBm6" target="_blank">Join us @ SOS 2019 </a>`
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
