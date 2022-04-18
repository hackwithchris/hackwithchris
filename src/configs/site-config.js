import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Christopher Chen. All Rights Reserved.`,
  author: {
    name: "Christopher Chen",
    accounts: [
      {
        url: "https://github.com/cchen408",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/cchen408",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/m_ahmad",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/cchen408",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      // {
      //   url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
      //   label: "Quora Account",
      //   type: "red",
      //   icon: <FaQuora />
      // },
      {
        url: "mailto:christopherchen408@gmail.com",
        label: "Email Me",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
