import { NavLink, Outlet } from 'react-router-dom';

import { Title } from './BulkCandy.styled';

export const BulkCandy = () => {
  return (
    <main>
      <Title>bulk candy page</Title>

      <ul>
        <li>
          <NavLink to="bulk-wraped-candy">bulk wraped candy</NavLink>
        </li>
        <li>
          <NavLink to="bulk-unwrapped-candy">bulk unwrapped candy</NavLink>
        </li>
        <li>
          <NavLink to="bulk-candy-favors">bulk candy favors</NavLink>
        </li>
        <li>
          <NavLink to="candy-buffet">candy buffet</NavLink>
        </li>
      </ul>

      <p>
        Candy Warehouse is the ultimate one-stop online bulk candy store where
        you can buy candy in bulk for all of your sweet treat needs! We have the
        freshest selections of candy and snacks in stock and ready for delivery
        right to your door, including individually wrapped and unwrapped treats,
        candy favors, and buffet table specialties. Find your favorite candies
        like M&M’s in one color, packaged in large quantities for a spectacular
        display on your themed party, baby shower, or gender reveal candy
        buffet. Without leaving the comfort of your home, you will discover the
        candy bulk quantities you need for holidays, fundraisers, school
        functions, parties, and grand black-tie events! When you need candy not
        by the piece but by the pound, there’s no need to waste precious time
        searching for hours in stores when you’ll find a full selection of
        treats from popular brands like Hershey’s and Mars, as well as boutique
        sweets from confectioners all over the world, all in one convenient
        place!
      </p>

      <Outlet />
    </main>
  );
};
