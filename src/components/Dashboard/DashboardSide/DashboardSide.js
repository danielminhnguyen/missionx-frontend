import React, { useState } from "react";

// components
import ClassNames from "classnames";

// graphics
import StudentProfile from "assets/images/student-profile.png";
import { ReactComponent as Profile } from "assets/images/profile.svg";
import { ReactComponent as Settings } from "assets/images/settings.svg";
import { ReactComponent as Logout } from "assets/images/logout.svg";

// material ui
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function DashboardSide(props) {
  const classes = useStyles();

  const { tabClick, routes, firstTab } = props;

  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerControl = () => {
    setDrawerOpen(() => !drawerOpen);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        className={
          (classes.drawer,
          ClassNames({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }))
        }
        classes={{
          paperAnchorDockedLeft: ClassNames({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }),
        }}
      >
        <div className={classes.fakeToolBar} />
        <div>
          <img className={classes.profileImage} src={StudentProfile} alt="" />
        </div>
        <div className={classes.navigation}>
          <List>
            {routes.map((item) => (
              <ListItem
                key={item.id}
                autoFocus={item.id === firstTab ? true : false}
                button
                classes={{ button: classes.sideButton }}
                onClick={() => tabClick(item.id)}
              >
                <ListItemIcon classes={{ root: drawerOpen ? classes.icon : classes.iconClose }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={ClassNames({ [classes.hide]: !drawerOpen })}
                  primary={
                    <Typography className={classes.label} variant="h6">
                      {item.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <div className={ClassNames(!drawerOpen ? classes.grow : undefined)}></div>
          <div>
            <div
              className={ClassNames({
                [classes.caretContainerOpen]: drawerOpen,
                [classes.caretContainerClose]: !drawerOpen,
              })}
            >
              <div
                className={ClassNames({
                  [classes.rightCaret]: drawerOpen,
                  [classes.leftCaret]: !drawerOpen,
                })}
                onClick={handleDrawerControl}
              >
                <div
                  className={ClassNames({
                    [classes.rightTriangle]: drawerOpen,
                    [classes.leftTriangle]: !drawerOpen,
                  })}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={ClassNames({
              [classes.bottomMenuOpen]: drawerOpen,
              [classes.bottomMenuClose]: !drawerOpen,
            })}
          >
            <div className="column">
              <Profile />
              <Typography className={classes.bottomLabel}>Profile</Typography>
            </div>
            <div className="column">
              <Settings />
              <Typography className={classes.bottomLabel}>Settings</Typography>
            </div>
            <div className="column">
              <Logout />
              <Typography className={classes.bottomLabel}>Log out</Typography>
            </div>
          </div>
        </div>
        <div className={classes.fakeToolBar} />
      </Drawer>
    </>
  );
}
