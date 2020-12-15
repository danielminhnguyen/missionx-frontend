import React, { useState } from "react";
import "./NavigationBar.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo-white.png";
import nzflag from "../../img/nz-flag.png";
import maoriflag from "../../img/maori-flag.png";
import profilePhoto from "../../img/rawiri_profile.png";
import { useSelector } from "react-redux";
import { Popover, Typography, Container } from "@material-ui/core";
import makeStyles from "./styles";

export default function NavigationBar(props) {
  const classes = useStyle();
  const { modalClick, authenticated, modalOpen, loginSingup, ModalClose } = props;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [anchor, setAnchor] = useState(null);

  const handlePopoverOpen = (e) => {
    setAnchor(e.currentTarget);
    console.log(open);
  };

  const handlePopoverClose = () => {
    setAnchor(null);
  };

  // const open = Boolean(anchor);
  const open = Boolean(anchor);

  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/">Teachers</Link>
          </li>
        </ul>
      </nav>
      <div className="login-language">
        <div className="language">
          <span>LANG</span>
          <img src={nzflag} alt="" />
          <img src={maoriflag} alt="" />
        </div>
        {userInfo ? (
          <Container
            className="login-register"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <img src={profilePhoto} alt="" />
            <span>{`${userInfo.FirstName} ${userInfo.LastName}`}</span>
            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchor}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              disableRestoreFocus
            >
              <Typography variant="h4">My Profile</Typography>
              <Typography variant="h4">Settings</Typography>
              <Typography variant="h4">Log out</Typography>
            </Popover>
          </Container>
        ) : (
          <div className="login-register">
            <div className="register" onClick={() => modalClick("Sign Up")}>
              Register
            </div>
            <span> | </span>
            <div className="login" onClick={() => modalClick("Login")}>
              Login
            </div>
          </div>
        )}
        {/* {authenticated ? loggedin : notloggedin} */}
      </div>
    </div>
  );
}
