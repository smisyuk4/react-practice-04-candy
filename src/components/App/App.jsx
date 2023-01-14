import { Routes, Route } from "react-router-dom"
import {
  Home,
  BulkCandy,
  BulkCandyMainPage,
  TypesCandy,
  CandyFlavors,
  ProductDetails,
  CandyShapes,
  CandyThemes,
  CandyOccasions,
  CandyHolidays,
  InternationalCandy,
  CandyBrands,
  CandyToys,
  DiscountCandySale,
  Error
} from "pages";

import { Header } from "components/Header";
import { BulkWrappedCandy, BulkUnwrappedCandy, BulkCandyFavors, CandyBuffet } from "components/BullCandy";


export const App = () => {
  return (
    <>     
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>}/>
          <Route path="bulk-candy" element={<BulkCandy />}>
            <Route index element={<BulkCandyMainPage/>}/>
            <Route path="bulk-wraped-candy" element={<BulkWrappedCandy />}/>
            <Route path="bulk-unwrapped-candy" element={<BulkUnwrappedCandy />}/>
            <Route path="bulk-candy-favors" element={<BulkCandyFavors />}/>
            <Route path="candy-buffet" element={<CandyBuffet />}/>
          </Route>
          <Route path="types-candy" element={<TypesCandy/>}/>
          <Route path="candy-flavors" element={<CandyFlavors />} />
          <Route path="candy-flavors/:id" element={<ProductDetails/>} />
          <Route path="candy-shapes" element={<CandyShapes/>}/>
          <Route path="candy-themes" element={<CandyThemes/>}/>
          <Route path="candy-occasions" element={<CandyOccasions/>}/>
          <Route path="candy-holidays" element={<CandyHolidays/>}/>
          <Route path="international-candy" element = {<InternationalCandy/>}/>
          <Route path="candy-brands" element = {<CandyBrands/>}/>
          <Route path="candy-toys" element = {<CandyToys/>}/>
          <Route path="discount-candy-sale" element={<DiscountCandySale/>}/>
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </>
  );
};
