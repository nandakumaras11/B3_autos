import "./Quality.css";
const Quality = () => {
  return (
    <section class="qualityPage">
      <div className="page-main-heading-container">
        <div className="page-main-heading">Quality</div>
      </div>
      <div className="Certification">
        <h1 className="sub-head">Certification & Policies </h1>
        <ul>
          <li>B3 Autos certifies that products and accessories are certified as compliant with the prescribed National Standard for HSRP – High Security Registration Plates
          </li>
          <li> B3 Autos complies with rules, regulations and protocols of the State and the Central Government with reference to manufacture and issue by sale to OEM’s and with fitment of HSRP to Motor Vehicle Owners
          </li>
        </ul>
      </div>
      {/* //MotorSign HSRP Product Warranty */}
      <div className="MotorSign">
        <h1 className="sub-head">B3 Autos HSRP Product Warranty</h1>
        <ul>
          <li>B3 Autos warrants that B3 Autos HSRP will be free from defects and workmanship, legally compliant and certified fit-for-purpose as per Rule 50 & 51 of CMVR-1989 as amended</li>
          <li>Defects not covered by warranty such as but not limited to physical damage, improper handling and maintenance, storage negligence etc.
          </li>
          <li>5 year warranty for reflective material</li>
        </ul>
      </div>
      {/* Terms & Conditions */}
      <div className="teams_and_condition">
        <h1 className="sub-head">Terms & Conditions</h1>
        <p>
          B3 Autos HSRP is pleased to provide 5 year warranty on terms and conditions set out herein:

        </p>
        <ul>
          <li>B3 Autos HSRP warrants that reflective material on HSRP used in accordance with the B3 Autos published guidelines and that of the reflective sheeting manufacturer and their specifications will conform to the applicable ISO: 7591 – 1982 (E) standard for license plates for a period of 5 years from the date of its fitment on to the motor vehicle that should take place within 15 days from the date of its manufacture on the terms and conditions set forth herein</li>
          <li>
            Subject to compliance with the claim process, if the product does not meet the National Standard in terms of the TAC – Type Approval Certificate, B3 Autos HSRP in consultation with the reflective manufacturer/supplier will replace or refurbish the product free of cost, or at pro-rated costs determined at the discretion of B3 Autos HSRP/reflective sheeting manufacturer whose decision shall be final

          </li>
        </ul>
      </div>
      {/* The 5 Year Warranty Claim Process */}
      <div className="warranty_claim">
        <h1 className="sub-head">The 5 Year Warranty Claim Process</h1>
        <ul>
          <li>
            B3 Autos HSRP must be notified in writing of a defect in the product within 7 days of delivery/fitment if the defect is apparent on normal visual inspection or in the case of a latent defect, within 7 days of discover
          </li>
          <li>
            Within 7 days of notifying B3 Autos HSRP of the potential warranty claim, either return the original product or provide adequate photographs of the alleged defect

          </li>
          <li>
            B3 Autos HSRP will inspect the product/photographs and determine if the defect results in the product failing to conform to the Indian National Standard and the TAC


          </li>
          <li>
            Within 7 days of B3 Autos HSRP inspection, B3 Autos will provide a full explanation for accepting or declining the claim and either refurbish or replace the product or return the original product if in stock
          </li>
        </ul>
      </div>
      {/* This warranty does not apply in the following circumstances */}
      <div className="warranty_not_apply">
        <h1 className="sub-head">
          This warranty does not apply in the following circumstances
        </h1>
        <ul>
          <li>
            The defect arises because the customer failed to follow B3 Autos HSRP oral or written instructions for the storage, commissioning, handling, installation, use and maintenance of the product or (if there are none) good practice regarding the same
          </li>
          <li>
            The customer alters or repairs the product without the written consent of B3 Autos HSRP
          </li>
          <li>
            The defect arises as a result of fair wear and tear, willful damage, negligence or abnormal storage or working conditions
          </li>
          <li>
            If the product is ordered incorrectly, proven by a copy of a fax, email or postal order, or if ordered by telephone, by checking the telephone call
          </li>
          <li>Any accidental damage caused by third parties</li>

        </ul>
        <strong>All incoming and outgoing calls will be recorded for quality and training purposes.</strong>
      </div>
    </section>
  );
};
export default Quality;
