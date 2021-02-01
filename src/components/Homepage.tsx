import React, { MouseEvent } from "react";
import smoothScroll from "smoothscroll";

import Fab from "@material-ui/core/Fab";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const SCROLL_TARGET_ID = "scrollTarget";

const styles = createStyles({
  background: {
    position: "relative",
    backgroundColor: "#ffffff",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100vh",
  },
  titleWrapper: {
    position: "absolute",
    textAlign: "center",
    top: "35%",
    left: 0,
    right: 0,
  },
  titleLead: {
    fontSize: "40px",
    "@media (min-width: 480px)": {
      fontSize: 37,
    },
  },
  titleHeader: {
    color: "#212529",
    "@media (min-width: 600px)": {
      fontSize: 20,
    },
  },
  buttonWrapper: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    bottom: 30,
  },
});

const Homepage = ({ classes }: WithStyles<typeof styles>) => {
  const scroll = (e: MouseEvent) => {
    e.preventDefault();
    const scrollTarget = document.querySelector(`#${SCROLL_TARGET_ID}`);
    if (scrollTarget !== null) {
      smoothScroll(scrollTarget, 1500);
    }
  };
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.titleWrapper}>
          <div className={classes.titleLead}>
            Agung Dwi Prasetyo
            <br />
            <div className={classes.titleHeader}>
              Software Engineer
            </div>
            <div className={classes.titleHeader}>
              Open Source Enthusiast
            </div>
          </div>
        </div>
        <div className={classes.buttonWrapper}>
          <Fab aria-label="Scroll down" color="secondary" onClick={scroll}>
            <ArrowDownward />
          </Fab>
        </div>
      </div>
      <div id={SCROLL_TARGET_ID} />

    </div>
  );
};

export default withStyles(styles)(Homepage);
