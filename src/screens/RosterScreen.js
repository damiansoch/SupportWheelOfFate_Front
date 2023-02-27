import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Button, Table, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

import gsap from 'gsap';

const RosterScreen = () => {
  const [allShifts, setAllShifts] = useState([]);

  //animation
  useEffect(() => {
    gsap.to('.schedule-container', {
      opacity: 100,
      duration: 30,
      delay: 0.1,
      ease: 'power0',
    });
  }, [allShifts]);
  //api
  useEffect(() => {
    axios.get('https://localhost:7018/api/Rota').then((res) => {
      setAllShifts(res.data);
    });
  }, []);

  const clickHandler = () => {
    setAllShifts([]);
    axios.get('https://localhost:7018/api/Rota').then((res) => {
      setAllShifts(res.data);
    });
  };

  //sorting by engineer
  const sortByEngineer = () => {
    const allShiftsByEngineer = [...allShifts].sort((a, b) =>
      a.engineer.lastName > b.engineer.lastName ? 1 : -1
    );
    setAllShifts(allShiftsByEngineer);
  };
  //sorting by day
  const sortByDay = () => {
    const allShiftsByDay = [...allShifts].sort((a, b) => a.day - b.day);
    setAllShifts(allShiftsByDay);
  };

  const printClickHandler = () => {
    window.print();
  };

  return (
    <div className='text-center schedule-container' style={{ opacity: 0 }}>
      <h1 className='text-white my-5'>Schedule</h1>
      <Row className='mb-3'>
        <Col>
          <Button size='sm' variant='outline-success' onClick={sortByDay}>
            By day
          </Button>
        </Col>
        <Col>
          <Button
            size='sm'
            variant='success'
            className='mb-3'
            onClick={clickHandler}
          >
            Create new schedule
          </Button>
        </Col>
        <Col>
          <Button size='sm' variant='outline-success' onClick={sortByEngineer}>
            By engineer
          </Button>
        </Col>
      </Row>

      <br />
      {allShifts.length === 0 && (
        <Spinner animation='grow' variant='success' className='mt-5' />
      )}
      {allShifts.length > 0 && (
        <Table
          className='table-condensed'
          striped
          bordered
          hover
          size='sm'
          variant='success'
          id='printTable'
        >
          <thead>
            <tr>
              <th
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: 'grey',
                }}
              >
                Day
              </th>
              <th
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: 'grey',
                }}
              >
                Shift
              </th>
              <th
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: 'grey',
                }}
              >
                Engineer
              </th>
            </tr>
          </thead>
          <tbody>
            {allShifts.map((shift) => (
              <tr key={shift.id}>
                <td>Day: {shift.day} </td>
                <td>{shift.timeOfDay}</td>
                <td>
                  {shift.engineer.firstName} {shift.engineer.lastName}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {allShifts.length > 0 && (
        <Button className='my-3' onClick={printClickHandler} variant='success'>
          Print
        </Button>
      )}
    </div>
  );
};

export default RosterScreen;
