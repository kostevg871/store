import React from "react";

import styles from "../../styles/Home.module.css";

import bannerImag from "../../images/banner.png";

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        NEW YEAR
        <span>Sale</span>
      </p>
      <button className={styles.more}>See more</button>
    </div>
    <div
      className={styles.right}
      style={{ backgroundImage: `url(${bannerImag})` }}
    >
      <p className={styles.discount}>
        save up to <span>50 %</span> of
      </p>
    </div>
  </section>
);

export default Banner;
