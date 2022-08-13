import Header from "../Header";
import './style.css';

function Layout({children}) {
    return <div className="layout-container">
        <Header />
        <div className="content-container">
            {children}
        </div>
    </div>;
}

export default Layout;