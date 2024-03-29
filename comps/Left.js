/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View,Text,TextInput,Button,ImageBackground} from 'react-native';
import leftStyle from '../styles/leftStyle'


function Left() {
  const [value, setNewValue] = useState('Your Image URL');
  const [showText, setShowText] = useState(false);
  var newText = null;
  var DisplayText = null
  var BtnSetImage = (
    <Button
        title="Set an Image"
        onPress = {() => {
          setShowText(!showText);
          }}
      />
  );
  
  
  if (showText === true){
    if (newText == ''){
      DisplayText = (
       <View>
             <Text>Do not leave it Blank</Text>
       </View>
     );
    }else{
      newText = (
        <View>
          <ImageBackground source={require('../images/Bg.jpg')} style={leftStyle.image} >
              <Text>Your Image URL is: {value}</Text>
          </ImageBackground>
          
        </View>
      )
      BtnSetImage = (
        <Button
            title="Reset Image"
            onPress = {() => {
              setShowText(!showText);
              }}
          />
      )
    }
   
  }
 
  return (
    <View style={leftStyle.app}>
        {BtnSetImage}
        {newText}
        {DisplayText}
        <TextInput
          style={{ width: '100%', borderColor: 'gray', borderWidth: 1, color:'Blackew'}}
          onChangeText={(text) => setNewValue(text)}
          value={value}
    />
    </View>
  );
}


export default Left;
