import React from "react";

const LandingPartners = props => {
  return (
    <div className="landingPartners">
      <div>
        Co-organizers
        <div className="partnerColumn">
          <PartnerPicture />
          <PartnerPicture />
        </div>
      </div>
      <div>
        Partners
        <div className="partnerColumn">
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
        </div>
      </div>
      <div>
        Sponsors
        <div className="partnerColumn">
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
        </div>
      </div>
    </div>
  );
};
const PartnerPicture = props => {
  return <div className="partnerPicture">Lo</div>;
};
export default LandingPartners;
