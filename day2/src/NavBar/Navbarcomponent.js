import { startTransition } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { Search } from '../Store/Action';
import "./Navbarcomponent.css";


function NavbarComponent(){
  const myFav=useSelector((state)=>state.count)
  // const hestory=useHistory()
  // console.log(hestory)
  //console.log(useRouteMatch())

const dispach=useDispatch()
  const search=(e) =>
  {
    dispach(Search(e.target.value))
     
  }
   
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
      <Container className='nav'>
      <Link className='favMovie mov' to="/fav">Your FAV⭐<span className='favNum'>{myFav}</span></Link>
        <Link className='mov' to="/">MOVIES</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/feature">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>search(e)}/>
         <button className="btn2"  type="submit">Search</button>{/*//onClick={(e)=>seerch(e)} */}
      </form>
          <Nav>
            <Link className='log' to="/login">LOGIN</Link>
            <Link className='reg' to="/register">REGISTER</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}
export default NavbarComponent;