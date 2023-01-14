import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;

  background-color: pink;
`;

export const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: 2px solid white;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const MenuItem = styled.li`
  border: 1px solid;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px 5px;

  &:hover,
  &:focus {
    font-weight: 500;
    background-color: #80808057;
  }

  &.active {
    font-weight: 500;
    color: white;
    background-color: grey;
  }
`;
