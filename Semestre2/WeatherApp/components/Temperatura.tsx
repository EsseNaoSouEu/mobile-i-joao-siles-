import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';


const Temperatura = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.temp}>31°</Text>
    </View>
    )
}

export default Temperatura

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 temp: {
    width: '100%',
    fontSize: 40,
    fontWeight: 600,
}
});
