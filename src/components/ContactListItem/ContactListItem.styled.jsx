import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 4px 16px;
  background-color: #0afc0a;
  border-radius: 20px;
`;

export const TextWrapper = styled.div`
  margin-right: auto;
`;

export const ContactName = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 18px;
  color: #000000;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: #000000;
`;

export const ContactBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #000000;
  border: none;
  border-radius: 50px;
  transition: color 300ms ease-in-out;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;

export const Avatar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #0afc0a;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  border: none;
`;