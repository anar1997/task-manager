import { Col, Row } from "antd";
import { Input } from 'antd';
import React from "react";
import "./style.css";
import man from "./man.jfif";
import { IoCaretDownOutline } from "react-icons/io5";
import './style.css'

const { Search } = Input;

const onSearch = (value) => console.log(value);
const PageHeader = () => {
  return (
    <div className="header-area">
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <Search
            placeholder="Yazışmada axtar"
            onSearch={onSearch}
            style={{
              width: 600,
            }}
            size="small"
            className="search-header"
          />
        </Col>
        <Col span={6}>
          <div className="header-right">
            <div className="header-dropdown">
              <p className="header-dropdown-name">Abdullah</p>
              <img className="header-dropdown-img" src={man} alt="" />
              <IoCaretDownOutline />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PageHeader;
