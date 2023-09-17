import { useState, useEffect } from 'react';
import AdvertsList from '../components/AdvertsList/AdvertsList';

const Favorite = () => {
  const [favoriteArray, setFavoriteArray] = useState([]);
  const [firstRender, setFirstRender] = useState(true);

  const array = localStorage.getItem('persist:favorite');
  const parsedFavorite = JSON.parse(array);
  const myFavorite = JSON.parse(parsedFavorite.array);
  console.log(myFavorite);

  // useEffect(() => {
  //   if (firstRender) {
  //     setFirstRender(false);
  //     return;
  //   }
  //   // console.log(myFavorite);
  //   if (myFavorite && myFavorite.length > 0) {
  //     console.log(myFavorite);
  //     setFavoriteArray([...myFavorite]);
  //     return;
  //   }
  // }, [myFavorite, firstRender]);

  return <div>{myFavorite ? <AdvertsList array={myFavorite} /> : []}</div>;
};

export default Favorite;
