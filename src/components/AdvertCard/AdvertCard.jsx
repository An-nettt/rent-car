import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import svg from '../icon/icon.svg';
import MainModal from '../Modal/Modal';
import AdvertCardModal from '../AdvertCardModal/AdvertCardModal';
import {
  addToFavorite,
  removeFavorite,
} from '../../redux/favorite/favoriteSlice';
import { getFavorite } from '../../redux/favorite/favoriteSelectors';

import {
  Card,
  Thumb,
  ThumbImage,
  Image,
  FavoriteButton,
  FavoriteIcon,
  ThumbText,
  MainText,
  Highlight,
  TextList,
  Text,
  Button,
} from './AdvertCard.styled';

const AdvertCard = ({ carEl }) => {
  const dispatch = useDispatch();

  const favorite = useSelector(getFavorite);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFavorite = favorite.find((el) => el.id === carEl.id);

  const address = carEl.address.split(',');
  const city = address[1];
  const country = address[2];

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const favoriteButtonToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(carEl.id));
      return;
    }
    dispatch(addToFavorite(carEl));
  };

  return (
    <>
      <Card>
        <Thumb>
          <ThumbImage>
            <Image src={carEl.img} alt={`${carEl.make} ${carEl.model}`} />
          </ThumbImage>
          <Image src={carEl.img} alt={`${carEl.make} ${carEl.model}`} />
          <FavoriteButton type="button" onClick={favoriteButtonToggle}>
            <FavoriteIcon
              style={{
                fill: isFavorite ? '#3470ff' : 'transparent',
                stroke: isFavorite ? '#3470ff' : 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <use href={svg + '#icon-Vector'}></use>
            </FavoriteIcon>
          </FavoriteButton>
        </Thumb>
        <ThumbText>
          <MainText>
            {carEl.make} <Highlight>{carEl.model}</Highlight>, {carEl.year}
          </MainText>
          <MainText>{carEl.rentalPrice}</MainText>
        </ThumbText>
        <TextList>
          <Text>{city} </Text>
          <Text>{country}</Text>
          <Text>{carEl.rentalCompany}</Text>
          <Text>{carEl.type}</Text>
          <Text>{carEl.id}</Text>
          <Text>{carEl.accessories[1]}</Text>
        </TextList>
        <Button type="button" onClick={openModal}>
          Learn more
        </Button>
      </Card>
      {isModalOpen && (
        <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
          <AdvertCardModal closeModal={closeModal} carEl={carEl} />
        </MainModal>
      )}
    </>
  );
};

export default AdvertCard;
