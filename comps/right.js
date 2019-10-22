import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/rightStyles';


function Right(){
    
    const [ChangeMode, setChangeMode] = useState(true);

    var modeStyle = styles.container;
    var textStyle = null;

    if(ChangeMode === false){
        modeStyle = styles.container2
        textStyle = null;
    }


    return(
        <View style={modeStyle}>
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