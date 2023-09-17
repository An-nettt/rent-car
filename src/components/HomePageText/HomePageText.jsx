import {
  Container,
  Slogan,
  Appeal,
  List,
  TitleItem,
  Item,
} from './HomePageText.styled';

const HomePageText = () => {
  return (
    <Container>
      <Slogan>Our slogan: "Your way to freedom on wheels"</Slogan>
      <Appeal>
        Welcome to our website for car rental in Ukraine! We are your partner in
        traveling and unforgettable trips on wheels. Whether you are traveling
        for business, leisure or visiting family and friends, we are ready to
        provide you with a reliable, comfortable and modern car that meets your
        needs.
      </Appeal>
      <Slogan>Advantages of our website for car rental in Ukraine: </Slogan>
      <List>
        <Item>
          <TitleItem>Wide Selection of Cars: </TitleItem>
          On our website you will find various models of cars, from the economy
          class to the premium segment. We care about diversity so that everyone
          can find a car that fits their budget and needs.
        </Item>
        <Item>
          <TitleItem>Convenient Online Booking: </TitleItem>
          Our site offers a simple and fast car booking process. You can choose
          the date, time and location of the rental, as well as additional
          services of your choice.
        </Item>
        <Item>
          <TitleItem>Promotions and Discounts </TitleItem>
          We regularly launch promotions and special offers to make your trip
          even more affordable. Check our site for the best rental rates.
        </Item>
        <Item>
          <TitleItem>Quality and Reliability: </TitleItem>
          We work only with reliable partners and car rentals to guarantee the
          quality and safety of our customers. All our cars undergo regular
          technical inspection.
        </Item>
        <Item>
          <TitleItem>Customer Support: </TitleItem>
          Our team is always ready to help you. We will gladly answer your
          questions, provide advice and help solve any issues related to car
          rental.
        </Item>
        <Item>
          <TitleItem>Ease of Use: </TitleItem> Our site is designed with user
          convenience in mind. It's intuitive so you can easily find and order
          your perfect car.
        </Item>
      </List>
      <Appeal>
        Choose our car rental site and we will do our best to make your trip
        safe, comfortable and unforgettable. Entrust your trip to us and enjoy
        the beauty of Ukraine on wheels!"
      </Appeal>
    </Container>
  );
};

export default HomePageText;
