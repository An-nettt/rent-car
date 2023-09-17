import styled from 'styled-components';
import img from '../../components/images/avto-v-gorakh.jpg';

const Container = styled.div`
  display: flex;
  height: 100%;
  max-width: 1400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  background-image: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0.3;
`;

export { Container, Image };
