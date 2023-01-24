import Nav from 'react-bootstrap/Nav';
import "../App.css";

function Navbar() {
  return (
    <div className='UwU'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
            <Nav className="follow-scroll-navbar" defaultActiveKey="/home" as="ul">
              <img className="nav-bar-logo" src="./img/logo.svg"/>     
              <div className='navbar-link-container screen-behaviour'>
                <Nav.Item as="li">
                  <Nav.Link className="navbar-items" href="/news" eventKey="link-1 white-text">NEWS</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="navbar-items" href="/nos-experiences" eventKey="link-1 white-text">NOS ÉXPERIENCES</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="navbar-items" href="/a-propos-de-nous" eventKey="link-1 white-text">À PROPOS DE NOUS</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="navbar-items" href="/nos-equipements" eventKey="link-1 white-text">NOS ÉQUIPEMENTS</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="navbar-items" href="/connexion" eventKey="link-1 white-text login-bold">CONNEXION</Nav.Link>
                </Nav.Item>
                </div>
              </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar;