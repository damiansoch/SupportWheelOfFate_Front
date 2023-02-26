import Card from 'react-bootstrap/Card';

import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import gsap from 'gsap';

const HomeScreen = () => {
  //animation

  useEffect(() => {
    gsap.to('.circle', {
      scale: 1,
      duration: 1,
      delay: 0.4,
      ease: 'back',
      stagger: {
        each: 0.3,
      },
    });
  }, []);
  return (
    <div className='text-center mt-5'>
      <Row style={{ minHeight: '75vh' }}>
        <Col
          sm={12}
          md={6}
          lg={6}
          className='d-flex align-items-center justify-content-center my-3'
        >
          <Link to='/engineers'>
            <Card
              style={{ width: '18rem', height: '18rem', scale: 0 }}
              className='rounded-circle circle'
              bg='success'
            >
              <Card.Body className='d-flex align-items-center justify-content-center'>
                <Card.Title>
                  <h1 className='text-white' style={{ lineHeight: '2' }}>
                    All <br /> Engineers
                  </h1>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col
          sm={12}
          md={6}
          lg={6}
          className='d-flex align-items-center justify-content-center my-3'
        >
          <Link to='/roster'>
            <Card
              style={{ width: '18rem', height: '18rem', scale: 0 }}
              className='rounded-circle circle'
              bg='success'
            >
              <Card.Body className='d-flex align-items-center justify-content-center'>
                <Card.Title>
                  <h1 className='text-white' style={{ lineHeight: '2' }}>
                    New <br /> schedule
                  </h1>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
