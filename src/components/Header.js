import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              src="./favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"></img>
              </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Data Analysis</Nav.Link>
          </Nav>
        </Container>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar>
    </>
  );
}

export default Header;