import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as RootNavigation from '../../RootNavigation';

import {Wrapper, Container, Logo, ItemCount, Victor} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate('Home');
          }}>
          <Logo />
          <Victor>Versão do Victor</Victor>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => RootNavigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{1 || 0}</ItemCount>
        </TouchableOpacity>
      </Container>
    </Wrapper>
  );
}
