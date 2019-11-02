import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import weatherDetailsSaga from '../saga/WeatherDetailsSaga';
import newsDetailsSaga from '../saga/NewsDetailsSaga';

const sagaMiddleware = createSagaMiddleware();
export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(weatherDetailsSaga);
sagaMiddleware.run(newsDetailsSaga);
