import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import './styles.css'
import { useSelector } from 'react-redux';


function Header() {

  const {carts}=useSelector((state)=>state.allCart)
    
  
  return (
    <>
      <Navbar style={{ height: "60px", background: "black"}}>
                <Container>
                <NavLink to='/' className='text-decoration-none'>

                    <h3 style={{ color: "goldenrod" }}>Restaurant</h3>
                </NavLink>
                
                  <NavLink to='/cart' className='text-decoration-none text-light mx-2'>
                      <div id='ex4'>
                    <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
       <i className="fa-solid fa-cart-shopping" style={{ color: "white" }}></i>
                       </span>
                  </div>
                  </NavLink>
                
                </Container>
                
            </Navbar>
    </>
  )
}

export default Header
