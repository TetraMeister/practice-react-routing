import React from 'react';

import { Link } from 'react-router-dom';

import Product from './Product';

const Shop = ({ products }) => {
  return (
    <section>
      {products.map((p) => (
        <article key={p.id}>
          <Product {...p} />
          <Link to={`/task02/product-${p.id}`}>Link</Link>
        </article>
      ))}
    </section>
  );
};

export default Shop;
