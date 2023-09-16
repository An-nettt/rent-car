import styled from 'styled-components';

const AdvertCard = styled.li`
  width: 274px;
  margin-top: 20px;

  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 268px;

  border-radius: 14px;
  object-fit: cover;
`;

const Thumb = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

const MainText = styled.p`
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

const Highlight = styled.span`
  color: #3470ff;
`;

const TextList = styled.ul`
  margin-bottom: 28px;
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

const Button = styled.button`
  width: 100%;
  height: 44px;
  display: inline-block;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  background-color: #3470ff;

  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.06em;
  align-items: center;
  text-align: center;

  cursor: pointer;
`;

export {
  AdvertCard,
  Image,
  Thumb,
  MainText,
  Highlight,
  TextList,
  Text,
  Button,
};
