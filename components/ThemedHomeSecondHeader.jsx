import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThemedHomeSecondHeader = ({ description }) => {
  return (
    <View>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default ThemedHomeSecondHeader

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
  },
})