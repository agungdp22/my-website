import React from "react";

// import Chip from "@material-ui/core/Chip";
import {
  createStyles, Theme, WithStyles, withStyles,
} from "@material-ui/core";

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
  skills: string[];
}

const Skills = ({ classes }: Props) => (
  <div className={classes.root}>
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/cpp.png" title="C++" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/docker.png" title="Docker" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/golang.png" title="Golang" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/graphql.png" title="GraphQL" />
    <img height="35" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/grpc.png" title="GRPC" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/kafka.png" title="Apache Kafka" />
    <img height="50" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/mongodb.png" title="MongoDB" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/nodejs.png" title="Node js" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/postgres.png" title="Postgres" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/python.png" title="Python" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/raspi.png" title="Raspberry Pi" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/arduino.png" title="Arduino" />
    <img height="45" className={classes.chip} src="https://storage.googleapis.com/agungdp/static/logo/react.png" title="React js" />
  </div>
);

export default withStyles(styles)(Skills);
