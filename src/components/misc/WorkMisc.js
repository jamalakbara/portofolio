import React from "react";
import Experiences from "../Experiences";

const experiencesList = [
  {
    key: 1,
    date: "may - jun 2019",
    title: "Internship as Web Developer",
    company: "PT Telkom Indonesia",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    href: "/img/hc wiki.jpg",
  },
  {
    key: 2,
    date: "jul - sep 2019",
    title: "Part-Time as Web Developer",
    company: "PT Telkom Indonesia",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    href: "#",
  },
  {
    key: 3,
    date: "feb 2020",
    title: "Freelance as Web Developer",
    company: "Bea Cukai",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    href: "/img/simarak.jpg",
  },
  {
    key: 4,
    date: "feb - mar 2020",
    title: "Part-Time as Web Developer",
    company: "PT Telkom Indonesia",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    href: "/img/refresh.jpg",
  },
];

export const subtitle =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur";

export const experiences = experiencesList.map((exp) => (
  <Experiences
    date={exp.date}
    title={exp.title}
    company={exp.company}
    desc={exp.desc}
    href={exp.href}
    key={exp.key}
  />
));
