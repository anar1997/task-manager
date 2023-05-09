import React, { forwardRef, useRef, useState } from "react";
import { Divider, Layout, Menu } from "antd";
import "./style.css";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { IoAddCircle, IoAddCircleOutline } from "react-icons/io5";
import { CgCopyright } from "react-icons/cg";
import profile from "./clear-img.jfif";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import HomePage from "../HomePage";
import AddTeamMember from "../../component/AddTeamMember";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddTask from "../../component/AddTask";
import Advertisements from "../../component/Advertisements";
import Team from "../../component/Team";
import { Col, Row } from "antd";
import PageHeader from "../../component/PageHeader";
import App from "../ChatApp";
import Tasks from "../../component/Tasks";
import ContentPage from "../../component/ContentPage";
import Account from "../../component/Account";
import Parametrs from "../../component/Parametrs";
import AppExit from "../../component/PageHeader/AppExit/AppExit";


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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [showtab, setShowtab] = useState(1);

  const handletab = function (e) {
    setShowtab(e);
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
                        {fileList.length < 1 && "+ Upload"}
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
                  <div className="main-link">
                    <Link onClick={() => handletab(1)}>Komanda</Link>
                    <Button onClick={handleOpen}>
                      <AddCircleOutlineIcon className="main-icon" />
                    </Button>
                  </div>
                ),
              },
              {
                key: "/",
                className: "komanda-li-2",
                label: (
                  <div className="main-link">
                    <Link onClick={() => handletab(2)}>Tapşırıqlar</Link>
                    <Button onClick={handleOpen1}>
                      <AddCircleOutlineIcon className="main-icon" />
                    </Button>
                  </div>
                ),
              },
              {
                key: "/",
                className: "komanda-li-3",
                label: (
                  <div className="main-link">
                    <Link onClick={() => handletab(3)}>Elanlar</Link>
                    <Button onClick={handleOpen2}>
                      <AddCircleOutlineIcon className="main-icon" />
                    </Button>
                  </div>
                ),
              },
            ]}
          />
          <div className="kodaze">
            <CgCopyright className="copyright" />
            <p>kodaze</p>
          </div>
        </Sider>
        <Layout>
          <Content className="content">
            {/* <Routes>
              <Route path="/" element={<Outlet />}>
                <Route path="" element={<HomePage />} />
              </Route>
            </Routes> */}
            <div className="home-page">
              <PageHeader />
              <Row>
                <Col span={20}>
                  <App />
                </Col>
                <Col span={4}>
                  {showtab === 1 ? (
                    <Team />
                  ) : showtab === 2 ? (
                    <Tasks />
                  ) : showtab === 3 ? (
                    <Parametrs />
                  ) : (
                    <ContentPage />
                  )}
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
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
          <AddTeamMember handleClick={handleClose} />
        </Box>
      </Modal>
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
        open={open2}
        onClose={handleClose2}
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
          <Advertisements handleclick={handleClose2} />
        </Box>
      </Modal>
    </>
  );
};

export default Main;
