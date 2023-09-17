import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  justify-content: center;
`;

const Thumb = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  color: #8a8a89;
`;

const SelectBrand = styled.select`
  width: 224px;
  height: 48px;
  padding-left: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
`;

const SelectPrice = styled.select`
  width: 125px;
  height: 48px;
  padding-left: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
`;

const SelectText = styled.option`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
`;

const InputThumb = styled.div`
  display: flex;
`;

const InputFrom = styled.input`
  width: 125px;
  height: 48px;
  padding-left: 24px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;

  background-color: #f7f7fb;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
`;

const InputTo = styled.input`
  width: 125px;
  height: 48px;
  padding-left: 24px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: #f7f7fb;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
`;

const Button = styled.button`
  width: 136px;
  height: 48px;
  display: inline-block;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  background-color: #3470ff;

  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  align-items: center;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: #0b44cd;
  }
`;

export {
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
};
