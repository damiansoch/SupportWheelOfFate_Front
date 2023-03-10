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
    gsap.to('.navidation_items', {
      opacity: 100,
      duration: 10,
      delay: 0.1,
      ease: 'power1.inOut',
      stagger: {
        each: 0.5,
      },
    });
  }, []);
  return (
    <Navbar bg='dark' variant='dark' expand='lg' style={{ opacity: 0 }}>
      <Container fluid>
        <Link to='/' style={{ textDecoration: 'none' }} className='ms-3'>
          <h1
            style={{
              fontFamily: 'El Messiri',

              color: 'white',
            }}
          >
            <span className='navidation_items' style={{ opacity: 0 }}>
              S{' '}
            </span>
            <span className='navidation_items' style={{ opacity: 0 }}>
              W{' '}
            </span>
            <span className='navidation_items' style={{ opacity: 0 }}>
              O{' '}
            </span>
            <span className='navidation_items' style={{ opacity: 0 }}>
              F
            </span>
          </h1>
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto'>
            <Link to='/'>
              <Button
                variant='dark'
                className='mx-2 navidation_items'
                style={{ opacity: 0 }}
              >
                <SiHomebridge className='me-1 my-auto' size={20} /> Home
              </Button>
            </Link>
            <Link to='/engineers'>
              <Button
                variant='dark'
                className='mx-2 navidation_items'
                style={{ opacity: 0 }}
              >
                <IoPeopleCircleSharp className='me-1 my-auto' size={20} /> All
                Engineers
              </Button>
            </Link>
            <Link to='/roster'>
              <Button
                variant='dark'
                className='mx-2 navidation_items'
                style={{ opacity: 0 }}
              >
                <HiOutlineTableCells className='me-1 my-auto' size={20} />
                New Schedule
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
