import { FaAngleRight, FaQuestion } from "react-icons/fa"
import "./Home.css"
import { useState } from "react";
const Home = () => {
    const faqs = [
        {
            "question": "What is HSPR",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendrerit sit amet malesuada eu, vulputate sit amet metus."
        },
        {
            "question": "What is HSPR",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendrerit sit amet malesuada eu, vulputate sit amet metus."
        },
        {
            "question": "What is HSPR",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendrerit sit amet malesuada eu, vulputate sit amet metus."
        },
        {
            "question": "What is HSPR",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendrerit sit amet malesuada eu, vulputate sit amet metus."
        },
        {
            "question": "What is HSPR",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendrerit sit amet malesuada eu, vulputate sit amet metus."
        },
        {
            "question": "What is HSPR",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendrerit sit amet malesuada eu, vulputate sit amet metus."
        },
        {
            "question": "What is HSPR",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendrerit sit amet malesuada eu, vulputate sit amet metus."
        },
    ];
    return (<>
        <section className="banner">
            <div className="bannerLeft">
                <h1>High Security Registration Plates Get ahead of the curve</h1>
                <div className="HSRPButtons">
                    <div className="knowHSRPBtn">KNOW HSRP</div>
                    <div className="bookHSRPBtn">Book HSRP</div>
                </div>
            </div>
        </section>
        <section className="about">

            <h1>B3 Autos</h1>
            <p>B3 Autos is a subsidiary of B3 Group – the multi-divisional group
                hailed as one of the finest engineering companies in the country –
                dedicated to the cause of enforcing High Security Registration Plates
                (HSRP) in India. With an unrelenting commitment to excellence and
                an undivided focus on innovation, we offer cutting-edge solutions to
                address the evolving needs of vehicle identification and protection.</p>
        </section>
        <section className="gallery">
            <h1>Gallery</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu magna id odio facilisis iaculis aliquet eget ante. Aliquam sem nisi, hendreFusce a neque non dolor consectetur condimentum.rit sit amet malesuada eu, vulputate sit amet metus. Phasellus aliquet mi id diam ornare luctus. Proin lacinia leo ligula.  </p>
            <div className="galleryList">
                <div className="galleryItem"></div>
                <div className="galleryItem"></div>
                <div className="galleryItem"></div>
                <div className="galleryItem"></div>
            </div>
        </section>
        <section className="faq">
            <div className="faqHeader">

                <h4>Find your answer here</h4>
                <h1>Frequently asked Questions</h1>
                {/* <div className="viewAllQuestionBtn"><FaQuestion /> View all Questions</div> */}
            </div>
            <div className="faqCards">
                {faqs.map((faq) => {
                    return <FaqCard faq={faq} />

                })}
            </div>
        </section>
    </>
    )
}

export default Home;

export const FaqCard = ({ faq }) => {
    const [showAccodins, handleAccodins] = useState(false)
    console.log(faq);
    return (
        <div className="faqCard">
            <div className="question" onClick={() => handleAccodins(!showAccodins)}>{faq.question} <FaAngleRight /></div>
            {showAccodins && <div className="answer">
                <div className="textAnswer">Answer</div>
                {faq.answer}</div>}
        </div>
    )
}
