import React from 'react';
import {Text,View, Button,ScrollView,StyleSheet,Image} from 'react-native';

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