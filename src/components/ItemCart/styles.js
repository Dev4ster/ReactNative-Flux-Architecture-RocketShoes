import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductDetails = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const Actions = styled.View`
  background: #eeeeee;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 100%;
  padding: 10px;
  border-radius: 4px;
`;
export const UpdateAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const RemoveOne = styled(Icon)`
  color: #7159c1;
`;
export const Counter = styled.TextInput`
  height: 26px;
  width: 51px;
  background: #fff;
  margin: 0 2px;
  font-size: 14px;
  padding: 5px;
`;
export const AddOne = styled(Icon)`
  color: #7159c1;
`;
export const SubTotal = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;
