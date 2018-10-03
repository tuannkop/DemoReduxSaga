import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/Store';
import MyScreen from './src/screen';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: store,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <MyScreen />
      </Provider>
    );
  }
}
