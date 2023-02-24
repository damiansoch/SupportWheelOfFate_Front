import Card from 'react-bootstrap/Card';

import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className='text-center mt-5'>
      <Row style={{ minHeight: '80vh' }}>
        <Col
          sm={12}
          md={6}
          lg={6}
          className='d-flex align-items-center justify-content-center'
        >
          <Link to='/engineers'>
            <Card
              style={{ width: '18rem', height: '18rem' }}
              className='rounded-circle '
              bg='success'
            >
              <Card.Body className='d-flex align-items-center justify-content-center'>
                <Card.Title>
                  <h1 style={{ lineHeight: '2' }}>
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
          className='d-flex align-items-center justify-content-center'
        >
          <Link to='/roster'>
            <Card
              style={{ width: '18rem', height: '18rem' }}
              className='rounded-circle '
              bg='success'
            >
              <Card.Body className='d-flex align-items-center justify-content-center'>
                <Card.Title>
                  <h1 style={{ lineHeight: '2' }}>
                    Create <br /> Roster
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
