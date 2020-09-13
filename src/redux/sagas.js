import { all } from 'redux-saga/effects';
import customerSagas from './customer/saga';


export default function* rootSaga() {
  yield all([customerSagas()]);
}
