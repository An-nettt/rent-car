import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 1000px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  opacity: 1;
  color: rgba(18, 20, 23, 0.8);
`;

const Slogan = styled.h2`
  margin-bottom: 15px;
  color: #003366;
  font-weight: 600;
  text-align: center;
`;

const Appeal = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const List = styled.ol`
  margin-top: 0;
`;

const TitleItem = styled.span`
  color: #003366;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.02em;
`;

const Item = styled.li`
  margin-bottom: 15px;
  font-size: 18px;
`;

export { Container, Slogan, Appeal, List, TitleItem, Item };
