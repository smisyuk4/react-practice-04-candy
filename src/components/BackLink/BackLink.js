import { HiArrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const BackLink = ({ to }) => {
  return (
    <div>
      <HiArrowLeft />
      <NavLink to={to}>Back to products</NavLink>
    </div>
  );
};
