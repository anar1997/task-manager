import { Col, Row } from "antd";
import { Input } from "antd";
import React, { useState } from "react";
import "./style.css";
import man from "./man.jfif";
import { IoCaretDownOutline } from "react-icons/io5";
import "./style.css";
import { Link } from "react-router-dom";
import AppExit from "./AppExit/AppExit";

const { Search } = Input;

const onSearch = (value) => console.log(value);
const PageHeader = () => {
  const [show, setShow] = useState(false);

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
            <div className="header-dropdown-1">
              <div className="header-dropdown">
                <p className="header-dropdown-name">Abdullah</p>
                <img className="header-dropdown-img" src={man} alt="" />
                <div className="" onClick={() => setShow(!show)}>
                  <IoCaretDownOutline />
                </div>
              </div>
              {show && (
                <div className="header-exit">
                  <AppExit />
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PageHeader;
