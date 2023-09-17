import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Gallery, LoadMoreButton } from './AdvertsList.styled';
import AdvertCard from '../AdvertCard/AdvertCard';

const AdvertsList = ({ array }) => {
  return (
    <>
      <Gallery>
        {array
          ? array.map((car) => <AdvertCard carEl={car} key={car.id} />)
          : null}
      </Gallery>
    </>
  );
};

export default AdvertsList;

/* {isLoading && <Loader />} */
//   якщо більше 7
