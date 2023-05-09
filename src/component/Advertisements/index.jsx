import { Col, Row } from "antd";
import React, { useState } from "react";
import "./style.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Advertisements = ({ handleclick }) => {
  const [startDate, setStartDate] = useState("");

  return (
    <form action="">
      <div className="advertisements">
        <div className="adver-div">
          <p>Elan əlavə et!</p>
          <br />
          <textarea
            placeholder="Tərkib"
            className="adver-textarea"
            name=""
            id=""
            cols="23"
            rows="8"
          ></textarea>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              placeholder="Son icra tarixi"
              className="select-time"
              onChange={(e) => setStartDate(`${e.$D}-${e.$M + 1}-${e.$y}`)}
              format="DD-MM-YYYY"
            />
          </LocalizationProvider>
          <div className="add-adver-button">
            <button className="add-adver-button-1" onClick={handleclick}>
              Ləğv et
            </button>
            <button type="submit" className="add-adver-button-2">
              Əlavə et
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Advertisements;
