import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnselect expand='lg' variant='dark' bg='dark'>
      <Navbar.Brand as={NavLink} to='/'>
        Gestor de Tareas
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} to='/projects'>
            Proyectos
          </Nav.Link>
          <NavDropdown title='Admin'>
            <NavDropdown.Item as={NavLink} to='/admin/users'>
              Usuarios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to='/login'>
            Iniciar Sesión
          </Nav.Link>
          <Nav.Link as={NavLink} to='/register'>
            Registrarse
          </Nav.Link>
          <Nav.Link as={NavLink} to='/account'>
            Mi Cuenta
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
