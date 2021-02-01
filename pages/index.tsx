import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  createStyles, Theme, WithStyles, withStyles,
} from "@material-ui/core/styles";

import GridContainer from "../src/components/GridContainer";
import Homepage from "../src/components/Homepage";
import Links from "../src/components/Links";
import Skills from "../src/components/Skills";
import WorkExperience from "../src/components/WorkExperience";
import {
  links,
  skills,
  works,
} from "../src/data";

const styles = ({ spacing }: Theme) => createStyles({
  section: {
    paddingBottom: spacing(3),
    paddingTop: spacing(3),
  },
  sectionHeader: {
    fontSize: 34,
    fontWeight: 300,
    paddingBottom: spacing(0.5),
    paddingTop: spacing(0.5),
    textAlign: "center",
  },
});

const Index = ({ classes }: WithStyles<typeof styles>) => (
  <div>
    <Homepage />
    <GridContainer>
      <Grid item xs={12} className={classes.section}>
        <div style={{ height: 50 }} />
        <Links links={links} />
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <Typography className={classes.sectionHeader} component="h2">
          Work Experience
        </Typography>
        <WorkExperience works={works} />
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <Typography className={classes.sectionHeader} component="h2">
          Skills
        </Typography>
        <Skills skills={skills} />
      </Grid>
    </GridContainer>
  </div>
);

export default withStyles(styles)(Index);
