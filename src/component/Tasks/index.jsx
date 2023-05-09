import React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./style.css";
import AddTask from "../AddTask";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillExclamationSquareFill, IconName } from "react-icons/bs";
import Task from "./Task";

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

const Tasks = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [openTask, setOpenTask] = React.useState(false);
  const handleOpenTask = () => setOpenTask(true);
  const handleCloseTask = () => setOpenTask(false);

  return (
    <>
      <div className="tasks">
        <div className="task-name">
          <label htmlFor="">Tapşırıqlar</label>
          <Button onClick={handleOpen1}>
            <AddCircleOutlineIcon className="main-icon-1" />
          </Button>
        </div>
        <div className="tasks-line-2">
          <select className="tasks-select" name="" id="">
            <option value="">7 gün</option>
            <option value="">14 gün</option>
            <option value="">21 gün</option>
            <option value="">1 ay</option>
          </select>
          <button className="tasks-search-button">Axtar</button>
        </div>
        <div className="tasks-line-3">
          <div className="tasks-line-3-div">
            <p onClick={handleOpenTask}>Tapşırıq başlıq_01</p>
            <FaRegCheckCircle className="tasks-line-icon"/>
          </div>
          <div className="tasks-line-3-div">
            <p onClick={handleOpenTask}>Tapşırıq başlıq_01</p>
            <AiOutlineLoading3Quarters className="tasks-line-icon-1"/>
          </div>
          <div className="tasks-line-3-div">
            <p onClick={handleOpenTask}>Tapşırıq başlıq_01</p>
            <BsFillExclamationSquareFill className="tasks-line-icon-2"/>
          </div>
        </div>
      </div>
      <Modal
        open={open1}
        onClose={handleClose1}
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
          <AddTask handleClick={handleClose1} />
        </Box>
      </Modal>
      <Modal
        open={openTask}
        onClose={handleCloseTask}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Task handleClick={handleCloseTask}/>
        </Box>
      </Modal>
    </>
  );
};

export default Tasks;
