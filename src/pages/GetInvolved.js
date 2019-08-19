import React from "react";
import CanvasContent from "../components/CanvasContent";
import Header from "../components/Header";

import Box3d from "../components/Box3d";
import styles from "../styles/GetInvolved.module.scss";
import Button from "../components/Button";



const GetInvolved = props => {
    return (
      <div className={styles.getInvolved}>
        <Header />

        <CanvasContent>

          <p className={styles.item1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
 
          <div className={styles.item2} >

            <div className={styles.btnImage}>
              <Button height="15vw" width="15vw" />
              <img src="/img/btn-illustration1.png"></img>
            </div>

            <div className={styles.btnImage} >
              <Button height="15vw" width="15vw" />
              <img src="/img/btn-illustration2.png"  ></img>
            </div>

            <div className={styles.btnImage} >
              <Button height="15vw" width="15vw"/>
              <img src="/img/btn-illustration3.png"></img>
            </div>

          </div>
          
   
        
      </CanvasContent>   
    </div>

  );
}

export default GetInvolved;
