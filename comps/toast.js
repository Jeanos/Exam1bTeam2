import React,{useState} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../styles/toastStyles';

function Toast() {
    const [showToast, setShowToast] = useState("Toast");
    // var txt = "Toast"
    if (showToast == "Toast"){
        <View>
            <TouchableOpacity>
                <Text
                // onPress={txt = "You've moved the Toast up"}
                onPress={()=>{
                    setShowToast("You've moved the Toast Up")
                }}
                >
                </Text>
            </TouchableOpacity>
        </View>
    }
    return (
    <View styles={styles.toastView}>
        <TouchableOpacity> 
            <Text style={styles.toasty}>
                {showToast}
                 </Text>
                 </TouchableOpacity>

    </View>
    )
}

export default Toast;