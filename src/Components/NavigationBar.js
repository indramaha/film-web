import {Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <NavbarBrand href="/">Cinema XXI</NavbarBrand>
                <Nav>
                    <Nav.Link href="#trending">Tranding</Nav.Link>
                    <Nav.Link href="#superhero">Super Hero</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar