import { StyleSheet, Text, View } from 'react-native'





const ThemedHomeMainHeader = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>   {title}</Text>
    </View>
  )
}

export default ThemedHomeMainHeader

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 70,
    marginLeft: 20,
  },

})