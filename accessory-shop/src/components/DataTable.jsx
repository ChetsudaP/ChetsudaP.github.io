import React, { useState, useRef, useEffect } from "react";
// import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const DataTable = ({ data, onDelete, onSearch, onSort, onSortDes}) => {
    const sRef = React.useRef();

  const handleDelete = (index) => {
    // console.debiug("Delete", index)
    // data.splice(index, 1)
    onDelete(index);
    // console.table(data)
  };

  const handleSearch = () => {
    const keyword = sRef.current.value;
    // console.debug(keyword)
    // data.filter(item => item.name.includes(keyword))
    // console.table(data)
    onSearch(keyword);
  };

  const handleSortAs = () => {
    onSort()
  };

  const handleSortDes = () => {
    onSortDes()
  };



  return (
    <Container>
      <input type="text" placeholder="Search..." ref={sRef} />{" "}
      <Button onClick={handleSearch}>Search</Button>
      <p>Sort</p>
      <button onClick={handleSortDes} type="button" className="btn btn-outline-dark">↑</button>
      <button onClick={handleSortAs} type="button" className="btn btn-outline-dark">↓</button>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                {item.id}
                <i
                  className="bi bi-trash3"
                  onClick={() => handleDelete(index)}
                ></i>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DataTable;
