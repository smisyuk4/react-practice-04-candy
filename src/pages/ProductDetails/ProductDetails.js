import { useParams, useLocation } from 'react-router-dom';
import { getProductById } from 'FakeApi';
import { BackLink } from '../../components/BackLink';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/candy-flavors';

  return (
    <div>
      <BackLink to={backLinkHref} />
      <h3>Product Details </h3>
      <p>id: {product.id}</p>
      <p>name: {product.name}</p>
    </div>
  );
};
