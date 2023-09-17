import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 20px;
  width: 100%;
  height: 60px;
  padding: 20px;
  background-color: #003366;
`;

const Navigate = styled.nav`
  display: flex;
  justify-content: center;
  text-align: center;

  width: 100%;

  gap: 20px;
`;

const Link = styled(NavLink)`
  color: #3470ff;

  font-family: 'Manrope';
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
  }
`;

export { Container, Header, Navigate, Link };
