import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ThemedSearch = ({style,...props}) => {
  return (
    
    <View>

<TextInput style={[style,
{
    backgroundColor: '#edecec',
    borderRadius: 8,
    padding: 12,
    margin: 10,
width: '170%',
fontWeight:`bold`,
}
    
]}
placeholder='🔍    Search for food'
{...props}
/>


    </View>
  )
}

export default ThemedSearch

const styles = StyleSheet.create({



})