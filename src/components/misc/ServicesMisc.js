import React from "react";
import CardServices from "../CardServices";

const cardItems = [
  {
    id: 1,
    style: {
      backgroundImage: "url('/img/web.jpg')",
    },
    title: "web development",
    isi:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
  },
  {
    id: 2,
    style: {
      backgroundImage: "url('/img/mobel.jpg')",
    },
    title: "mobile development",
    isi:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
  },
];

export const subtitle =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur";

export const card = cardItems.map((item) => (
  <CardServices
    key={item.id}
    style={item.style}
    title={item.title}
    isi={item.isi}
  />
));
