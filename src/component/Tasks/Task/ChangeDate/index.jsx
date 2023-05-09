import { Col, Row } from "antd";
import React, {useState} from "react";
import "./style.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ChangeDate = ({ handleClick }) => {
  const [startDate, setStartDate] = useState("");
  const [startDate1, setStartDate1] = useState("");

  return (
    <div className="task">
      <p>Tapşırığın bitmə tarixini dəyişmək</p>
      <br />
      <Row>
        <Col span={12}>
          <label htmlFor="">Tarixin dəyişmə səbəbi</label>
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
            <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              placeholder="Tapşırığın verilmə tarixi"
              className="select-time"
              onChange={(e) => setStartDate(`${e.$D}-${e.$M + 1}-${e.$y}`)}
              format="DD-MM-YYYY"
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              placeholder="Son icra tarixi"
              className="select-time-1"
              onChange={(e) => setStartDate1(`${e.$D}-${e.$M + 1}-${e.$y}`)}
              format="DD-MM-YYYY"
            />
          </LocalizationProvider>
        </Col>
      </Row>
      <div className="task-button">
        <button className="task-button-1" onClick={handleClick}>
          Tarixçə
        </button>
        <button className="task-button-1" onClick={handleClick}>
          Ləğv et
        </button>
        <button type="submit" className="task-button-3">
          Dəyiş
        </button>
      </div>
    </div>
  );
};

export default ChangeDate;
