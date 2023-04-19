import styled from '@emotion/styled';

export const FormWrap = styled.div`
  background-color: ${props => props.theme.secondaryBgCl};
  border-radius: 20px;
  padding: 30px;
  @media (min-width: 320px) {
    width: 300px;
  }
  @media (min-width: 768px) {
    width: 320px;
  }
  > h2 {
    color: #8f9eb2;
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
  color: #8f9eb2;
  > input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #8f9eb2;
    padding: 8px 4px;
    background-color: transparent;
    outline: transparent;
    color: #8f9eb2;
    transition: border-color 300ms ease-in-out;
    &:focus,
    &:not(:placeholder-shown) {
      border-color: #fff;
    }
    &::placeholder {
      color: transparent;
      transition: color 300ms ease-in-out;
    }
    &:focus::placeholder {
      color: #8f9eb2;
    }
    &:focus + span,
    &:not(:placeholder-shown) + span {
      color: #fff;
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
    width: 300px;
    transform: translateX(-50%);
    font-size: 10px;
    color: tomato;
    text-align: center;
  }
`;

export const FormBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid #8f9eb2;
  background-color: transparent;
  color: #8f9eb2;
  font-weight: 500;
  font-size: 16px;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    border-color: #6487ef;
    background-color: #6487ef;
    color: #ddf2ff;
  }
`;