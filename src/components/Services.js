import React from "react";
import CardServices from "./CardServices";

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
      <div className="services__header">
        <h1 className="services__label">services</h1>
        <p className="services__subtitle">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natur
        </p>
      </div>
      <div className="services__main">{card}</div>
    </div>
  );
}

export default Services;
