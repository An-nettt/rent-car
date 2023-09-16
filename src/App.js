import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/HomePage';
import CatalogAvto from './pages/CatalogAvto';
// import FavoriteAvto from './pages/FavoritesAvto';
import { Container } from './components/App.styled';

function App() {
  return (
    <Container>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorite">Favorite</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogAvto />} />
      </Routes>
    </Container>
  );
}

export default App;

//  {
//    /* <Route path="/catalog/:car" element={<Car />} /> */
//  }
//  {
//    /* <Route path="/favorites" element={<FavoriteAvto />} /> */
//  }
//  {
//    /* <Route path="*" element={<NotFoundPage />} /> */
//  }
