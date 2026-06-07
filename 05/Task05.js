import React, { useState } from 'react';

import { Route, Switch, Redirect, useParams } from 'react-router-dom';

import Shop from '../src/components/Shop';

import products from '../src/products.json';

const withFilters = (Component) => {
  return () => {
    const { filters } = useParams();

    const [priceRange, phrase = ''] = filters.split('-');
    const [minPrice, maxPrice] = priceRange.split(',');

    if (minPrice === '' && maxPrice === '' && phrase === '') {
      return <Component products={products} />;
    }

    const filteredProducts = products.filter((product) => {
      const min = minPrice === '' ? -Infinity : Number(minPrice);
      const max = maxPrice === '' ? Infinity : Number(maxPrice);

      const matchesPhrase =
        phrase === '' ||
        product.name.toLowerCase().includes(phrase.toLowerCase()) ||
        product.description.toLowerCase().includes(phrase.toLowerCase());

      return matchesPhrase && product.price >= min && product.price <= max;
    });

    return <Component products={filteredProducts} />;
  };
};

const FilteredShop = withFilters(Shop);

const Task05 = () => {
  const [filters, setFilters] = useState({
    phrase: '',
    minPrice: '',
    maxPrice: '',
  });

  const [redirect, setRedirect] = useState(null);

  React.useEffect(() => {
    setRedirect(`${filters.minPrice},${filters.maxPrice}-${filters.phrase}`);
  }, [filters.phrase, filters.minPrice, filters.maxPrice]);

  const handleChange = (ev) => {
    setFilters((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  return (
    <section>
      <h1>Task05</h1>
      <form>
        <input
          type="text"
          name="phrase"
          placeholder="Szukaj..."
          value={filters.phrase}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Cena od"
          value={filters.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Cena do"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </form>
      {redirect && <Redirect to={`/task05/${redirect}`} />}
      <Switch>
        <Route path="/task05/:filters">
          <FilteredShop />
        </Route>
        <Route exact path="/task05">
          <Shop products={products} />
        </Route>
      </Switch>
    </section>
  );
};

export default Task05;
