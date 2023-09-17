import { Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage/HomePage';
import CatalogAvto from './pages/CatalogAvto';
import FavoriteAvto from './pages/FavoritesAvto';
import { Container, Header, Navigate, Link } from './components/App.styled';

function App() {
  return (
    <Container>
      <Header>
        <Navigate>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorite">Favorite</Link>
        </Navigate>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogAvto />} />
        <Route path="/favorite" element={<FavoriteAvto />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
