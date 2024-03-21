import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Products.module.css";
import { Image } from "../../components/Image/Image";

const Products = ({ title, products = [], amound, style = {} }) => {
  const list = products.filter((_, i) => i < amound);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}
      {list.length ? (
        <div className={styles.list}>
          {list.map(({ id, images, title, category: { name: cat }, price }) => (
            <Link to={`/products/${id}`} key={id} className={styles.product}>
              <Image title={title} images={images} />
              <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.cat}>{cat}</div>
                <div className={styles.info}>
                  <div className={styles.prices}>
                    <div className={styles.price}>{price}$</div>
                    <div className={styles.oldPrice}>
                      {Math.floor(price * 1.2)}$
                    </div>
                  </div>
                  <div className={styles.purchases}>
                    {Math.floor(Math.random() * 20 + 1)} purchased
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className={styles.noProducts}>No products</p>
      )}
    </section>
  );
};

export default Products;
