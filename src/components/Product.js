import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import products from '../products.json';

const Product = (props) => {
  const { id: paramId } = useParams();
  const id = props.id ?? paramId;
  const [product = null] = products.filter((product) => product.id === parseInt(id));

  return product === null ? (
    <Redirect to={'/'} /> //docelowo 404.html not found
  ) : (
    <section>
      <h4>
        {product.name} - id:{id}
      </h4>
      <p>{product.description}</p>
      <p>
        Cena: <strong>{product.price} PLN</strong>
      </p>
      <p>
        Category - <strong>{product.category}</strong>
      </p>
    </section>
  );
};

export default Product;
