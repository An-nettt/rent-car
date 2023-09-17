import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../components/Filter/Filter';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { getAdverts } from '../redux/adverts/advertsSelectors';
import { fetchAdverts } from '../redux/adverts/advertsThunk';

const Adverts = () => {
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
    <div>
      <Filter />
      {adverts && <AdvertsList array={adverts.items} />}
      <LoadMoreButton onClick={handleMoreAdvertsClick} page={page} />
    </div>
  );
};

export default Adverts;
