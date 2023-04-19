import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
`;

export const AddBtn = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #000000;
  background-color: #0afc0a;
  color: #000000;
  font-weight: 500;
  font-size: 16px;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    border-color: #000000;
    background-color: #000000;
    color: #ffffff;
  }
`;

export const Info = styled.p`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #000000;
  background-color: #0afc0a;
  color: #000000;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid #000000;
`;