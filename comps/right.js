import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/rightStyles';


function Right(){
    
    const [ChangeMode, setChangeMode] = useState(true);
    const [ChangeWide, setChangeWide] = useState(false);
    const [ChangeWider, setChangeWider] = useState(false);
    const [ChangeWidest, setChangeWidest] = useState(false);

    var modeStyle = styles.container;

    if(ChangeMode === false){
        modeStyle = [styles.container,{marginLeft:"75%"}];
    }

    if(ChangeWide === true){
        modeStyle= [styles.container,{marginLeft: "40%"}];
    }

    if(ChangeWider === true){
        modeStyle= [styles.container,{marginLeft: "20%"}];
    }

    if(ChangeWidest === true){
        modeStyle= [styles.container,{marginLeft: "5%"}];
    }


    return(
        <View style={modeStyle}>
            <Text> Normal </Text>
            <Switch
            value ={ChangeMode}
            onValueChange={()=>{
                setChangeMode(!ChangeMode);
            }}
        />
            <Text> Wide </Text>
            <Switch
            value ={ChangeWide}
            onValueChange={()=>{
                setChangeWide(!ChangeWide);
            }}
        />
        <Text> Wider </Text>
            <Switch
            value ={ChangeWider}
            onValueChange={()=>{
                setChangeWider(!ChangeWider);
            }}
        />
            <Text> Widest </Text>
            <Switch
            value ={ChangeWidest}
            onValueChange={()=>{
                setChangeWidest(!ChangeWidest);
            }}
        />

        </View>
    )
}

export default Right; 