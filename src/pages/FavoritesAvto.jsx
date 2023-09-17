import AdvertsList from '../components/AdvertsList/AdvertsList';

const Favorite = () => {
  const array = localStorage.getItem('persist:favorite');
  const parsedFavorite = JSON.parse(array);
  const myFavorite = JSON.parse(parsedFavorite.array);

  return <div>{myFavorite ? <AdvertsList array={myFavorite} /> : []}</div>;
};

export default Favorite;
