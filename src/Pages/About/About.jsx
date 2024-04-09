import { FaBullseye } from "react-icons/fa"
import "./About.css"
import { GoGoal } from "react-icons/go"
import { FaPeopleGroup } from "react-icons/fa6"
export const About = () => {
    return (
        <>
            <section class='aboutPage'>
                <div className="left">
                    <h1><span>B3</span> Autos</h1>
                    <p>B3 Autos is a subsidiary of B3 Group – the multi-divisional group
                        hailed as one of the finest engineering companies in the country –
                        dedicated to the cause of enforcing High Security Registration Plates
                        (HSRP) in India. With an unrelenting commitment to excellence and
                        an undivided focus on innovation, we offer cutting-edge solutions to
                        address the evolving needs of vehicle identification and protection.</p>
                </div>
                <div className="right"></div>
            </section>
            <section className="missionTeamStrength">
                <div className="mission">
                    <h2><GoGoal /> Our Mission</h2>
                    <p>Our mission is simple yet singular – to safeguard vehicles and
                        enhance road safety through the implementation of advanced security
                        measures. We strive to provide our customers with reliable and
                        tamper-proof registration plates that meet and exceed industry
                        standards.</p>
                </div>
                <div className="team">
                    <h2><FaPeopleGroup />Our Team</h2>
                    <p>At B3 Autos, we are a team of seasoned professionals driven by a
                        passion for security and technology. With years of experience in the
                        automotive industry and a deep understanding of regulatory
                        standards, we identify ourselves as pioneers in the burgeoning field of
                        designing and manufacturing HSRP in the state.</p>
                </div>

            </section>
            <section className="strengthSection">
                <h1><span>Our</span>  Strengths</h1>
                <div className="strengthContainer">
                    <div className="strength">
                        <h3>Cutting-Edge Technology</h3>
                        <p>We employ the latest technological advancements to develop
                            HSRP solutions that are not only highly secure but also user-
                            friendly and convenient.</p>
                    </div>
                    <div className="strength">
                        <h3>Compliance and Quality</h3>
                        <p>Our plates are painstakingly designed and manufactured to
                            comply with all relevant regulations and quality standards,
                            ensuring the approval of vehicle owners and authorities alike.</p>
                    </div>
                    <div className="strength">
                        <h3>Customer Focus</h3>
                        <p> We value customer satisfaction above all else, offering
                            personalised service and support to meet the unique
                            requirements of each client.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
