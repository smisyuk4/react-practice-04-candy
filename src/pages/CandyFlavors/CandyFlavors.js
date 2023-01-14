import { getProducts } from 'FakeApi';
import { useSearchParams } from 'react-router-dom';
import { Search } from '../../components/Search';
import { ProductList } from '../../components/ProductList';

export const CandyFlavors = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(({ name }) =>
    name.toLocaleLowerCase().includes(productName.toLocaleLowerCase())
  );

  const updateInputValue = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <h2>Candy Flavors page</h2>

      <Search value={productName} updateInputValue={updateInputValue} />

      <ProductList products={visibleProducts} />
    </main>
  );
};
