import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import './config/Reactotron';
import store from './store';

// import { Container } from './styles';

import Routes from './routes';

export default class rocketshoesnative extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
