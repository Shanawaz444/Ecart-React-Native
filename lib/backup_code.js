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
  onPress={() => {setState(!state)}} 
  />
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