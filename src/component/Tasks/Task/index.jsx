import { Col, Row } from "antd";
import React, {useState} from "react";
import "./style.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import History from "./History";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const Task = ({ handleClick }) => {
  const [open5, setOpen5] = useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const [startDate, setStartDate] = React.useState("");
  const [startDate1, setStartDate1] = React.useState("");

  return (
    <>
      <div className="task">
        <p>Tapşırıq</p>
        <br />
        <Row>
          <Col span={12}>
            <input className="task-input" type="text" placeholder="Başlıq" />
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
            <input
              className="task-input-1"
              type="text"
              placeholder="Tapşırığı verən komanda üzvü"
            />
          </Col>
        </Row>
        <div className="task-button">
          <button className="task-button-1" onClick={handleOpen5}>Tarixçə</button>
          <button className="task-button-1" onClick={handleClick}>
            Ləğv et
          </button>
          <button type="submit" className="task-button-2">
            Tamamla
          </button>
        </div>
      </div>
      <Modal
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {/* <AddTask handleClick={handleClose1} /> */}
          <History />
        </Box>
      </Modal>
    </>
  );
};

export default Task;
