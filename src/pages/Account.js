import React from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Image,
} from "react-bootstrap";

import { useThemeHook } from "../Globals/ThemeProvider";
import Heading from "../components/Heading";
import profilePic from "../assets/images/profile-picture.png";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import "./Account.css";
import OrderCard from "../components/OrderCard";

const Account = () => {
  const [theme] = useThemeHook();
  return (
    <Container className="py-5 mt-5">
      <Heading heading="My Account" />
      <Tab.Container defaultActiveKey="my-orders">
        <Row className="justify-content-evenly mt-4 p-1">
          <Col
            sm={3}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-2 rounded h-100 mb-3 user-menu`}
          >
            <Row className="mb-3 py-2">
              <Col xs={3} className="pe-0">
                <Image
                  src={profilePic}
                  thumbnail
                  fluid
                  roundedCircle
                  className="p-0"
                />
              </Col>
              <Col xs={9} className="pt-1">
                <span>Hello,</span>
                <h4>Customer</h4>
              </Col>
            </Row>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="mb-3">
                <Nav.Link eventKey="my-orders">
                  My Orders
                  <FaClipboardList size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="account-details">
                  Account Details
                  <FaUser size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="address">
                  Address
                  <IoLocationSharp size="1.4rem" />
                </Nav.Link>
                <Nav.Link eventKey="wallet">
                  Wallet
                  <GiWallet size="1.4rem" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            sm={8}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-2 rounded`}
          >
            <Tab.Content>
              <Tab.Pane eventKey="my-orders">
                <Heading heading="My Orders" size="h3" />
                <OrderCard
                  orderDate="22 May, 2024"
                  orderId="987654"
                  title="Fila - Fila Disruptor White sneakers"
                  img="https://images.unsplash.com/photo-1579446565308-427218a2c60e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNuZWFrZXJzfGVufDB8MHwwfHx8MA%3D%3D"
                  deliveredDate="04 June, 2024"
                />
                <OrderCard
                  orderDate="28 May, 2024"
                  orderId="123456"
                  title="Off - White Low Vulcanized Sneakers"
                  img="https://images.unsplash.com/photo-1584590069631-1c180f90a54c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHNuZWFrZXJzfGVufDB8MHwwfHx8MA%3D%3D"
                  deliveredDate="03 June, 2024"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="account-details">
                <Heading heading="Account details" size="h3" />
              </Tab.Pane>
              <Tab.Pane eventKey="address">
                <Heading heading="Address" size="h3" />
              </Tab.Pane>
              <Tab.Pane eventKey="wallet">
                <Heading heading="Wallet" size="h3" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Account;
