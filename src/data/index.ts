/* eslint-disable import/prefer-default-export */
import parseISO from "date-fns/parseISO";

import {
  Link, Project, Work,
} from "./types";
import rawLinks from "./links.json";
import rawProjects from "./projects.json";
import rawSkills from "./skills.json";
import rawWorks from "./works.json";

export const links: Link[] = rawLinks;

export const projects: Project[] = rawProjects.map((t, i) => Object.assign(t, {
  id: i,
  start: parseISO(t.start),
  end: t.end ? parseISO(t.end) : null,
}));

export const skills: string[] = rawSkills;

export const works: Work[] = rawWorks.map((w, i) => {
  const start = parseISO(w.start);
  const end = (w.end !== null) ? parseISO(w.end) : null;
  return Object.assign(w, {
    id: i,
    start,
    end,
  });
});
