import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin: 30px auto;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 400px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background-color: #0afc0a;
  border-radius: 20px;
  `;

export const Input = styled.input`
  display: block;
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
  padding: 8px 10px;
  width: 70%;
  color: #000000;
  background-color: transparent;
  border: 1px solid #000000;
  outline: none;
  border-radius: 20px;
  transition: border-color 300ms ease-in-out;
  &::placeholder {
    text-align: center;
    color: #000000;
  }
  &:hover,
  &:focus {
    border-color: #ffffff;
  }
`;
