import React from 'react';
import { Route, Link } from 'react-router-dom';

import Product from '../src/components/Product';

import products from '../src/products.json';

const Task02 = () => {
  const nav = (
    <nav>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link to={`/task02/product-${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <section>
      <h1>Task02</h1>
      {nav}
      <Route exact path="/task02/product-:id">
        <Product />
      </Route>
    </section>
  );
};

export default Task02;
