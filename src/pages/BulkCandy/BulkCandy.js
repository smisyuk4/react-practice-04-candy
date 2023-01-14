import { Outlet } from 'react-router-dom';

import {
  Title,
  WrapBulkCandy,
  LeftBar,
  StyledBarItem,
  StyledLink,
} from './BulkCandy.styled';

export const BulkCandy = () => {
  return (
    <main>
      <Title>bulk candy page</Title>

      <WrapBulkCandy>
        <LeftBar>
          <StyledBarItem>
            <StyledLink to="bulk-wraped-candy">bulk wraped candy</StyledLink>
          </StyledBarItem>
          <StyledBarItem>
            <StyledLink to="bulk-unwrapped-candy">
              bulk unwrapped candy
            </StyledLink>
          </StyledBarItem>
          <StyledBarItem>
            <StyledLink to="bulk-candy-favors">bulk candy favors</StyledLink>
          </StyledBarItem>
          <StyledBarItem>
            <StyledLink to="candy-buffet">candy buffet</StyledLink>
          </StyledBarItem>
        </LeftBar>

        <Outlet />
      </WrapBulkCandy>
    </main>
  );
};
