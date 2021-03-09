import React from 'react';
import { Text,ScrollView, View,StyleSheet,Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const App = ()=>{
  return (
   
<ScrollView>
      <View style={styles.navbar}>
        
      <Button
  icon={
    
    <Icon
    name="database"
    size={25}
    color="white"
  />
  }
  title=""
 
/>
<Icon
      name="database"
      size={25}
      color="white"
    />
      </View>
    </ScrollView>
    
      
 
    
   

  );
};

const styles=StyleSheet.create({

  navbar:{
    height: 70,
    flex:1,
    flexDirection:'row',
    backgroundColor:'#036ED0'
  },
  sideDrawer_container:{
    paddingTop: 10,
    paddingLeft:10,
    height:20,
    width:20,
    
  },
  sideDrawer_button:{
    backgroundColor:'red',
  },
  sideDrawer_image: {
    height:20,
    width:20,
  },
  icc:{

  }

})
export default App;