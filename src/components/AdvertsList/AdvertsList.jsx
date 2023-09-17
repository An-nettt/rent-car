import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAdverts } from '../../redux/adverts/advertsThunk';
import { getAdverts } from '../../redux/adverts/advertsSelectors';
import { Gallery, LoadMoreButton } from './AdvertsList.styled';
import AdvertCard from '../AdvertCard/AdvertCard';

const AdvertsList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [page, dispatch]);

  const handleMoreAdvertsClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Gallery>
        {adverts.items.map((car) => (
          <AdvertCard carEl={car} />
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
