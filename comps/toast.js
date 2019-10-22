import React,{useState} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../styles/toastStyles';

function Toast() {
    const [mytoast, setMytoast] = useState("Toast");
    var toast = null
    if (mytoast == true){
        toast =
        <View>
            <TouchableOpacity
            onPress={()=>{this.setState({text:"You've moved the Toast down"})

            }}
            >
                <Text style={styles.toasty}
                value={mytoast}>
                </Text>
            </TouchableOpacity>
        </View>
    }
    return (
    <View>
        <TouchableOpacity> 
            <Text style={styles.toasty}
            value={mytoast}>
                 </Text>
                 </TouchableOpacity>
    </View>
    )
}

export default Toast;