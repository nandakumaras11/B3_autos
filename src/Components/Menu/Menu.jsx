// import { Link } from "react-router-dom"
// import "./Menu.css"
// import "./MenuMobile.css"
// import { FaBars, FaFacebook, FaLock, FaRegWindowClose, FaSearch, FaTimes, FaWhatsapp, FaWindowClose } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"
// import { NavHashLink } from 'react-router-hash-link';
// import { useState } from "react";
export const links = [
    {
        link: <Link to="/">Home</Link>
    },
    {
        link: <Link to="/About">About</Link>
    },
    {
        link: <Link to="/HSRP">HSRP</Link>
    },
    {
        link: <Link to="/HSRP">PRODUCTS & SERVICES</Link>
    },
    {
        link: <NavHashLink to="/#FAQS" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>FAQS</NavHashLink>
    },
    {
        link: <Link to="/Media">Media</Link>
    },
    {
        link: <NavHashLink to="/#Gallery" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Gallery</NavHashLink>
    },
    {
        link: <Link to="/bookHSRP">Book HSRP</Link>
    },
    {
        link: <NavHashLink to="/#ContactUs" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact Us</NavHashLink>
    },
]
// const Menu = () => {
//     const navigate = useNavigate();
//     const [isMobileMenuOpened, setMobileMenu] = useState(false);
//     return (
//         <>
//             <div className="mobileMenuOptions">
//                 <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>    {isMobileMenuOpened ? <FaTimes onClick={() => setMobileMenu(false)} /> : <FaBars onClick={() => setMobileMenu(true)} />}
//             </div>
//             <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"} >
//                 <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
//                 <div className="links">{links.map(({ link }) => link)}</div>

//                 <div className="icons">
//                     <FaFacebook /><FaWhatsapp />
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Menu


// import { Link } from "react-router-dom";
// import { FaBars, FaFacebook, FaTimes, FaWhatsapp } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { NavHashLink } from 'react-router-hash-link';
// import { useState } from "react";
// import "./Menu.css";
// import "./MenuMobile.css";

// const Menu = () => {
//     const navigate = useNavigate();
//     const [isMobileMenuOpened, setMobileMenu] = useState(false);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const [isSubDropdownOpen, setSubDropdownOpen] = useState("");

//     return (
//         <>
//             <div className="mobileMenuOptions">
//                 <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
//                 {isMobileMenuOpened ? 
//                     <FaTimes onClick={() => setMobileMenu(false)} /> : 
//                     <FaBars onClick={() => setMobileMenu(true)} />
//                 }
//             </div>
//             <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"} >
//                 <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
//                 <div className="links">
//                     <Link to="/">Home</Link>
//                     <Link to="/About">About</Link>
//                     <Link to="/HSRP">HSRP</Link>
                    
//                     {/* Dropdown for Products & Services */}
//                     <div
//                         className="dropdown"
//                         onMouseEnter={() => setDropdownOpen(true)}
//                         onMouseLeave={() => {
//                             setDropdownOpen(false);
//                             setSubDropdownOpen("");
//                         }}
//                     >
//                         <Link to="/HSRP">PRODUCTS & SERVICES</Link>
//                         {isDropdownOpen && (
//                             <div className="dropdown-menu">
//                                 <div
//                                     className="dropdown-item"
//                                     onMouseEnter={() => setSubDropdownOpen("products")}
//                                     onMouseLeave={() => setSubDropdownOpen("")}
//                                 >
//                                     Product HSRP
//                                     {isSubDropdownOpen === "products" && (
//                                         <div className="sub-dropdown">
//                                             <Link to="/product1">Two Wheelers – Motor Cycle Front</Link>
//                                             <Link to="/product2">Two & Three Wheelers</Link>
//                                             <Link to="/product2">Four Wheelers – LMV</Link>
//                                             <Link to="/product2">MEDIUM, HEAVY  COMMERCIAL VEHICLE & TRAILOR COMBINATION</Link>
//                                             <Link to="/product2">construction equipment vehicles</Link>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div
//                                     className="dropdown-item"
//                                     onMouseEnter={() => setSubDropdownOpen("services")}
//                                     onMouseLeave={() => setSubDropdownOpen("")}
//                                 >
//                                     Services
//                                     {isSubDropdownOpen === "services" && (
//                                         <div className="sub-dropdown">
//                                             <Link to="/service1">HSRP Fitment Centers & Services</Link>
//                                             <Link to="/service2">HSRP Home Delivery Services</Link>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <NavHashLink to="/#FAQS" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>FAQS</NavHashLink>
//                     <Link to="/Media">Media</Link>
//                     {/* <NavHashLink to="/#Gallery" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Gallery</NavHashLink> */}
//                     {/* <Link to="/bookHSRP">Book HSRP</Link> */}
//                     <NavHashLink to="/#ContactUs" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact Us</NavHashLink>
//                 </div>

//                 <div className="icons">
//                     <FaFacebook />
//                     <FaWhatsapp />
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Menu;


import { Link } from "react-router-dom";
import { FaBars, FaFacebook, FaTimes, FaWhatsapp, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import { useState } from "react";
import "./Menu.css";
import "./MenuMobile.css";

const Menu = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpened, setMobileMenu] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSubDropdownOpen, setSubDropdownOpen] = useState("");

    return (
        <>
            <div className="mobileMenuOptions">
                <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
                {isMobileMenuOpened ? 
                    <FaTimes onClick={() => setMobileMenu(false)} /> : 
                    <FaBars onClick={() => setMobileMenu(true)} />
                }
            </div>
            <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"} >
                <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/HSRP">HSRP</Link>
                    
                    {/* Dropdown for Products & Services */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => {
                            setDropdownOpen(false);
                            setSubDropdownOpen("");
                        }}
                    >
                        <Link to="#">PRODUCTS&SERVICES <FaChevronDown className="arrow-icon" /></Link>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <div
                                    className="dropdown-item"
                                    onMouseEnter={() => setSubDropdownOpen("products")}
                                    onMouseLeave={() => setSubDropdownOpen("")}
                                >
                                    Product HSRP <FaChevronRight className="arrow-icon" />
                                    {isSubDropdownOpen === "products" && (
                                        <div className="sub-dropdown">
                                            <Link to="/two-wheelers/1">Two Wheelers – Motor Cycle Front</Link>
                                            <Link to="/two-wheelers/2">Two & Three Wheelers</Link>
                                            <Link to="/two-wheelers/3">Four Wheelers – LMV</Link>
                                            <Link to="/two-wheelers/4">MEDIUM, HEAVY COMMERCIAL VEHICLE & TRAILOR COMBINATION</Link>
                                            <Link to="/two-wheelers/5">Construction Equipment Vehicles</Link>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="dropdown-item"
                                    onMouseEnter={() => setSubDropdownOpen("services")}
                                    onMouseLeave={() => setSubDropdownOpen("")}
                                >
                                    Services <FaChevronRight className="arrow-icon" />
                                    {isSubDropdownOpen === "services" && (
                                        <div className="sub-dropdown">
                                            <Link to="/service1">HSRP Fitment Centers & Services</Link>
                                            <Link to="/service1">HSRP Home Delivery Services</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to="/legislation">Legislation</Link>
                    <Link to="/quality">Quality</Link>

                    <NavHashLink to="/#FAQS" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>FAQS</NavHashLink>
                    <Link to="/Media">Media</Link>
                    <NavHashLink to="/#ContactUs" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact </NavHashLink>
                </div>

                <div className="icons">
                    <FaFacebook />
                    <FaWhatsapp />
                </div>
            </nav>
        </>
    );
}

export default Menu;

