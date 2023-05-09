import React from "react";
import "./style.css";

const AddPosition = ({handleClick}) => {
  return (
    <form action="">
      <div className="add-position">
        <p>Vəzifə Əlavə et!</p>
        <input className="add-position-input" type="text" placeholder="Vəzifə adı"/>
        <div className="add-position-button">
          <button className="add-position-button-1" onClick={handleClick}>Ləğv et</button>
          <button type="submit" className="add-position-button-2">
            Əlavə et
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddPosition;
