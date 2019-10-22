/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text} from 'react-native';
import mainStyle from './styles/mainStyle';
import Main from './comps/main'



function App() {
  return (
    <View style={mainStyle.comp}>
      <Main />
    </View>
  );
}


export default App;
