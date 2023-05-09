import React, {useState} from "react";
import ChangeDate from "../ChangeDate";
import "./style.css";
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

const History = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="task-history" onClick={handleOpen}>
        <p>Tapşırıq tarixçəsi</p>
        <br />
        <table className="task-table">
          <thead>
            <tr>
              <th>Dəyişmə tarixi</th>
              <th>Səbəb</th>
              <th>Yeni tarix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ChangeDate handleClick={handleClose} handleClick1={handleOpen}/>
        </Box>
      </Modal>
    </>
  );
};

export default History;
