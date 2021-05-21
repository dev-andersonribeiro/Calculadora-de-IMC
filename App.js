import * as React from 'react';
import { Text,  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {

  //valores globais do app

state = {
  weight: 0,
  height: 0,
  imc: 0,
  label: '',
  color: '#ecf0f1',
};

calcImc = () => {


  //altura * altura 
  const resultImc = this.state.weight / (this.state.height * this.state.height);

  this.setState({
    imc: Math.ceil(resultImc)
  });

  if(resultImc < 18.5){
    this.setState({
      label: 'Magreza',
      color: '#e74c3c',
    });
  }else if (resultImc >= 18.5 && resultImc < 25){
      this.setState({
        label: 'Normal',
        color: '#27ae60',
      });
  }else if (resultImc >= 25 && resultImc < 30){
    this.setState({
      label: 'Sobrepeso',
      color: '#f39c12',
    });
  }else if (resultImc >= 30 && resultImc < 40 ){
    this.setState({
      label: 'Obesidade',
      color: '#e74c3c',
    });
  } else if (resultImc >= 40){
    this.setState({
      label: 'Obesidade Grave',
      color: '#c0392b',
    })
  }

 
}

render(){


  // cálculo do imc = peso / altura 2
 
  return (
    <View style={styles.app}>
      <Text style={styles.title}>SEU IMC</Text>
      
      <View style={[styles.boxResult, {backgroundColor: this.state.color}]}>
      
        <Text style={styles.result}>{this.state.imc}</Text>
        <Text style={styles.diagnostic}>{this.state.label}</Text>
      
      </View>

      <View style={styles.boxInputs}>
      
        <TextInput
        mode='outlined'
        label="Digite o seu peso"
        style={styles.inputWeight}
        onChangeText={value =>{
            this.setState({weight: value.replace(',', '.')});
          }}
          />
        
        <TextInput
        // theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
        mode='outlined'
        label="Digite a sua altura"
        style={styles.inputHeight}
        onChangeText={value =>{
            this.setState({height: value.replace(',', '.')});
          }}
         />

         <Button style={styles.btn}
        marginVertical="20"
         mode="contained" onPress={this.calcImc}>Calcular</Button>
        
       <Button 
       color="#000"
       title="Calcular"
       
      />
      
      </View>


    </View>
    
  );

  
}
}

const styles = StyleSheet.create({
  app: {
      
      paddingTop: 80,
      paddingHorizontal: 10,
      
      
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    
  },

  boxResult:{
    padding: 8,
    borderRadius: 5,
    marginVertical: 30,
    width: 150,
    alignSelf: 'center'
  },

  result: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },

  diagnostic: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },

  boxInputs:{
    paddingHorizontal: 20,
  },

  inputWeight:{
    marginVertical: 10,
   
    
  },

   inputHeight:{
    marginVertical: 10
  },

  btn:{
      marginVertical: 10,
      padding: 10
  
  }





});

