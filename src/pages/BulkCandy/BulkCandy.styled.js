import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
`;

export const WrapBulkCandy = styled.div`
  display: flex;
`;

export const LeftBar = styled.ul`
  margin-right: 20px;
  border-right: 2px solid white;
`;

export const StyledBarItem = styled.li`
  width: 180px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 5px;

  &:hover,
  &:focus {
    font-weight: 500;
    background-color: #80808057;
  }

  &.active {
    font-weight: 500;
  }
`;
