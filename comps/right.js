import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/rightStyles';


function Right(){
    const statetrue = true;
    const statefalse = false;

    

    return(
        <View style={styles.container}>
            <Text> Normal </Text>
            <Switch
            value = {statetrue}/>
            <Text> Wide </Text>
            <Switch 
            value = {statefalse}/>
            <Text> Wider </Text>
            <Switch
            value = {statefalse}/>
            <Text> Widest </Text>
            <Switch
            value = {statefalse}/>

        </View>
    )
}

export default Right; 