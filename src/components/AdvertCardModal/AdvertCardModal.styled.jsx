import styled from 'styled-components';

const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: #ffffff;
  border-radius: 8px;
  width: 100vw;
  max-width: 541px;
  height: 100wh;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 248px;

  border-radius: 14px;
  object-fit: cover;
`;

const MainText = styled.p`
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: #121417;

  margin-top: 14px;
  margin-bottom: 8px;
`;

const Highlight = styled.span`
  color: #3470ff;
`;

const TextList = styled.ul`
  &:last-child {
    background-color: black;
    margin-bottom: 4px;
  }
`;

const Text = styled.li`
  display: inline-block;

  padding-right: 6px;
  margin-right: 6px;

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  border-right: 1px solid #d0d0d0;

  &:last-child {
    border-right: none;
  }
`;

const DescriptionText = styled.p`
  display: inline-block;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;

  margin-top: 14px;
`;

const PropertiesText = styled.p`
  display: inline-block;

  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;

  margin-top: 24px;
  margin-bottom: 8px;
`;

const Thumb = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 24px;
`;

const ThumbText = styled.li`
  width: auto;
  height: 32px;
  background-color: #f9f9f9;
  border-radius: 35px;

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  padding: 7px 14px;
`;

const ThumbHighlight = styled.span`
  color: #3470ff;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

const ButtonRental = styled.a`
  width: 168px;
  height: 44px;
  padding-top: 12px;
  display: inline-block;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  color: #ffffff;
  background-color: #3470ff;

  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;

  cursor: pointer;
`;

export {
  Modal,
  Image,
  MainText,
  Highlight,
  TextList,
  Text,
  DescriptionText,
  PropertiesText,
  Thumb,
  ThumbText,
  ThumbHighlight,
  ButtonRental,
};
