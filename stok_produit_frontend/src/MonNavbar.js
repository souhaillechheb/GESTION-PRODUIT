import { Link } from "react-router-dom";
import {Navbar , Nav, Container} from "react-bootstrap"
 function MonNavbar() {
 return (

 <Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand>Gestion produits </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/Allproducts">Allproducts</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/Register">Register</Nav.Link>
        </Nav>
    </Container>

 </Navbar>








    /*  <nav  fixed="top" >
     <ul>
         <li>
         <Link to="/Allproducts">produits</Link>
         </li>
         <li>
         <Link to="/Login">Login</Link>
         </li>
         <li>
         <Link to="/Register">Register</Link>
         </li>
     </ul>
     </nav> */




 );
 }

 export default MonNavbar;