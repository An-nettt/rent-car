import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

import {
  Modal,
  Image,
  MainText,
  Highlight,
  TextList,
  Text,
  DescriptionText,
  PropertiesText,
  Thumb,
  ThumbText,
  ThumbHighlight,
  ButtonRental,
} from './AdvertCardModal.styled';

const AdvertCardModal = ({ carEl, closeModal }) => {
  const address = carEl.address.split(',');
  const city = address[1];
  const country = address[2];

  return (
    <Modal>
      <ModalClose />
      <Sheet>
        <Image src={carEl.img} alt={`${carEl.make} ${carEl.model}`} />

        <MainText>
          {carEl.make} <Highlight>{carEl.model}</Highlight>, {carEl.year}
        </MainText>

        <TextList>
          <Text>{city} </Text>
          <Text>{country}</Text>
          <Text>Id: {carEl.id}</Text>
          <Text>Year: {carEl.year}</Text>
          <Text>Type: {carEl.type}</Text>
        </TextList>
        <TextList>
          <Text>Fuel Consumption: {carEl.fuelConsumption}</Text>
          <Text>Engine Size: {carEl.engineSize}</Text>
        </TextList>
        <DescriptionText>{carEl.description}</DescriptionText>
        <PropertiesText>Accessories and functionalities:</PropertiesText>
        <div>
          {carEl.accessories.map((string, index) => (
            <Text key={index}>{string}</Text>
          ))}
          {carEl.functionalities.map((string, index) => (
            <Text key={index}>{string}</Text>
          ))}
        </div>
        <PropertiesText>Rental Conditions: </PropertiesText>
        <Thumb>
          {carEl.rentalConditions.split('\n').map((condition, index) => {
            const age = parseInt(+/\d+/.exec(condition));

            return (
              <ThumbText key={index}>
                {condition.replace(`${age}`, '')}
                {age ? <ThumbHighlight>{age}</ThumbHighlight> : ''}
              </ThumbText>
            );
          })}
          <ThumbText>
            Mileage:{' '}
            <ThumbHighlight>
              {new Intl.NumberFormat('en-US').format(carEl.mileage)}
            </ThumbHighlight>
          </ThumbText>
          <ThumbText>
            Price:{' '}
            <ThumbHighlight>
              {new Intl.NumberFormat('ru', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              }).format(carEl.rentalPrice.slice(-2))}
            </ThumbHighlight>
          </ThumbText>
        </Thumb>
        <ButtonRental href="tel:+380730000000">Rental car</ButtonRental>
      </Sheet>
    </Modal>
  );
};

export default AdvertCardModal;
