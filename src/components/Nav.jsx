import { Container, Navbar } from "react-bootstrap";

const Nav = () => {
    return (
        <Navbar bg="light" className="mt-5">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand className="text-black">
                    Requerimientos
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Nav;
