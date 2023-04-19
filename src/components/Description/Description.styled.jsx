import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Text = styled.p`
 text-align: center;
  padding: 20px;
  max-width: 350px;
  background-color: #0afc0a;
  color: #000000;
  font-size: 20px;
  border-radius: 20px;
`;

export const Link = styled(NavLink)`
  color: #0551f5;
`;