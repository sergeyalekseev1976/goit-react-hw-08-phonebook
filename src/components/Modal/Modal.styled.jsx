import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  color: #000000;
  border: none;
  border-radius: 50px;
  transition: color 300ms ease-in-out;
  &:hover,
  &:focus {
    color: rgba(100, 135, 239, 0.8);
  }
`;