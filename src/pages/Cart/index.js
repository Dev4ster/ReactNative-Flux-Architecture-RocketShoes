import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
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

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: priceFormated(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    priceFormated(
      state.cart.reduce(
        (totalAll, product) => totalAll + product.price * product.amount,
        0
      )
    )
  );

  function handleDelete(id) {
    dispatch(cartActions.removeFromCart(id));
  }

  function handleIncrement(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function handleDecrement(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount - 1));
  }

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
              onDelete={() => handleDelete(item.id)}
              onIncrement={() => handleIncrement(item)}
              onDecrement={() => handleDecrement(item)}
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
