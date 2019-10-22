import React from 'react';
import {View, Text} from 'react-native';
import Toast from './toast';
import Left from './Left';
import Right from './right';

function Main(){
    return(
        <View>
          <Toast />
          <Left/>
          <Right />
        </View>
    );
}

export default Main;
