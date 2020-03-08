import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {darken} from 'polished';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors, {product} from '../../styles/colors';

export const ProductItem = styled.View`
  background: #fff;
  height: 358px;
  width: 220px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  flex: 0;
`;

export const Title = styled.Text`
  color: ${product.tile};
  font-size: 16px;
  margin: 10px auto;
  line-height: 21px;
`;

export const Price = styled.Text`
  color: ${product.tile};
  font-size: 21px;
  margin: 0px 0 10px;
  font-weight: bold;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export const ButtonAddCart = styled(RectButton)`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const Count = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  background: ${darken(0.2, colors.primary)};
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: ${product.textButton};
  text-align: center;
  flex: 1;
`;
export const TextCount = styled.Text`
  color: ${product.textButton};
  font-size: 14px;
`;

export const IconCart = styled(Icon)`
  color: ${product.icons};
  font-size: 20px;
  margin-right: 10px;
`;
