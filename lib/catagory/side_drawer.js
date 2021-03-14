import React from 'react';
import {Button} from 'react-native';
import {View,StyleSheet} from 'react-native';


const side_Drawer=()=>{

   

    return(
        
        <View style={styles.side_drawer_style}>

        </View>
    
    );

};


const styles = StyleSheet.create({
    side_drawer_style:{
        height:'100%',
        width:200,
        backgroundColor:"red",
        position:"absolute",
        zIndex:1,
        

    }
})
export default side_Drawer;