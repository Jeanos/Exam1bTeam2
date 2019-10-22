import React,{useState} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../styles/toastStyles';

function Toast() {
    var txt = (
    <Text>Toast</Text>
    )
    if (txt="Toast"){
        <View>
            <TouchableOpacity>
                <Text
                onPress={txt = "You've moved the Toast up"}>
                </Text>
            </TouchableOpacity>
        </View>
    }
    return (
    <View styles={styles.toastView}>
        <TouchableOpacity> 
            <Text style={styles.toasty}>
            {txt}
                 </Text>
                 </TouchableOpacity>

    </View>
    )
}

export default Toast;