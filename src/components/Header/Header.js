import { Outlet } from 'react-router-dom';
import Logo from '../../images/logo.png';
import {
  Container,
  StyledHeader,
  TopBar,
  Menu,
  MenuItem,
  StyledLink,
} from './Header.styled';

const links = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/bulk-candy',
    name: 'bulk candy',
  },
  {
    to: '/types-candy',
    name: 'types candy',
  },
  {
    to: '/candy-flavors',
    name: 'candy flavors',
  },
  {
    to: '/candy-themes',
    name: 'candy themes',
  },
  {
    to: '/candy-occasions',
    name: 'candy occasions',
  },
  {
    to: '/candy-holidays',
    name: 'candy holidays',
  },
  {
    to: '/international-candy',
    name: 'international candy',
  },
  {
    to: '/candy-brands',
    name: 'candy brands',
  },
  {
    to: '/candy-toys',
    name: 'candy toys',
  },
  {
    to: '/discount-candy-sale',
    name: 'discount candy sale',
  },
];

export const Header = () => {
  return (
    <>
      <Container>
        <StyledHeader>
          <TopBar>
            <img src={Logo} alt="Logo"></img>
            <form>
              <input />
              <button type="button">search</button>
            </form>
          </TopBar>

          <nav>
            <Menu>
              {links.map(({ to, name }) => (
                <MenuItem key={name}>
                  <StyledLink to={to}>{name}</StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </nav>
        </StyledHeader>
      </Container>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};
