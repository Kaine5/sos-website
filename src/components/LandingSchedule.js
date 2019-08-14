import React from "react";
import Box3d from "../components/Box3d";

const LandingSchedule = props => {
  return (
    <div className='LandingSchedule'>
      <div>
        <p className='routeText blue'>Business</p>
        <p className='routeText red'>Design</p>
        <p className='routeText yellow'>Tech</p>
      </div>
      <div className='normalText'>Lorem ipsum dono si amet</div>
      <div style={{ marginLeft: "20px", position: "relative" }}>
        <Box3d />
      </div>
    </div>
  );
};

export default LandingSchedule;
