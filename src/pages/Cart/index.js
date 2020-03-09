import React, {Component} from 'react';

import {ActivityIndicator} from 'react-native';
import ItemCart from '../../components/ItemCart';

import {
  Container,
  CartView,
  CartTotal,
  Total,
  TotalCurrency,
  Finish,
  TextFinish,
  CartList,
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
      loaded: false,
    });
  }

  render() {
    const {products, loaded} = this.state;
    return (
      <Container>
        <CartView>
          {loaded || <ActivityIndicator />}
          <CartList
            data={products}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            loaded
            onEndReached={() => {
              this.setState({loaded: true});
            }}
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
