import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import products from '../src/products.json';
import categories from '../src/categories.json';

import Shop from '../src/components/Shop';

const Task03 = () => {
  const routes = categories.map((category) => {
    const prodCat = products.filter((product) => product.category === category.name);

    return (
      <Route key={category.url} exact path={`/task03${category.url}`}>
        <Shop products={prodCat} />
      </Route>
    );
  });

  const nav = (
    <nav>
      <ul>
        {categories.map((item) => (
          <li key={item.url}>
            <Link to={`/task03${item.url}`}>{item.name}</Link>
          </li>
        ))}
        <li>
          <Link to={`/task03`}>Show All</Link>
        </li>
      </ul>
    </nav>
  );

  console.log(routes);

  return (
    <section>
      <h1>Task03</h1>
      {nav}
      <Switch>
        {routes}
        <Route>
          <Shop products={products} />
        </Route>
      </Switch>
    </section>
  );
};

export default Task03;
