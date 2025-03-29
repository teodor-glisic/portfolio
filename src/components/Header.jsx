import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id='navigation'>
            <Nav variant='pills'>
                <Nav.Item>
                    <Nav.Link as={Link} to="/portfolio/" className='custom-nav-link'>Teodor Glisic</Nav.Link>
                </Nav.Item>
            </Nav>

            <Nav variant='pills'>
                <Nav.Item>
                    <Nav.Link as={Link} to="/resume" className='custom-nav-link'>Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/projects" className='custom-nav-link'>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/contact" className='custom-nav-link'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    );
}
