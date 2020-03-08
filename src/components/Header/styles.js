import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';
import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  background: ${colors.header};
  flex-direction: row;
  height: 64px;
  align-items: center;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  background: ${colors.primary};
  color: ${colors.text};
  border-radius: 9px;
  padding: 2px;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  text-align: center;
  overflow: hidden;
  font-size: 12px;
`;

export const Victor = styled.Text`
  color: #fff;
  position: absolute;
  bottom: -18px;
  font-size: 12px;
  right: 0;
`;
