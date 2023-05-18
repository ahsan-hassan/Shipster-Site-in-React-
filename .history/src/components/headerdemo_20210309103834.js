
import { BsPeopleCircle} from 'react-icons/bs';
import {RiArrowRightSLine , RiArrowLeftSLine} from 'react-icons/ri'
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import profileimg from './profileimg.jpg';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import './style.css';
import {Button } from 'react-bootstrap';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function Headerdemo() {
  return (
    <Navbar>
         <Link to="/pages/HomePage">
            <img src={logo} className="logo" />
        </Link>
                
        <div className="header_btn" >
            <Button className="head_btn"  href="/pages/Track_page" >Track your Delivery</Button>
            <Button className="head_btn"  href="/pages/Login_page" >Log In</Button>
        

      <NavItem icon={<BsPeopleCircle />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      </div>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="lefticon">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: '400px'}} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
                            <div className="img_email">
                                <img  style={{height:'50px', width: '55px' ,borderRadius: '25px'}}src={profileimg} className="profile_image" />
                                <h5 style={{fontWeight:'bold'}}>Shipster</h5>
                                <p style={{color:'silver'}}>shispter@gmail.com</p>
                            </div>
          <DropdownItem
            rightIcon={<ChevronIcon />}
            goToMenu="profile">
            Profile
            <RiArrowRightSLine style={{color:'black' , width:'25px' , height:'40px' , marginLeft: '228px',color:'#0660A5'}}/>
          </DropdownItem>
          
          <hr></hr>
          <DropdownItem
            rightIcon={<ChevronIcon />}
            goToMenu="home">
            Home
            <RiArrowRightSLine style={{color:'black' , width:'25px' , height:'40px' , marginLeft: '229px', color:'#0660A5'}}/>
          </DropdownItem>
          <hr></hr>
          <DropdownItem
            rightIcon={<ChevronIcon />}
            goToMenu="Order History">
            Order History
            <RiArrowRightSLine style={{color:'black' , width:'25px' , height:'40px' , marginLeft: '182px', color:'#0660A5'}}/>
          </DropdownItem>
          <hr></hr>
          <DropdownItem
            rightIcon={<ChevronIcon />}
            goToMenu="Contact Us">
            Contact Us
            <RiArrowRightSLine style={{color:'black' , width:'25px' , height:'40px' , marginLeft: '195px', color:'#0660A5'}}/>
          </DropdownItem>
          <hr></hr>
          <DropdownItem
            rightIcon={<ChevronIcon />}
            goToMenu="">
            Logout
          </DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'profile'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
          <RiArrowLeftSLine style={{color:'black' , width:'25px' , height:'40px' , marginBottom: '15px',color:'#0660A5'}}/>
          </DropdownItem>
          <hr></hr>
          <DropdownItem >First Name</DropdownItem>
          <hr></hr>
          <DropdownItem >Last Name</DropdownItem>
          <hr></hr>
          <DropdownItem >Email Address</DropdownItem>
          <hr></hr>
          <DropdownItem >Mobile Numbe</DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'home'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
          <RiArrowLeftSLine style={{color:'black' , width:'25px' , height:'40px' , marginBottom: '15px', color:'#0660A5'}}/>
          </DropdownItem>
          <hr></hr>
          <DropdownItem >a</DropdownItem>
          <hr></hr>
          <DropdownItem >b</DropdownItem>
          <hr></hr>
          <DropdownItem >c</DropdownItem>
          <hr></hr>
          <DropdownItem >d</DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Order History'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
          <RiArrowLeftSLine style={{color:'black' , width:'25px' , height:'40px' , marginBottom: '15px' , color:'#0660A5'}}/>  
          </DropdownItem>
          <hr></hr>
          <DropdownItem >HTML</DropdownItem>
          <hr></hr>
          <DropdownItem >CSS</DropdownItem>
          <hr></hr>
          <DropdownItem >JavaScript</DropdownItem>
          <hr></hr>
          <DropdownItem >Awesome!</DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Contact Us'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
          <RiArrowLeftSLine style={{color:'black' , width:'25px' , height:'40px' , marginBottom: '15px' , color:'#0660A5'}}/>
          </DropdownItem>
          <hr></hr>
          <DropdownItem >Email Address</DropdownItem>
          <hr></hr>
          <DropdownItem >Mobile Number</DropdownItem>
          <hr></hr>
          <DropdownItem >Fax</DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Headerdemo;
