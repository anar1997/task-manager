import { Col, Row } from "antd";
import React from "react";
import PageHeader from "../../component/PageHeader";
import Team from "../../component/Team";
import App from "../ChatApp/index";
import "./style.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <PageHeader />
      <Row>
        <Col span={20}>
          <App />
        </Col>
        <Col span={4}>
          <Team />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
