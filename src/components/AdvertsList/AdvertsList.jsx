import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAdverts } from '../../redux/adverts/advertsThunk';
import {
  getAdverts,
  getError,
  getIsLoading,
} from '../../redux/adverts/advertsSelectors';
import { Gallery, LoadMoreButton } from './AdvertsList.styled';
import AdvertsCard from '../AdvertCard/AdvertsCard';

const AdvertsList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const adverts = useSelector(getAdverts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchAdverts(page));
    console.log(page);
  }, [page, dispatch]);

  const handleMoreAdvertsClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Gallery>
        {adverts.items.map((car) => (
          <AdvertsCard carEl={car} />
        ))}
      </Gallery>
      <LoadMoreButton
        type="button"
        onClick={handleMoreAdvertsClick}
        page={page}
      >
        Load more
      </LoadMoreButton>
    </>
  );
};

export default AdvertsList;

/* {isLoading && <Loader />} */
