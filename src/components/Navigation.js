import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { SiHomebridge } from 'react-icons/si';
import { IoPeopleCircleSharp } from 'react-icons/io5';
import { HiOutlineTableCells } from 'react-icons/hi2';

import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import gsap from 'gsap';

const Navigation = () => {
  //animation
  useEffect(() => {
    gsap.to('.navbar', {
      opacity: 100,
      duration: 10,
      delay: 0.5,
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <Navbar bg='dark' variant='dark' className='mb-3' style={{ opacity: 0 }}>
      <Container>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h1
            style={{
              fontFamily: 'El Messiri',

              color: 'white',
            }}
          >
            S W o F
          </h1>
        </Link>
        <Nav className='ms-auto'>
          <Link to='/'>
            <Button variant='dark' className='mx-2'>
              <SiHomebridge className='me-1 my-auto' size={20} /> Home
            </Button>
          </Link>
          <Link to='/engineers'>
            <Button variant='dark' className='mx-2'>
              <IoPeopleCircleSharp className='me-1 my-auto' size={20} /> All
              Engineers
            </Button>
          </Link>
          <Link to='/roster'>
            <Button variant='dark' className='mx-2'>
              <HiOutlineTableCells className='me-1 my-auto' size={20} />
              Create Roster
            </Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
