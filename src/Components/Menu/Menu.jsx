import { Link } from "react-router-dom"
import "./Menu.css"
import "./MenuMobile.css"
import { FaBars, FaFacebook, FaLock, FaRegWindowClose, FaSearch, FaTimes, FaWhatsapp, FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { NavHashLink } from 'react-router-hash-link';
import { useState } from "react";
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
const Menu = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpened, setMobileMenu] = useState(false);
    return (
        <>
            <div className="mobileMenuOptions">
                <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>    {isMobileMenuOpened ? <FaTimes onClick={() => setMobileMenu(false)} /> : <FaBars onClick={() => setMobileMenu(true)} />}
            </div>
            <nav id="MainMenu" className={isMobileMenuOpened ? "open" : "close"} >
                <div className="logo" onClick={() => { window.scrollTo(0, 0); navigate("/") }}></div>
                <div className="links">{links.map(({ link }) => link)}</div>

                <div className="icons">
                    <FaFacebook /><FaWhatsapp />
                </div>
            </nav>
        </>
    )
}

export default Menu