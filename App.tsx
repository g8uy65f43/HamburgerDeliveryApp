/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Buy from './src/MainBody/Buy/index';
import MainBody from './src/MainBody/index';
import store from './src/redux/store/store.js';
import Search from './src/Search/index';


function App(): JSX.Element {
  return (
    <Provider store={store}>
        <View >
          <View style={styles.Search}>
            <Search></Search>
          </View>
          <View style={styles.mainBox}>
            <MainBody></MainBody>
          </View>
          <View style={styles.Buy}>
            <Buy></Buy>
          </View>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({

  Search: {
    height: "5%",
    width: "100%",
    zIndex:10,
    backgroundColor:"white",
    position: "relative",
    top: 0
  }, mainBox: {
    position:"relative",
    width: "100%",
    height: "90%",
  }, Buy: {
    position: "relative",
    width: "100%",
    bottom: 0,
    height: "5%",
  }
});

export default App;
