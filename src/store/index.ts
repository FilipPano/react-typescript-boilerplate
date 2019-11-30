import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './effect';
import { rootReducer } from './reducer';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f;

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools),
);

sagaMiddleware.run(rootSaga);
