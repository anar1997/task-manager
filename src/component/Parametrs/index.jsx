import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPosition from "./AddPosition";
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

const Parametrs = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <form action="">
      <div className="parametrs">
        <div className="parametrs-line-1">
          <label htmlFor="">Vəzifələr</label>
          <Button onClick={handleOpen}>
            <AddCircleOutlineIcon className="main-icon-1" />
          </Button>
        </div>
        <div className="parametrs-line-2">
          <div className="parametrs-line-2a">Front end</div>
          <div className="parametrs-line-2a">Front end</div>
          <div className="parametrs-line-2a">Front end</div>
          <div className="parametrs-line-2a">Front end</div>
          <div className="parametrs-line-2a">Front end</div>
          <div className="parametrs-line-2a">Front end</div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
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
          <AddPosition handleClick={handleClose} />
        </Box>
      </Modal>
    </form>
  );
};

export default Parametrs;
