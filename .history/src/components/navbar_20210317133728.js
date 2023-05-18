import  { Component , useState , useRef } from 'react';
import {Button , Navbar, Col , Form, state} from 'react-bootstrap';
import { BsPeopleCircle } from 'react-icons/bs';
import './style.css';
import logo from './logo.jpg';
import profileimg from './profileimg.jpg';
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from 'react-router-dom';



function NavBar()
 {
         const [show, setShow] = useState(false);
         const target = useRef(null);

        return (
            <div>
                <Navbar className="header">
                    <Col lg={8} sm={3} md={6}>
                    <Link to="/pages/HomePage">
                    <img src={logo} className="logo" />
                    </Link>
                    </Col>
                    
                    <Col lg={4} sm={12} md={6}className="header_btn" >
                    <Button className="head_btn"  href="/pages/Track_page" >Track your Delivery</Button>
                    <Button className="head_btn"  href="/pages/Login_page" >Log In</Button>
                        <Button ref={target} onClick={() => setShow(!show)} style={{backgroundColor:"transparent" , border:'none', padding:'0px',height: '30px'}}>
                            <BsPeopleCircle className="profile_icon"/>
                        </Button>
                         <Overlay target={target.current} show={show} placement="bottom"  >
                         {(props) => (
                      
                        <div className="profile_div" lg={4} sm={12} {...props}>
                            <div className="img_email">
                                <img src={profileimg} className="profile_image" />
                                <h6>Shipster</h6>
                                <p>shispter@gmail.com</p>
                            </div>
                                <ul className="profile-ul">
                                <hr></hr>
                                    <li>
                                        <a href="#">Profile</a>
                                        
                                    </li>
                                    <hr></hr>
                                    <li>
                                        <a href="#">Hello Frnd Chai Peelo</a>
                                    </li>
                                    <hr></hr>
                                    <li>
                                        <a href="#">Home</a>
                                        
                                    </li>
                                    <hr></hr>
                                
                                    <li>
                                        <a href="#">Order List</a>
                                    </li>
                                    <hr></hr>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <hr></hr>
                                </ul>
                        </div>
                        
                         )}     
                     </Overlay>
                    </Col>
                </Navbar>
            </div>
      
        )
    }
    

export default NavBar;


                        
                        
{/* <button onClick={()=> setModalIsOpen(true)}>Click here</button>
<Modal isOpen={modalIsOpen} onRequestClose={()=> setModalsOpen(false)}>
    <h2>Title</h2>
    <p>Body</p>
    <div>
        <button onClick={()=> setModalIsOpen(false)}>
            Close
        </button>
    </div>
</Modal> */}

// const [modalIsOpen, setModalIsOpen]= useState(false)
    // import {Modal, setModalIsOpen } from 'react-modal';

                                {/* <hr className="hrStyle"></hr>
                            <Link>My Profile</Link>
                            <hr className="hrStyle"></hr>
                            <Link>Home</Link>
                            <hr className="hrStyle"></hr>
                            <Link>Order History</Link>
                            <hr className="hrStyle"></hr>
                            <Link>Contact Us</Link>
                            <hr></hr>

                            <Link>Log out</Link>
                            <hr></hr> */}