import Contact from "../../components/Contact";
import './style.css';

function ContactPage() {
    return <div className="contact-page-container">
        <div className="title">
            <h1>This Is Contact Page</h1>
        </div>
        <div className="content-contact-page">
            <Contact />
        </div>
    </div>;
}

export default ContactPage;