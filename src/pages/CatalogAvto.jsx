import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  // console.log(adverts.items);
  // console.log(adverts.length);

  // const isLoadMoreShown = adverts.length / 7 > 0;
  // console.log(isLoadMoreShown);

  return (
    <div>
      {adverts && <AdvertsList array={adverts.items} />}
      <LoadMoreButton onClick={handleMoreAdvertsClick} page={page} />
    </div>
  );
};

export default Adverts;
