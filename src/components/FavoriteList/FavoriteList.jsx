import { useSelector } from 'react-redux';

// import { getFavorite } from '../../redux/favorite/favoriteSlice';
// import { useLocalStorage } from '../../redux/hooks/useLocalStorage';
import { Gallery } from './AdvertsList.styled';
import AdvertCard from '../AdvertCard/AdvertCard';

const FavoriteList = () => {
  const favoriteArray = localStorage.getItem('persist:favorite');
  const parsedFavorite = JSON.parse(favoriteArray);
  const myFavorite = JSON.parse(parsedFavorite.array);

  console.log(parsedFavorite);
  console.log(parsedFavorite.array);
  console.log(myFavorite);

  return (
    <Gallery>
      {myFavorite ? myFavorite.map((car) => <AdvertCard carEl={car} />) : null}
    </Gallery>
  );
};

export default FavoriteList;

/* {isLoading && <Loader />} */
