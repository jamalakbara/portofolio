import React from "react";
import Project from "../Project";

export const subtitle =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur";

const portoItem = [
  {
    id: 1,
    img: "/img/logo hc.png",
    projs: "/img/hc wiki.jpg",
    title: "HC Wiki",
    company: "PT Telkom Indonesia",
  },
  {
    id: 2,
    img: "/img/logo refresh.png",
    projs: "/img/refresh.jpg",
    title: "Refresh",
    company: "PT Telkom Indonesia",
  },
  {
    id: 3,
    img: "/img/logo simarak.png",
    projs: "/img/simarak.jpg",
    title: "Simarak",
    company: "Bea Cukai",
  },
];

export const portos = portoItem.map((item) => (
  <Project
    key={item.id}
    img={item.img}
    projs={item.projs}
    title={item.title}
    company={item.company}
  />
));
