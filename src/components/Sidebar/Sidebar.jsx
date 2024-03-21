import React from "react";

import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { categoriesSelect } from "../../features/categories/selectors";

const Sidebar = () => {
  const list = useSelector(categoriesSelect);
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list?.slice(0, 5).map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" targer="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/terms"
          targer="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms and Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
