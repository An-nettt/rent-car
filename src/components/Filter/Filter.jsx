import {
  Form,
  Thumb,
  Label,
  SelectBrand,
  SelectPrice,
  SelectText,
  InputThumb,
  InputFrom,
  InputTo,
  Button,
} from './Filter.styled';

const Filter = () => {
  return (
    <Form>
      <Thumb>
        <Label>Car brand</Label>
        <SelectBrand>
          <SelectText value="brand">Enter the text</SelectText>
        </SelectBrand>
      </Thumb>

      <Thumb>
        <Label>Price/ 1 hour</Label>
        <SelectPrice>
          <SelectText value="price">To $</SelectText>
        </SelectPrice>
      </Thumb>

      <Thumb>
        <Label>Сar mileage / km</Label>
        <InputThumb>
          <InputFrom type="text" name="username" placeholder="From" />
          <InputTo type="text" name="username" placeholder="To" />
        </InputThumb>
      </Thumb>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Filter;
