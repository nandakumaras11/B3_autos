import React from "react";
import "./LegalStandardNotice.css";

const LegalStandardNotice = () => {
  return (
    <>
    <div className="For_Your_Information_container">
      <div class="For_Your_Information">
        <div class="text-div">For Your Information</div>
      </div>
      <div class="inner-container">
        <div class="heading">THE LEGAL NOTIFIED STANDARD</div>
        <button className="read-more-button">READ MORE &gt;</button>
        {/* <button class="button">READ MORE</button> */}
        <div class="marquee">
          <marquee>
            <span className="alert">ALERT</span> HSRP is a Safety Component
            under Rule 124 of CMVR-1989.
            <span className="red-bubble"></span>Check your HSRP for Compliance.
            Be Safe.
            <span className="red-bubble"></span> Exercise your right for Free
            Replacement if not in Conformance
            <span className="red-bubble"></span> In Public Interest from B3
            Autos WagenTag Safety Matters
            <span className="red-bubble"></span> Safely Home, Always. Keeping
            INDIA Safe, Moving & Visible
          </marquee>
        </div>
      </div>
    </div>
      <div className="danger">* All Images are for representation purposes only</div>
    </>
  );
};

export default LegalStandardNotice;
