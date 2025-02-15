import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/Bookroom.css";
import { Modal, Button, Carousel } from "react-bootstrap";
import moment from "moment";


export const Roomslist = ({ room , fromdate, todate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formatDate = (date) => moment(date, 'DD-MM-YYYY').format('DD-MM-YYYY');


  return (
    <div>
         


    <div className="row boxshaows ">
      <div key={room._id} className="col-md-4">
        <img src={room.imageurls[0]} className="smallimghostel" />
      </div>
      <div id="roomdetailss" className="col-md-7">
        <h1>{room.name}</h1>
        <p>Max Count :{room.maxcount}</p>
        <p>Rent/Day : {room.rentperday}</p>
        <div className="buttonss" style={{ float: "right" }}>
          <Link to={'/book/'+room._id +'/from' + formatDate(fromdate) + '/to' + formatDate(todate)}>
            <button className=" btn-primary">Book Now</button>
          </Link>
          <button className="btn-primary " onClick={handleShow}>
            {" "}
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel key={room._id}>
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100 bigimgcaro" src={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};
