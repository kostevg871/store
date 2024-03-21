import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";

import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="" />
      </Link>
    </div>

    <div className={styles.rights}>Develop NN</div>

    <div className={styles.socials}>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}></use>
        </svg>
      </a>
    </div>
  </section>
);

export default Footer;
