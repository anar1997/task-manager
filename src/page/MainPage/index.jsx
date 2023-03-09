import React, { useRef, useState } from "react";
import { Divider, Layout, Menu } from "antd";
import "./style.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { IoAddCircle, IoAddCircleOutline } from "react-icons/io5";
import { CgCopyright } from "react-icons/cg";
import profile from "./clear-img.jfif";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import HomePage from "../HomePage";

const { Content, Sider } = Layout;

const Main = () => {
  const location = useLocation();
  let { pathname } = location;

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
    <>
      <Layout>
        <Sider
          width={130}
          style={{ backgroundColor: "#263045", position: "sticky" }}
          className="main-sider"
        >
          <Menu
            style={{ backgroundColor: "#263045" }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[pathname]}
            items={[
              {
                key: "/",
                className: "komanda-logo",
                label: (
                  <div>
                    <ImgCrop rotate>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                      >
                        {fileList.length < 5 && "+ Upload"}
                      </Upload>
                    </ImgCrop>
                  </div>
                ),
              },
              {
                key: "/",
                className: "komanda-name",
                label: (
                  <input className="komanda-input" placeholder="Komanda Adı" />
                ),
              },
              {
                key: "/",
                className: "komanda-li",
                label: (
                  <Link className="main-link" to="/">
                    Komanda
                    <IoAddCircleOutline className="main-icon" />
                  </Link>
                ),
              },
              {
                key: "/",
                className: "komanda-li-2",
                label: (
                  <Link className="main-link" to="/">
                    Tapşırıqlar
                    <IoAddCircleOutline className="main-icon" />
                  </Link>
                ),
              },
              {
                key: "/",
                className: "komanda-li-3",
                label: (
                  <Link className="main-link" to="/">
                    Elanlar
                    <IoAddCircleOutline className="main-icon" />
                  </Link>
                ),
              },
            ]}
          />
          <div className="kodaze">
            <CgCopyright className="copyright"/> 
            <p>kodaze</p>
          </div>
        </Sider>
        <Layout>
          <Content className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Main;
