import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Socmed from "../Socmed";

export const socmedList = [
  {
    key: 1,
    href: "https://www.facebook.com/jamalakbara",
    icon: <FacebookIcon />,
  },
  {
    key: 2,
    href: "https://www.twitter.com/jamalakbara",
    icon: <TwitterIcon />,
  },
  {
    key: 3,
    href: "https://www.instagram.com/jamalakbara",
    icon: <InstagramIcon />,
  },
  {
    key: 4,
    href: "https://www.linkedin.com/in/jaabalagendir",
    icon: <LinkedInIcon />,
  },
  {
    key: 5,
    href: "https://www.github.com/jamalakbara",
    icon: <GitHubIcon />,
  },
];

export const info = {
  alamat:
    "Jln. Cibodas Raya Komplek Mutiara Antapani B-5, Antapani, Bandung Indonesia",
  email: "jamalakbaralam@live.com",
  tlp: "+6281321766565",
  web: "www.jaa.com",
};

export const socmed = socmedList.map((item) => (
  <Socmed key={item.key} Icon={item.icon} href={item.href} />
));
