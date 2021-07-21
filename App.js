/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import Products from './src/components/Products';
import store from './src/components/redux/store';
import {Provider} from 'react-redux';
import {Root} from 'native-base';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Root>
          <Products />
        </Root>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
