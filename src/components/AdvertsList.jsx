import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAdverts } from '../redux/adverts/advertsThunk';
import {
  getAdverts,
  getError,
  getIsLoading,
} from '../redux/adverts/advertsSelectors';
import AdvertsCard from './AdvertsCard/AdvertsCard';

const AdvertsList = () => {
  const dispatch = useDispatch();

  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  console.log(adverts.items);

  return (
    <div>
      <ul>
        {adverts.items.map((car) => (
          <AdvertsCard carEl={car} />
        ))}
      </ul>
    </div>
  );
};

export default AdvertsList;

/* {isLoading && <Loader />} */
