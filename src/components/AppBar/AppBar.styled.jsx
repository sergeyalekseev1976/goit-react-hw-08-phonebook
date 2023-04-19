import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #95f195;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  font-weight: 500;
  @media (min-width: 320px) {
    font-size: 24px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;