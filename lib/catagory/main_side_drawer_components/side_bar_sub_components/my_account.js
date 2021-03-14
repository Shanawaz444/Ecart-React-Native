import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome' ;
import { Text,View,StyleSheet } from 'react-native';

const my_account=(props)=>{

    return(

        <View style={styles.wish_list}>
            <Icon style={styles.my_account_icon} 
            
            raised
           size={30}
          name='user-circle'
          type='font-awesome'
           color='#F49F1C'
            />
            <Text style={styles.my_account_text}>
                My Account
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({

    wish_list:{
        flex:1,
  flexDirection:"row",
  marginTop:20,
  marginLeft:10,
  maxHeight:30
    },
    my_account_icon:{


    },
    my_account_text:{
        marginLeft:20, 
  fontSize:20,
  fontWeight:'bold',
  fontFamily:'sans-serif',
  color:'#F49F1C'
    }
})


export default my_account;