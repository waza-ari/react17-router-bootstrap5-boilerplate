import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { De, Gb } from 'react-flags-select';
import {useState} from "react";

const NavComponent = (props) => {

    const { i18n } = useTranslation();
    const [language, setLanguageState] = useState(i18n.language);

    const setLanguage = (language) => {
        return event => {
            event.preventDefault()
            i18n.changeLanguage(language);
            setLanguageState(language)
        }
    }

    const getNavbarFlag = () => {
        switch (language) {
            case 'de':
                return <De />
            case 'en':
                return <Gb />
            default:
                return <Gb />
        }
    }

    return (
        <Navbar bg="light" expand="lg" className={"navbar navbar-expand-md navbar-dark bg-dark fixed-top"}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/test">Test</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title={getNavbarFlag()} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={setLanguage('de')}><span><De /></span> Deutsch</NavDropdown.Item>
                            <NavDropdown.Item onClick={setLanguage('en')}><span><Gb /></span> English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComponent