import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import weatherDetailsSaga from '../saga/WeatherDetailsSaga';
import newsDetailsSaga from '../saga/NewsDetailsSaga';
import registerDetailsData from '../saga/RegisterUserDetailsSaga';
import userDetailsSaga from '../saga/UserDetailsSaga';
import publishNewsDetailsSaga from '../saga/PublishNewsDetailsSaga';
import NewsArticleSaga from '../saga/NewsArticleSaga';

const sagaMiddleware = createSagaMiddleware();
export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(weatherDetailsSaga);
sagaMiddleware.run(newsDetailsSaga);
sagaMiddleware.run(registerDetailsData);
sagaMiddleware.run(userDetailsSaga);
sagaMiddleware.run(publishNewsDetailsSaga);
sagaMiddleware.run(NewsArticleSaga);
