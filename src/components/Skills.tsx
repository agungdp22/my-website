import React from "react";

// import Chip from "@material-ui/core/Chip";
import {
  createStyles, Theme, WithStyles, withStyles,
} from "@material-ui/core";
import { Skill } from "../data/types";

const styles = ({ spacing }: Theme) => createStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "middle",
    textAlign: "center"
  },
  chip: {
    margin: spacing(2)
  },
});

interface Props extends WithStyles<typeof styles> {
  skills: Skill[];
}

const Skills = ({ classes, skills }: Props) => (
  <div className={classes.root}>
    { skills.map((s) => <img height={s.height} className={classes.chip} src={s.image} title={s.name} />) }
  </div>
);

export default withStyles(styles)(Skills);
