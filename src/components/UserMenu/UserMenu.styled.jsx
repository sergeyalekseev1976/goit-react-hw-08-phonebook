import styled from '@emotion/styled';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Email = styled.p`
  color: #000000;
  @media (min-width: 200px) {
    font-size: 10px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LogoutBtn = styled.button`
  color: #000000;
  padding: 4px 0;
  width: 100px;
  border-radius: 20px;
  border: 1px solid #000000;
  background-color: transparent;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    border-color: #000000;
    background-color: #000000;
    color: #ffffff;
  }
`;