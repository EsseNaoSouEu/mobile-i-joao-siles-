import { Image, StyleSheet, ImageBackground, Text, View } from 'react-native';
import React from 'react';

import DataHora from './components/Data-hora';

const img = require('./assets/vista-sp.jpg');

export default function WeatherApp() {
  return (
   <View style={styles.container}> 
    <ImageBackground  blurRadius={5}  source={img} style={styles.fundo} >
    <DataHora/>
    </ImageBackground>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fundo: {
  flex: 1,
  justifyContent: 'center',
  height: '100%',
  width: '100%'
  },
});
