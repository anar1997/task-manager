import { Col, Row, Upload } from "antd";
import React, { useState } from "react";
import "./style.css";
import ImgCrop from "antd-img-crop";
import { Link } from "react-router-dom";

const AddTeamMember = ({handleClick}) => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      // name: "image.png",
      status: "done",
      url: "",
    },
  ]);

  const [show, setShow] = useState(true);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <form action="">
      <div className="add-member">
        <p>Komanda üzvü əlavə et!</p>
        <br />
        <Row>
          <Col span={16}>
            <input type="text" placeholder="Ad Soyad" />
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="Mobil nömrə" />
            <select name="" id="" required>
              <option
                value=""
                disabled={true}
                selected
                className="option-placeholder"
              >
                Vəzifə
              </option>
            </select>
            <input type="text" placeholder="İstifadəçi adı" />
            <input type="password" placeholder="İstifadəçi şifrəsi" />
          </Col>
          <Col span={8} className="rigth-col">
            <ImgCrop rotate>
              <Upload
                className="upload"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Col>
        </Row>
        <div className="add-member-button">
          <button className="add-member-button-1" onClick={handleClick}>Ləğv et</button>
          <button type="submit" className="add-member-button-2">
            Əlavə et
          </button> 
        </div>
      </div>
    </form>
  );
};

export default AddTeamMember;
