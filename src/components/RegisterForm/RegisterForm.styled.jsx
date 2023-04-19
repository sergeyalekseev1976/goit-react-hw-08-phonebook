import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FormWrap = styled.div`
  background-color: #0afc0a;
  border-radius: 20px;
  padding: 30px;
  @media (min-width: 320px) {
    width: 300px;
  }
  @media (min-width: 768px) {
    width: 320px;
  }
  > h2 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Label = styled.label`
  position: relative;
  > input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000;
    padding: 8px 4px;
    color: #000000;
    background-color: transparent;
    outline: transparent;
    transition: border-color 300ms ease-in-out;
    &:focus,
    &:not(:placeholder-shown) {
      border-color: #ffffff;
    }
    &::placeholder {
      color: transparent;
      transition: color 300ms ease-in-out;
    }
    &:focus::placeholder {
      color: #000000;
    }
    &:focus + span,
    &:not(:placeholder-shown) + span {
      color: #ffffff;
      transform: translateY(-20px);
    }
  }
  > span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 18px;
    transform-origin: top left;
    transition: transform 300ms ease-in-out, color 300ms ease-in-out;
  }
  > p {
    position: absolute;
    bottom: -15px;
    left: 50%;
    width: 250px;
    transform: translateX(-50%);
    font-size: 12px;
    color: tomato;
    text-align: center;
  }
`;

export const FormBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  margin: 0 auto;
  padding: 8px 16px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid #000000;
  background-color: transparent;
  color: #000000;
  font-weight: 500;
  font-size: 16px;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    border-color: #ffffff;
    background-color: #000000;
    color: #ffffff;
  }
`;

export const Link = styled(NavLink)`
  color: #0551f5;
`;

export const Desc = styled.span`
  color: #000000;
  text-align: center;
`;