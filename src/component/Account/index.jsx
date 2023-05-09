import React, { useState } from "react";
import "./style.css";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import { RiFolderUserFill } from "react-icons/ri";
import { GrMailOption } from "react-icons/gr";
import { MdPhoneInTalk } from "react-icons/md";

const Account = () => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      // name: "image.png",
      status: "done",
      url: "",
    },
  ]);

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
      <div className="account">
        <div className="account-img">
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
        </div>
        <br /><br />
        <p>Vəzifə</p>
        <br />
        <div className="account-line-3">
            <div className="account-line-3-a">
                <RiFolderUserFill className="account-icon"/>
                <input className="account-input" placeholder="First Name Last Name" type="text" />
            </div>
            <div className="account-line-3-a">
                <GrMailOption className="account-icon"/>
                <input className="account-input" placeholder="Member@gmail.com" type="text" />
            </div>
            <div className="account-line-3-a">
                <MdPhoneInTalk className="account-icon"/>
                <input className="account-input" placeholder="+1 652 633 65" type="text" />
            </div>
        </div>
        <div className="account-line-4">
        <button type="submit" className="account-button">
            Şifrəni dəyiş
          </button>
        </div>
      </div>
    </form>
  );
};

export default Account;
