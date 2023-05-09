import { Col, Row } from "antd";
import React, { useState } from "react";
import "./style.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddTask = ({handleClick}) => {
  const [startDate, setStartDate] = useState("");

  return (
    <form action="">
      <div className="add-task">
        <p>Tapşırıq əlavə et!</p>
        <br />
        <Row>
          <Col span={12}>
            <input className="add-task-input" type="text" placeholder="Başlıq" />
            <textarea
              placeholder="Tərkib"
              className="task-textarea"
              name=""
              id=""
              cols="23"
              rows="8"
            ></textarea>
          </Col>
          <Col span={12}>
            <select name="" id="" required>
              <option
                value=""
                disabled={true}
                selected
                className="option-placeholder"
              >
                Tapşırıq alan
              </option>
            </select>
            

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
              placeholder="Son icra tarixi"
              className="select-time"
              onChange={(e) => setStartDate(`${e.$D}-${e.$M + 1}-${e.$y}`)}
              format="DD-MM-YYYY"
              
              />
            </LocalizationProvider>
          </Col>
        </Row>
        <div className="add-task-button">
          <button className="add-task-button-1" onClick={handleClick}>Ləğv et</button>
          <button type="submit" className="add-task-button-2">
            Əlavə et
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
