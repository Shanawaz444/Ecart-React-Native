import React,{ useState } from 'react';

import { Text,ScrollView, Button,View,StyleSheet,Image,ImageBackground } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import Icon from 'react-native-vector-icons/FontAwesome' ;
import side_Drawer from './lib/catagory/side_drawer';



const side_Drawer_fun=side_Drawer();
const image = { uri: "./images/pacifier.png" };

const App = ()=>{
  const [state,setState]=useState(false)
  var pre=false;
return (

<View style={styles.main_page} backgroundColor="#E5E5E5">
{state && side_Drawer_fun}
<View style={styles.top_part}>
<View style={styles.navbar}>  


<View style={styles.navbar_first_half}  >
<View style={styles.sideDrawer_container}>
<Icon
 raised
 size={25}
 name='navicon'
 type='font-awesome'
  color='#F49F1C'
  onPress={() => {setState(!state)}} />
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
  size={20}
  name="search"
  type="font-awesome" 
  color="#00154F"
  onPress={() => {setState(!state)}}
  />
</View>
<View style={styles.nav_bar_cart}>
  <Icon
  raised
  size={20}
  name="shopping-basket"
  type="font-awesome" 
  color="#00154F"
  onPress={() => console.log('shopping-basket button')}
  />
</View>
</View>




</View>




<ScrollView style={styles.container}>  
<Text style={styles.Trending_Lable}>
  Category
  </Text>

<View style={styles.inner_main_cnt} backgroundColor="#E5E5E5">
<View style={styles.card_content}>
<View style={styles.cards3}>
<Image source={require("./images/pacifier.png")} style={styles.image}>
      
    </Image>
 </View>
 <Text style={styles.card_text}>Baby Needs</Text>
</View>
<View style={styles.card_content}>
<View style={styles.cards3}>
<Image source={require("./images/water-supply.png")} style={styles.image}>
      
      </Image>
 
 </View>
 <Text style={styles.card_text}>Home supplies</Text>
</View>
<View style={styles.card_content}>
<View style={styles.cards3}>
<Image source={require("./images/cocktail.png")} style={styles.image}>
      
      </Image>
 
 </View>
 <Text style={styles.card_text}>Beverages</Text>
</View>
<View style={styles.card_content}>
<View style={styles.cards3}>
<Image source={require("./images/grocery.png")} style={styles.image}>
      
      </Image>
 
 </View>
 <Text style={styles.card_text}>Grocery</Text>
</View>
<View style={styles.card_content}>
<View style={styles.cards3}>
<Image source={require("./images/instant-noodles.png")} style={styles.image}>
      
      </Image>
 
 </View>
 <Text style={styles.card_text}>Instant Food</Text>
</View>
<View style={styles.card_content}>
<View style={styles.cards3}>
<Image source={require("./images/cake.png")} style={styles.image}>
      
      </Image>
 
 </View>
 <Text style={styles.card_text}>Cakes</Text>
</View>



</View>
<Text style={styles.Trending_Lable}>
  Trending
  </Text>
<View style={styles.Trending}>
  <BackgroundImage source={require("./images/ade1.jpg")} style={styles.tren1}>
  
  </BackgroundImage>

</View>
<View style={styles.Trending}>

<BackgroundImage source={require("./images/ade2.jpg")} style={styles.tren1}>
  
  </BackgroundImage>



</View>
<View style={styles.Trending}>
<BackgroundImage source={require("./images/ade3.jpg")} style={styles.tren1}>
  
  </BackgroundImage>



</View>


 
 
 


 
  </ScrollView>  
  
  

    </View>

<View style={styles.bottom_part}>
  <View  style={styles.bottom_bar}>
    <View style={styles.bottom_bar_Home}>
 
        <Icon
        raised
        size={30}
        name="home"
        type="font-awesome" 
        color="#F49F1C"
        onPress={() => console.log('home button')}
        />

    
      
    </View>
    <View style={styles.bottom_bar_category}>
    <Icon
  raised
  size={30}
  name="qrcode"
  type="font-awesome" 
  color="#F49F1C"
  onPress={() => console.log('category button')}
  />

    </View>
    <View style={styles.bottom_bar_Fav}>
    <Icon
  raised
  size={30}
  name="heart"
  type="font-awesome" 
  color="#F49F1C"
  onPress={() => console.log('fav button')}
  />

    </View>
    <View style={styles.bottom_bar_Delevery}>
    <Icon
  raised
  size={30}
  name="truck"
  type="font-awesome" 
  color="#F49F1C"
  onPress={() => console.log('delevery button')}
  />

    </View>
  </View>
</View>


</View>
  

);
};

const styles=StyleSheet.create({


  tren1:{
    flex:1,
  },
 
  Trending_Lable:{

    fontSize:30,
    marginLeft:10,
    marginTop:10,
    color:'#00154F',
    
    fontFamily:'sans-serif-medium'

  },

  Trending:{

    flex:1,
    height:150,
    backgroundColor:'red',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
  },
  

  bottom_bar:{
    padding:20,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  bottom_bar_Home:{
    marginLeft:10

  },
  bottom_bar_category:{
    marginLeft:10

  },
  bottom_bar_Fav:{
    marginLeft:10

  },
  bottom_bar_Delevery:{
    marginLeft:10

  },




  image: {
    resizeMode: 'cover',
    justifyContent: "center",
    marginTop:40,
    marginLeft:40
  },

navbar:{
  
  flex:1,
  flexDirection:'row',
  backgroundColor:'#00154F',
  justifyContent: 'space-between',
  maxHeight:80,
  
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
  
  width:40,
  
},
sideDrawer_button:{
  backgroundColor:'red',
},
sideDrawer_image: {
 

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
},
main_content:{
 flexWrap: 'wrap',
  flex:1,
  flexDirection: 'row',
  paddingTop: 10,
  
},
cards1:{
  height:100,
  width:100,
  margin:10,
  backgroundColor:'red',
  },
  cards2:{
    height:100,
    width:100,
    margin:10,
    backgroundColor:'red',
    },
    cards3:{
      height:128,
      width:122,
     
      marginLeft:7,
      marginTop:10,
      marginBottom:10,
      backgroundColor:'#F49F1C',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      
      },
top_part:{
flex:1,
flexDirection:'column',

},

main_page:{
  flex:1,
  flexDirection:'column',
 justifyContent:'space-between'
 
  
},

bottom_part:{
 

  height:70,
  
  
  
  backgroundColor:'#00154F'
},
container:{  
  
  
  flex:1,
  

}, 
inner_main_cnt:{
  flex:1,
  flexDirection:'row',
  flexWrap:'wrap',

},
card_text:{
  textAlign:'center',
  fontSize:15,
  fontWeight:'bold',
}


})
export default App;