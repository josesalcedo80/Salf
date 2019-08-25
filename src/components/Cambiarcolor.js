
import React, {Component} from 'react';

import { 
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';






export default class Color extends Component{

  constructor(props, env){
    super(props, env)

    this.state= {
      colorFondo: 'white'
    }
  }

  cambiarColor(){
    if(this.state.colorFondo === 'white'){
      this.setState({colorFondo: 'yellow'})
    }

    else{
      this.setState({colorFondo: 'white'})
    }  
  }   
   

  render(){
    return(
      <View style={{
     flex:1,
     justifyContent: 'center',
    backgroundColor: this.state.colorFondo,}}>

          <Button
          onPress={this.cambiarColor.bind(this)}
          title='Cambia el Color'
          color='gold'
          />
          
      </View>
    )
  }
}





