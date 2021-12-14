import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import {Image,StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
    const [uselesstext, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState(null);
    const [text, setText] =useState('');
  return (
    <View style={styles.container}>
    <Image source={{ uri: "https://d20khd7ddkh5ls.cloudfront.net/fandctempconversion.jpg" }} style={styles.logo} />

    <Text style={styles.instructions} >
      Change from celsius to fahrenheit!
      </Text>
      <TextInput
        style={styles.input}
        value={number}
        keyboardType="numeric"
        placeholder="0"
        
        onChangeText = {text=> setText(text)}
      />
      <TextInput style={styles.input} onChangeText={onChangeText} value={text*9/5+32} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffabab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 15,
  }, 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
