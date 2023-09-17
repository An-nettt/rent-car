import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import svg from '../icon/icon.svg';
import MainModal from '../Modal/Modal';
import AdvertCardModal from '../AdvertCardModal/AdvertCardModal';
import {
  getFavorite,
  getIsLoading,
  getError,
} from '../../redux/adverts/advertsSelectors';

import {
  Card,
  Thumb,
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
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const filterContact = useSelector(getFilter);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const address = carEl.address.split(',');
  const city = address[1];
  const country = address[2];

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function favoriteButtonClick() {
    console.log('click');
  }

  return (
    <>
      <Card>
        <Thumb>
          <Image src={carEl.img} alt={`${carEl.make} ${carEl.model}`} />
          <FavoriteButton type="button" onClick={favoriteButtonClick}>
            <FavoriteIcon>
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
