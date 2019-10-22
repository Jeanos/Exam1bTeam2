import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/rightStyles';


function Right(){
    
    const [ChangeMode, setChangeMode] = useState(true);

    var modeStyle = null;
    var textStyle = null;

    if(ChangeMode === true){
        modeStyle = null;
        textStyle = null;
    }

    

    return(
        <View style={styles.container}>
            <Text> Normal </Text>
            <Switch
            value ={ChangeMode}
            onValueChange={()=>{
                setChangeMode(!ChangeMode);
            }}/>

        </View>
    )
}

export default Right; 