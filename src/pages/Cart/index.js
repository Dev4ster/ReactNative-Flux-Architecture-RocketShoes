import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import priceFormated from '../../util/format';
import * as cartActions from '../../store/modules/cart/actions';
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

class Cart extends Component {
  handleDelete = id => {
    const {removeFromCart} = this.props;
    removeFromCart(id);
  };

  handleIncrement = (product, {updateAmountRequest} = this.props) => {
    updateAmountRequest(product.id, product.amount + 1);
  };

  handleDecrement = (product, {updateAmountRequest} = this.props) => {
    updateAmountRequest(product.id, product.amount - 1);
  };

  render() {
    const {cart, total} = this.props;
    return (
      <Container>
        <CartView>
          <CartList
            data={cart}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <ItemCart
                title={item.title}
                image={item.image}
                priceFormated={item.priceFormated}
                amount={item.amount}
                subtotal={item.subtotal}
                onDelete={() => this.handleDelete(item.id)}
                onIncrement={() => this.handleIncrement(item)}
                onDecrement={() => this.handleDecrement(item)}
              />
            )}
          />

          <CartTotal>
            <Total>Total</Total>
            <TotalCurrency>{total}</TotalCurrency>
          </CartTotal>
          <Finish>
            <TextFinish>FINALIZAR PEDIDO</TextFinish>
          </Finish>
        </CartView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: priceFormated(product.price * product.amount),
  })),
  total: priceFormated(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
