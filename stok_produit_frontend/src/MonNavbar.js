import { Link } from "react-router-dom";
import {Navbar , Nav, Container} from "react-bootstrap"
 function MonNavbar() {
    function exit(){
        localStorage.removeItem("token")
    }
 return (

 <Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand>Gestion produits </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/Allproducts">Allproducts</Nav.Link>
        <Nav.Link href="/login" >Login</Nav.Link>        
        <Nav.Link href="/Register">Register</Nav.Link>
        <Nav.Link href="/login" onClick={exit} >exit</Nav.Link>
        </Nav>
    </Container>

 </Navbar>

 );
 }

 export default MonNavbar;