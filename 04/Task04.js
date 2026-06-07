import React, { useState } from 'react';

import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Shop from '../src/components/Shop';

import products from '../src/products.json';

const Task04 = () => {
  const [redirect, setRedirect] = useState(null);

  const methods = [
    { name: 'Cena malejąco', url: '/price-desc' },
    { name: 'Cena rosnąco', url: '/price-asc' },
    { name: 'Nazwa alfabetycznie malejąco', url: '/name-desc' },
    { name: 'Nazwa alfabetycznie rosnąco', url: '/name-asc' },
    { name: 'Id malejąco', url: '/id-desc' },
    { name: 'Id rosnąco', url: '/id-asc' },
  ];

  const handleChange = (ev) => {
    setRedirect(ev.target.value);
  };

  const select = (
    <select onChange={handleChange}>
      <option value="">Wybierz stronę</option>
      {methods.map((el) => {
        return (
          <option key={el.url} value={el.url}>
            {el.name}
          </option>
        );
      })}
    </select>
  );

  const routes = methods.map((method) => {
    const [field, order] = method.url.replace('/', '').split('-');

    const sortFn = {
      asc: (a, b) => {
        if (typeof a[field] === 'string') return a[field].localeCompare(b[field]);
        return a[field] - b[field];
      },
      desc: (a, b) => {
        if (typeof a[field] === 'string') return b[field].localeCompare(a[field]);
        return b[field] - a[field];
      },
    };

    const sortedProducts = [...products].sort(sortFn[order]);

    return (
      <Route key={method.url} exact path={`/task04${method.url}`}>
        <Shop products={sortedProducts} />
      </Route>
    );
  });

  return (
    <section>
      <h1>Task04</h1>
      {select}
      {redirect && <Redirect to={`/task04${redirect}`} />}
      <Switch>
        {routes}
        <Route>
          <Shop products={products} />
        </Route>
      </Switch>
    </section>
  );
};

export default Task04;
