import React, {Component} from 'react';

import {FlatList} from 'react-native';
import ItemCart from '../../components/ItemCart';

import {
  Container,
  CartView,
  CartTotal,
  Total,
  TotalCurrency,
  Finish,
  TextFinish,
} from './styles';
import formatPrice from '../../util/format';
import api from '../../services/api';

export default class Cart extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const products = await api.get('/products/');
    const data = products.data.map(p => ({
      ...p,
      priceFormated: formatPrice(p.price),
    }));
    this.setState({
      products: [...data],
    });
  }

  render() {
    const {products} = this.state;
    return (
      <Container>
        <CartView>
          <FlatList
            data={products}
            contentContainerStyle={{flexGrow: 1}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <ItemCart
                title={item.title}
                image={item.image}
                priceFormated={item.priceFormated}
              />
            )}
          />

          <CartTotal>
            <Total>Total</Total>
            <TotalCurrency>R$ 1619,10</TotalCurrency>
          </CartTotal>
          <Finish>
            <TextFinish>FINALIZAR PEDIDO</TextFinish>
          </Finish>
        </CartView>
      </Container>
    );
  }
}
