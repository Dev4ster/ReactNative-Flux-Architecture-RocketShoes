import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import {cart} from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
`;

export const CartView = styled.View`
  background: ${cart.background};
  flex: 1;
  border-radius: 4px;
  padding: 12px;
`;

export const CartTotal = styled.View`
  margin: 40px auto 10px;
  align-items: center;
`;
export const Total = styled.Text`
  color: ${cart.totalLabel};
  font-size: 16px;
  font-weight: bold;
`;
export const TotalCurrency = styled.Text`
  font-size: 30px;
  color: ${cart.totalCurrency};
  font-weight: bold;
`;
export const Finish = styled(RectButton)`
  background: ${cart.button.background};
  border-radius: 4px;
  padding: 20px;

  justify-content: center;
  align-items: center;
`;
export const TextFinish = styled.Text`
  color: ${cart.button.color};
  font-size: 14px;
`;

export const CartList = styled(FlatList)``;
