import React from "react";
import CardServices from "./CardServices";
import Title from "./Title";

function Services() {
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

  const subtitle =
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natur";

  const title = (
    <Title
      parentClass={"services__header"}
      labelClass={"services__label"}
      label={"services"}
      subtitle={subtitle}
      subtitleClass={"services__subtitle"}
    />
  );

  const card = cardItems.map((item) => (
    <CardServices
      key={item.id}
      style={item.style}
      title={item.title}
      isi={item.isi}
    />
  ));

  return (
    <div className="services" id="services">
      {title}
      <div className="services__main">{card}</div>
    </div>
  );
}

export default Services;
