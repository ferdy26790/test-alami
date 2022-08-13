import About from "../../components/About";
import './style.css';

function AboutPage() {
    return <div className="about-page-container">
        <div className="title">
            <h1>This Is About Page</h1>
        </div>
        <About />
    </div>;
}

export default AboutPage;