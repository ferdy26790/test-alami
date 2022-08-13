import './style.css';

const TEXT_ABOUT_LEFT = `Lorem ipsum dolor sit amet, c  onsectetur adipiscing elit. Aliquam nunc ante, lobortis vel ultrices ac, mattis sed felis. Praesent luctus semper eros sit amet pretium. Fusce sollicitudin sit amet ante vel efficitur. Vestibulum et aliquet risus. Mauris bibendum purus nec tempus iaculis. Donec aliquet ut sem vitae posuere. Donec tristique sagittis velit elementum maximus.
Quisque scelerisque augue enim, ut malesuada mi rutrum sed. Mauris semper ante non neque auctor congue. Etiam vel nisi felis. Etiam vitae tristique nisl. Curabitur in purus sit amet lectus dignissim aliquet. Sed ullamcorper mi ut ante suscipit, sit amet imperdiet diam elementum. Morbi in faucibus ligula. Nulla facilisi.`

function About() {
    return (
        <div className="about-container">
            <div className="about-container-left">
                <h4>About 1</h4>
               <p>{TEXT_ABOUT_LEFT}</p>
            </div>
            <div className="about-container-right">
                <h4>About 2</h4>
                <div className="content-container">
                    <div className="about-container-right-content">
                        <p>{TEXT_ABOUT_LEFT}</p>
                    </div>
                    <div className="about-container-right-content">
                        <p>{TEXT_ABOUT_LEFT}</p>
                    </div>
                    <div className="about-container-right-content">
                        <p>{TEXT_ABOUT_LEFT}</p>
                    </div>
                    <div className="about-container-right-content">
                        <p>{TEXT_ABOUT_LEFT}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;