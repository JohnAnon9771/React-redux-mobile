import { Alert } from 'react-native';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from '../cart/actions';

import * as NavigationService from '../../../services/navigation';

import { formatPrice } from '../../../utils/formatPrice';

import api from '../../../services/api';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;
  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque!');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
    NavigationService.push('cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  console.tron.log(amount);

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque!');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
