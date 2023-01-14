import { NavLink } from 'react-router-dom';

export const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(({ id, name }) => (
        <li key={id}>
          <NavLink to={id}>{name}</NavLink>
        </li>
      ))}
    </ul>
  );
};
