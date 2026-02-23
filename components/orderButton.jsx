import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'

const orderButton = () => {
  return (
    <TouchableOpacity style={styles.orderButton}>
<Text style={styles.orderButtonText}>Order Now</Text>
    </TouchableOpacity>
  )
}

export default orderButton

const styles = StyleSheet.create({
    orderButton: {
        backgroundColor: '#ff2600',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'flex-end',
        margin: 10,
        marginTop: 130,
        width: 220,
    },
    orderButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})