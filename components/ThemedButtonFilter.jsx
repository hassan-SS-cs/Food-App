import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ThemedButtonFilter = () => {
  return (
<TouchableOpacity activeOpacity={0.7} style={styles.button}>
    <Text style={styles.buttonText}>≔</Text>
</TouchableOpacity>
  )
}

export default ThemedButtonFilter

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EF2A39',
        paddingVertical: 10,    
        borderRadius: 25,
        marginTop: 42,
        width: '15%',
        height: 60,
        elevation: 6,
    },
buttonText:{
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
}



})