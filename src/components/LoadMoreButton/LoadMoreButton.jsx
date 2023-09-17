import { LoadMoreBtn } from './LoadMoreButton.styled';

const LoadMoreButton = ({ onClick, page }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick} page={page}>
      Load more
    </LoadMoreBtn>
  );
};

export default LoadMoreButton;
