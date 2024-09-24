import { Image, StyleSheet, ImageBackground, Text, View } from 'react-native';
import React from 'react';

const DataHora = () => {
    return (
       <View style={styles.container}> 
        <View> 
            <View>
                <Text style={styles.horario}>19:53</Text>
            </View>
            <View>
                <Text style={styles.data}>Seg, 24/09</Text> 
            </View>
        </View>
        <View>
            <Text style={styles.local}>Brasil/São Paulo</Text>
            <Text style={styles.latlon}>-23.5489S -46.6388O</Text>
        </View>
       </View>
    )
}

export default DataHora

const styles = StyleSheet.create({
 container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
 horario: {
    fontSize: 45,
    color: 'white',
 },
 data: {
    fontSize: 30,
    color: 'white,'
 },
 local: {

 },
 latlon: {

 },
});
