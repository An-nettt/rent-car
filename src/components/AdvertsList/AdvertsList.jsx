import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAdverts } from '../../redux/adverts/advertsThunk';
import {
  getAdverts,
  getError,
  getIsLoading,
} from '../../redux/adverts/advertsSelectors';
import { Gallery } from './AdvertsList.styled';
import AdvertsCard from '../AdvertsCard/AdvertsCard';

const AdvertsList = () => {
  const dispatch = useDispatch();

  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <Gallery>
      {adverts.items.map((car) => (
        <AdvertsCard carEl={car} />
      ))}
    </Gallery>
  );
};

export default AdvertsList;

/* {isLoading && <Loader />} */
