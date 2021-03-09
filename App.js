import React from 'react';
import { Text,ScrollView, View,StyleSheet,Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const App = ()=>{
  return (
   
<ScrollView backgroundColor="#FCF6F5FF">
      <View style={styles.navbar}>


        <View style={styles.navbar_first_half}  >
        <View style={styles.sideDrawer_container}>
        <Icon
  raised
  size={30}
  name='navicon'
  type='font-awesome'
  color='#F49F1C'
  onPress={() => console.log('hello')} />
        </View>


       <View style={styles.nav_bar_cart_icon}>
       <Icon
  
           size={30}
          name='cart-plus'
            type='font-awesome'
           color='#F49F1C'
            />
       </View>

        <View style={styles.navbar_title}>
          <Text style={styles.navbar_title_font}>
            eCart
          </Text>
        </View>
        </View>
        

        
        <View style={styles.navbar_second_half}>
        <View style={styles.nav_bar_search}>
          <Icon
          raised
          size={30}
          name="search"
          type="font-awesome" 
          color="#00154F"
          onPress={() => console.log('search button')}
          />
        </View>
        <View style={styles.nav_bar_cart}>
          <Icon
          raised
          size={30}
          name="shopping-basket"
          type="font-awesome" 
          color="#00154F"
          onPress={() => console.log('shopping-basket button')}
          />
        </View>
        </View>

        


      </View>
    </ScrollView>
    
   

  );
};

const styles=StyleSheet.create({

  navbar:{
    height: 70,
    flex:1,
    flexDirection:'row',
    backgroundColor:'#00154F',
    justifyContent: 'space-between'
  },
  navbar_first_half:{
    backgroundColor:'#00154F',
    flex: 1,
    flexDirection:'row',
  },
  navbar_second_half:{
    backgroundColor:'#F49F1C',
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-end',
  },
  sideDrawer_container:{
    paddingTop: 20,
    paddingLeft:10,
    height:40,
    width:40,
    
  },
  sideDrawer_button:{
    backgroundColor:'red',
  },
  sideDrawer_image: {
    height:20,
    width:20,
  },
  navbar_title:{
    paddingTop: 25,
    paddingLeft:7,
  },
  navbar_title_font:{
   fontSize:20,
   color:'#F49F1C',
   fontFamily:'Helvetica',
   fontWeight: 'bold'
  },
  nav_bar_cart_icon:{
    paddingTop: 20,
    paddingLeft:25,
  },
  nav_bar_search:{
    
    paddingTop: 20,
    
  },
  nav_bar_cart:{
    
    paddingTop: 20,
    paddingLeft:25,
    paddingRight:20,
  }


})
export default App;