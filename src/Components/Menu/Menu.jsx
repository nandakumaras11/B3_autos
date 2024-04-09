import { Link } from "react-router-dom"
import "./Menu.css"
import { FaFacebook, FaLock, FaSearch, FaWhatsapp } from "react-icons/fa"
const Menu = () => {
    const links = [
        {
            link: <Link to="/About">About</Link>
        },
        {
            link: <Link to="/HSSRP">HSRP</Link>
        },
        {
            link: <Link to="/FAQS">FAQS</Link>
        },
        {
            link: <Link to="/Media">Media</Link>
        },
        {
            link: <Link to="/Gallery">Gallery</Link>
        },
        {
            link: <Link to="/bookHSRP">Book HSRP</Link>
        },
        {
            link: <Link to="/ContactUS">Contact Us</Link>
        },
    ]
    return (
        <nav id="MainMenu">
            <div className="logo"></div>
            <div className="links">{links.map(({ link }) => link)}</div>
            <div className="icons">
                <FaFacebook /><FaWhatsapp />
            </div>
        </nav>
    )
}

export default Menu