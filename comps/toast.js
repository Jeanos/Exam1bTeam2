import React,{useState} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../styles/toastStyles';

function Toast() {
    var ToastText = 'Toast'
    const [showToast, setShowToast] = useState(ToastText);
    const [btnToast, setToastText] = useState(false);


    var TouchableView = (<TouchableOpacity onPress={()=>{setToastText(!btnToast)}}> 
        <Text style={styles.toasty}>
            {ToastText}
        </Text>
    </TouchableOpacity>)


    if (btnToast === true){
        TouchableView = (<TouchableOpacity onPress={()=>{setToastText(!btnToast)}}> 
            <Text style={styles.toasty}>
                You move the toast Down
            </Text>
        </TouchableOpacity>)
    }

    // var txt = "Toast"
   
    return (
    <View styles={styles.toastView}>
        {TouchableView}

    </View>
    )
}

export default Toast;