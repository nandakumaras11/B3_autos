import "./Legislation.css";
const Legislation = () => {
  const table_Content = [
    {
      label: "TRANSPORT VEHICLES – PUBLIC / RENTAL / COMMERCIAL",
      image: "",
    },
    {
      label: "NON TRANSPORT VEHICLES – PRIVATE	",
      image: "",
    },
    {
      label: "TRANSPORT VEHICLES	",
      image: "images/1.png",
    },
    {
      label: "NON TRANSPORT VEHICLES",
      image: "images/1.png",
    },
    {
      label: "TRANSPORT: ELECTRIC / BATTERY OPERATED",
      image: "images/3.png",
    },
    {
      label: "NON TRANSPORT ELECTRIC / BATTERY OPERATED",
      image: "images/5.png",
    },
    {
      label: "ELECTRIC / BATTERY OPERATED: UNDER RENT – A – CAB",
      image: "images/5.png",
    },
    {
      label: "",
      image: "",
    },
    {
      label: "UNDER RENT – A – CAB",
      image: "images/6.png",
    },
  ];

  return (
    <section className="legislationPage">
      <div className="page-main-heading-container">
        <div className="page-main-heading">Legislation & Governance</div>
      </div>
      {/* //container */}
      <div className="legislation-content">
        <span className="highlite-content">
          HSRP : High Security Registration Plate that are FULLY COMPLIANT to
        </span>
        <p>
          <span className="highlite-content">Rule 50 of CMVR-1989 : </span>
          Technical Specifications of the Registration Mark assigned to a Motor
          Vehicle vide is to be in the form of a Security License Plate.
        </p>
        <span className="highlite-content"> Rule 51 of CMVR-1989: </span>
        Motor Vehicle Category Specific Size of Letters and Numerals of the
        Registration Mark and the space between them.
      </div>
      <div className="legislation-list">
        <ul>
          <li>
            <span className="highlite-content">
              HSRP: High Security Registration Plates :
            </span>
          </li>
          <li>
            Aluminium Base Plate: Radiused at corners, Border Embossed with
            India Imprint
          </li>
          <li>
            Reflective materials, Clear, Durable and Readable from a Longer
            Distance to meet ISO7591 of 1982 and AIS 159
          </li>
          <li>National ID, Hologram</li>
          <li>
            Permanent Embossed Alpha Numeric Characters with India Imprint
          </li>
          <li>Laser ID Branded for Tracking and Tracing</li>
          <li>
            3rd License Plate/Regn. Mark : Hologram Embedded Destructible Inside
            Windshield sticker
          </li>
          <li>
            Snap Lock Fastening System: Permanently Fixed with Non-Removable
            Fasteners
          </li>
          <li>
            <span className="highlite-content">
              Certification :Type Approval Certificate from an accredited
              Testing agency.
            </span>
          </li>
        </ul>
      </div>
      <div className="Legal-id">
        <h3>Legal ID</h3>
        <p>
          <span className="highlite-content">
            {" "}
            MotorSigns India has a Legal ID of Type Approval with Code ‘YA’
          </span>
          assigned by the Testing Agency for Compliance and Certified for Use as
          Fit For Purpose.
        </p>
        <p>
          Every{" "}
          <span className="highlite-content"> MotorSign HSRP WagenTag </span> is
          permanently marked with a Ten digit UNIQUE Laser Branded IDENTIFIER
          for Tracking and Tracing . The Legal ID can also be found on the 3rd
          LP on vehicles with a windshield. Illustration : YA 1234567890.
        </p>
        <h3>VAHAN -National Registry :</h3>
        <p>
          Type Approved Manufacturers of HSRP-High Security registration Plates
          are provided access to VAHAN, the National Registry of MoRTH- Ministry
          of Road Transport & Highways.
        </p>
      </div>
      <div className="car-img">
        <img src="./images/Legislation-car-2.png" alt="car-img" />
      </div>

      {/* table content  */}

      <div className="table-container">
        <div className="table-headding">
        
        <div className="main-headding">HSRP : Types & Categories</div>
        <div className="table-sub-headding">
          Class of Vehicle : Alpha Numeric Colour : Background Colour
        </div>
        </div>

        {/* <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </table> */}
        <div className="table-grid-container">
          {table_Content.map((item, index) => (
            <div key={index} className="table-grid-item">
              {item.label}
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
        <div className="danger-msg">
          * All Images are for representation purposes only
        </div>
      </div>

      {/* //Third License Plate */}
      <div className="Third-License-Plate">
        <h3 className="headding">Third License Plate</h3>
        <img src="./images/third-license-plate.jpg" alt="img" />
        <h1 className="color-code">Color codes for ncr region</h1>

        <div className="grid-container">
          <div className="grid-item">
            <h2 className="item-heading" style={{fontSize:"14px"}}>
              BSES: BHARAT STAGE EMISSION STANDARD
            </h2>
            <div className="content-list">
              <p>BS III & BS IV</p>
              <p>BS III & BS IV</p>
              <p>BS III & IV</p>
              <p>BS VI</p>
              <p>BS VI</p>
              <p>BS VI</p>
            </div>
          </div>

          <div className="grid-item">
            <h2 className="item-heading">FUEL TYPE</h2>
            <div className="content-list">
              <p className="color-bg color-light-blue">PETROL & CNG</p>
              <p className="color-bg color-orange">DIESEL</p>
              <p className="color-bg color-grey">OTHER VEHICLES</p>
              <p className="color-bg color-light-blue-top-green">
                PETROL & CNG & LPG
              </p>
              <p className="color-bg color-orange-top-green">DIESEL</p>
              <p className="color-bg color-grey-top-green">OTHER VEHICLES</p>
            </div>
          </div>

          <div className="grid-item">
            <h2 className="item-heading">3 RD LP BACKGROUND</h2>
            <div className="content-list">
              <p>LIGHT BLUE</p>
              <p>ORANGE</p>
              <p>GREY</p>
              <p>GREEN STRIP ON TOP LIGHT BLUE</p>
              <p>GREEN STRIP ON TOP ORANGE</p>
              <p>GREEN STRIP ON TOP GREY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Legislation;
