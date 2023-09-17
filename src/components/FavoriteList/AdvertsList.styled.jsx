import styled from 'styled-components';

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  margin-top: 50px;
  margin-bottom: 30px;
  justify-content: center;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;

  color: #3470ff;
  background-color: transparent;
  text-decoration: underline;
  border: none;

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  cursor: pointer;

  &:hover {
    color: #0b44cd;
  }
`;

export { Gallery, LoadMoreButton };
