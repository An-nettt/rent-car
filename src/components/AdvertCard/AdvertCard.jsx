import { useState } from 'react';
import MainModal from '../Modal/Modal';

import svg from '../icon/icon.svg';
import AdvertCardModal from '../AdvertCardModal/AdvertCardModal';

import {
  Card,
  Thumb,
  Image,
  Favorite,
  ThumbText,
  MainText,
  Highlight,
  TextList,
  Text,
  Button,
} from './AdvertCard.styled';

const AdvertCard = ({ carEl }) => {
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

  return (
    <>
      <Card>
        <Thumb>
          <Image src={carEl.img} alt={`${carEl.make} ${carEl.model}`} />
          <Favorite>
            <use href={svg + '#icon-Vector'}></use>
          </Favorite>
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
