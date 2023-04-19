import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  position: relative;
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 300ms ease-in-out, after 300ms ease-in-out;
  &:hover,
  &:focus {
    color: #0551f5;
  }
  &.active {
    color: #0551f5;
  }
`;

export const Nav = styled.div`
  display: flex;
  gap: 20px;
`;