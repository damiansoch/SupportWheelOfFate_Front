import { useEffect, useState } from 'react';

import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import gsap from 'gsap';

const AllEngineersScreen = () => {
  const [engineers, setEngineers] = useState([]);
  //animations

  useEffect(() => {
    gsap.to('.table-container', {
      opacity: 100,
      duration: 30,
      delay: 0.1,
      ease: 'power0',
    });
  }, [engineers]);
  //api
  useEffect(() => {
    axios.get('https://localhost:7018/api/Engineer/').then((res) => {
      setEngineers(res.data);
    });
  }, []);
  return (
    <div className='text-center table-container my-5' style={{ opacity: 0 }}>
      <h1 className='mx-auto my-5 text-white'>All engineers</h1>
      {engineers.length === 0 && (
        <Spinner animation='grow' variant='success' className='mt-5' />
      )}
      {engineers.length > 0 && (
        <Table striped bordered hover size='sm' variant='success'>
          <thead>
            <tr>
              <th>#</th>

              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {engineers &&
              engineers.map((engineer, index) => (
                <tr key={engineer.id}>
                  <td>{index + 1}</td>
                  <td>{engineer.firstName}</td>
                  <td>{engineer.lastName}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AllEngineersScreen;
