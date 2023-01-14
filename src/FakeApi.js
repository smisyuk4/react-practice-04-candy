export const products = [
  { id: 'b-1', name: 'Bacon Candy', cost: 500, color: 'red' },
  { id: 'b-2', name: 'Butter Candy', cost: 700, color: 'red' },
  { id: 'c-3', name: 'Caramel Candy', cost: 500, color: 'red' },
  { id: 'c-4', name: 'Chamoy Candy', cost: 800, color: 'red' },
  { id: 'c-5', name: 'Chili Candy', cost: 150, color: 'red' },
  { id: 'c-6', name: 'Chocolate Candy', cost: 200, color: 'red' },
  { id: 'c-7', name: 'Cinnamon Candy', cost: 200, color: 'red' },
  { id: 'c-8', name: 'Coffee & Tea Candy', cost: 200, color: 'green' },
  { id: 'c-9', name: 'Cotton Candy', cost: 500, color: 'green' },
  { id: 'f-10', name: 'Floral Candy', cost: 400, color: 'green' },
  { id: 'f-11', name: 'Fruity Candy', cost: 100, color: 'green' },
  { id: 'g-12', name: 'Ginger Candy', cost: 200, color: 'yellow' },
  { id: 'h-13', name: 'Honey Candy', cost: 150, color: 'yellow' },
  { id: 'i-14', name: 'Ice Cream Candy', cost: 150, color: 'white' },
  { id: 'l-15', name: 'Licorice Candy', cost: 150, color: 'yellow' },
  { id: 'm-16', name: 'Marshmallow Candy', cost: 150, color: 'pink' },
];

export const getProducts = () => {
  return products;
};

export const getProductById = productId => {
  return products.find(({ id }) => id === productId);
};
