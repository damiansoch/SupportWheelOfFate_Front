import axios from "axios";
import React, { useState } from "react";
import { Button, Table, Row, Col } from "react-bootstrap";

const RosterScreen = () => {
  const [allShifts, setAllShifts] = useState([]);
  console.log(allShifts);

  const clickHandler = () => {
    axios.get("https://localhost:7018/api/Rota").then((res) => {
      setAllShifts(res.data);
    });
  };

  const printClickHandler = () => {
    var divToPrint = document.getElementById("printTable");
    var newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
  };

  return (
    <div className="text-center">
      <h1>Schedule</h1>

      <Button variant="success" className="mb-3" onClick={clickHandler}>
        Create new roster
      </Button>

      {allShifts.length > 0 && (
        <Table
          className="table-condensed"
          striped
          bordered
          hover
          size="sm"
          variant="success"
          id="printTable"
        >
          <thead>
            <tr>
              <th
                style={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "grey",
                }}
              >
                Day
              </th>
              <th
                style={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "grey",
                }}
              >
                Shift
              </th>
              <th
                style={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "grey",
                }}
              >
                Engineer
              </th>
            </tr>
          </thead>
          <tbody>
            {allShifts.map((shift) => (
              <tr key={shift.id}>
                <td>DAY: {shift.day}</td>
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
        <Button className="my-3" onClick={printClickHandler} variant="success">
          Print
        </Button>
      )}
    </div>
  );
};

export default RosterScreen;
