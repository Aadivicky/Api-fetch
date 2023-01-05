// import './App.css';
import {Navbar,Button, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"
import img3 from '../Api fetch/img/client-5.png';



function Header() {
  return (
    <div className='text-center'>
 <Navbar className='bg-dark'>
  <Navbar.Brand className=' text-white ms-2 nav1'>
    <img src={img3} alt={""} className="img3"></img>
    <Nav.Link href="#home" className="nali">Home</Nav.Link>
    <Nav.Link href="cards" className="nali">Worker Profile</Nav.Link>
    {/* <Nav.Link href="cards/details/2" className="nali">Worker Deteile</Nav.Link> */}
  </Navbar.Brand>
 </Navbar>
 <h1 className='mt-5'>Workers Information</h1>
 <Button className='ms-auto me-auto d-block mt-5'><Link to="cards">view details</Link></Button>

</div>
  );
}

export default Header;