import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const ThemedView = ({style, ...props}) => {
        const insets = useSafeAreaInsets()
  return (
    <View
    style={[{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },   style]}
    >
    {props.children}
      </View>
  )
}

export default ThemedView

const styles = StyleSheet.create({})