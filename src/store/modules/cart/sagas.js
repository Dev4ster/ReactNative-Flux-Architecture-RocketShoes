import {call, put, all, select, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';
import formatPrice from '../../../util/format';
import {addToCartSuccess, updateAmountSuccess} from './actions';

function* addToCart({id}) {
  // verificar se o produto existe no estado global

  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  // pega a quantidade do estoque do produto
  const stock = yield call(api.get, `/stock/${id}`);

  // quantidade em estoque do produto
  const stockAmount = stock.data.amount;

  // quantidade atual do produto no carrinho
  const currentAmount = productExists ? productExists.amount : 0;

  // quantidade atualizada do carrinho ( cliente quer por mais um)
  const amount = currentAmount + 1;
  /* se a quantidade que o cliente estiver tentando colocar for maior que a quantidade
  disponivel em estoque = error */
  if (amount > stockAmount) {
    Alert.alert('Atenção', 'Produto sem estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({id, amount}) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Atenção', 'Produto sem estoque');
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
