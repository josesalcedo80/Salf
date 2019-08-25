
import React, {Component} from 'react';

import { 
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  
} from 'react-native';



import Color from './src/components/Cambiarcolor';
import Input from './src/components/Input';

export default class salf extends Component{
   

  render(){
    return(


      <View style={styles.Vista}>

        <Image 
        style={{width: 300, height:300}}
        source={require('./src/components/logo.png')}/>

      

          <Input
          placeholder='Usuario'
          />
          <Input
          secureTextEntry
          placeholder='Contraseña'
          />

          <TouchableOpacity

          style={{backgroundColor: 'green',
                 width: 180, height: 40,
                 marginTop: 30, borderRadius: 20, 
                 justifyContent:'center' }}>

            <Text style={{textAlign: 'center'}} >
              Iniciar Sesion
          </Text>
          </TouchableOpacity>


            
      </View>
      
      
    )
  }
}

const styles = StyleSheet.create({

  Vista: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
    
  },
  Texto:{
    color: 'white',
    fontSize: 30,
  },

  boton:{
    backgroundColor: 'green'
  },

  

 
})

