import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
 
class Side_Drawer extends React.Component {
  constructor(props) {
    super(props);
    console.log("aAAAA")
    this.state = {
       
      open: false
    };
  }
 
  toggleOpen = () => {
    console.log("ttttts");
    this.setState({ open: !this.state.open });
    
  };
 
  drawerContent = () => {
    console.log("sdsdsds");
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };
 
  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={11}
          overlay={true}
          opacity={0.4}
        >
          <Button onPress={this.toggleOpen} style={styles.body} title="fd">
            <Text>Open</Text>
          </Button>
        </MenuDrawer>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F04812'
  }
})
  export default  Side_Drawer;