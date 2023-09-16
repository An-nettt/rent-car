import {
  Modal,
  CloseModal,
  Image,
  Thumb,
  MainText,
  Highlight,
  TextList,
  Text,
  Button,
} from './AdvertCardModal.styled';

const AdvertCardModal = ({ carEl }) => {
  console.log(carEl);

  const address = carEl.address.split(',');
  const city = address[1];
  const country = address[2];

  return (
    <Modal>
      <CloseModal
        type="button"
        onClick={closeModal}
        sx={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          zIndex: 1,
        }}
      />
      <Image src={carEl.img} alt={`${carEl.make} ${carEl.model}`} />
      <Thumb>
        <MainText>
          {carEl.make} <Highlight>{carEl.model}</Highlight>, {carEl.year}
        </MainText>
        <MainText>{carEl.rentalPrice}</MainText>
      </Thumb>
      <TextList>
        <Text>{city} </Text>
        <Text>{country}</Text>
        <Text>{carEl.rentalCompany}</Text>
        <Text>{carEl.type}</Text>
        <Text>{carEl.id}</Text>
        <Text>{carEl.accessories[1]}</Text>
      </TextList>
      <Button type="button">Learn more</Button>
    </Modal>
  );
};

export default AdvertCardModal;
