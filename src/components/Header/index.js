import React from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as RootNavigation from '../../RootNavigation';

import {Wrapper, Container, Logo, ItemCount, Victor} from './styles';

function Header({cartSize}) {
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
          <ItemCount>{cartSize || 0}</ItemCount>
        </TouchableOpacity>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
