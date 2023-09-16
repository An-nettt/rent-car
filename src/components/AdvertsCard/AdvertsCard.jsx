import {
  AdvertCard,
  Image,
  Thumb,
  MainText,
  Highlight,
  TextList,
  Text,
  Button,
} from './AdvertsCard.styled';

const AdvertsCard = ({ carEl }) => {
  console.log(carEl);

  const address = carEl.address.split(',');
  const city = address[1];
  const country = address[2];

  return (
    <AdvertCard>
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
    </AdvertCard>
  );
};

export default AdvertsCard;
