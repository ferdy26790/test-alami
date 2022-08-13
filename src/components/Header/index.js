import { useContext } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { MENU } from '../../constants';
import { StoreContext } from '../../context/storeContext';
import './style.css';

function Header() {
    const { menuActive, setMenuActive } = useContext(StoreContext)
    return <>
        <Navbar
        color="secondary"
        >
            <NavbarBrand>
                WEBSITE TEST
            </NavbarBrand>
            <Nav>
                {(MENU).map(m => 
                    (<NavItem key={m.value}>
                        <div
                            className={
                                `nav-item-menu ${menuActive === m.value ? 'active': ''}`
                            }
                            onClick={() => setMenuActive(m.value)}
                        >
                            {m.label}
                        </div>
                    </NavItem>)
                )}
            </Nav>
        </Navbar>
    </>
}

export default Header;