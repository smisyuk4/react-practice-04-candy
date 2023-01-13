import { Routes, Route, NavLink } from "react-router-dom"
import { Home, BulkCandy, TypesCandy } from "pages";

export const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/bulk-candy">Bulk Candy</NavLink></li>
          <li><NavLink to="/types-candy">Types Candy</NavLink></li>
        </ul>         
      </nav>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="bulk-candy" element={<BulkCandy/>}/>
        <Route path="types-candy" element={<TypesCandy/>}/>
      </Routes>
    </>
  );
};
