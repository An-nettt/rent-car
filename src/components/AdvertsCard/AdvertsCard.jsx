const AdvertsCard = ({ carEl }) => {
  console.log(carEl);
  return (
    <li>
      <p>{carEl.model}</p>
    </li>
  );
};

export default AdvertsCard;
