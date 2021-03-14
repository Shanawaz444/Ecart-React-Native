import React from 'react';
import { Text,View,StyleSheet,ScrollView,Button } from 'react-native';
import my_wishlist from './side_bar_sub_components/my_wishList';
import my_account from './side_bar_sub_components/my_account';
import my_orders from './side_bar_sub_components/my_orders';
import my_notifications from './side_bar_sub_components/my_notifications';


const side_drawer_middle_components=(props)=>{

    const my_wishlist1=my_wishlist();
    const my_account1=my_account();
    const my_orders1=my_orders();
    const my_notifications1=my_notifications();
    
        
        return(
            <ScrollView style={styles.ScrollView_here} >

                
                <View style={styles.side_drawer_middle_components_style}>
               {my_wishlist1}
               {my_orders1}
               {my_account1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
               {my_notifications1}
              
            </View>
            
              
                
            </ScrollView>
            

              
        
    );
    
   

}

const styles=StyleSheet.create({

    side_drawer_middle_components_style:{
      
    },
    ScrollView_here:{
        flex:1,
        
       
        
    },
   
})
export default side_drawer_middle_components;