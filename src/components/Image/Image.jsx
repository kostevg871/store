import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import placeholder from "../../images/placeholder.png";
import { TailSpin } from "react-loader-spinner";

export const Image = ({ images, title }) => {
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <TailSpin visible={loading} wrapperClass={styles.spinWrapper} />
      <img
        style={{ visibility: loading ? "hiden" : "visible" }}
        className={styles.image}
        src={isError ? placeholder : images[0]}
        alt={title}
        onError={() => setIsError(true)}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};
