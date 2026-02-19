import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { use, useState } from 'react'
import { router } from 'expo-router'

const ThemedCard = ({style,id,...props}) => {
    const [image,setImage]=useState(props.image)
    const [title,setTitle]=useState(props.title)
    const [Description,setDescription]=useState(props.Description)
    const [rating,setRating]=useState(props.rating)
    const [isFavorite,setIsFavorite]=useState(false)
  return (
      <TouchableOpacity style={styles.card} onPress={() => {router.push({
pathname:'/food/[id].js',
params:{image: image,title:title,Description:Description,rating:rating}
      })}}>
<Image 
style={styles.cardImage} 
source={image}
/>

<Text style={styles.cardTitle}>
    {title}
    </Text>

<Text style={styles.cardDescription}>
    {Description}
    </Text>

<View style={styles.cardBottomContainer}>
    <View style={styles.cardRatingContainer}>
        <Text style={styles.cardStar}>★</Text>
        <Text style={styles.cardRating}>{rating}</Text>
    </View>
<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
 <Text style={styles.cardHeart}>{isFavorite ? '♥' : '♡'}</Text> 
</TouchableOpacity>
</View>
</TouchableOpacity >

  )
}

export default ThemedCard

const styles = StyleSheet.create({

card:{
backgroundColor: '#ffffff',
borderRadius: 10,
elevation: 4,
padding: 10,
flexDirection: 'column',
maxHeight: 220,
gap: 2,
},
cardImage:{
    aspectRatio: 1,
    borderRadius: 8,
    maxHeight: 100,
    alignSelf: 'center',
},
cardTitle:{
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'left',
},
cardDescription:{
    fontSize: 11,
    color: '#373737',
    marginTop: 4,
    textAlign: 'left',
},
cardHeart:{
    fontSize: 30,
    color: '#ff0000',
},
cardStar:{
    fontSize: 30, 
    color: '#ffcc00',
    marginBottom: 3,
},
cardRating:{
    fontSize: 14,
    color: '#000000',
},
cardRatingContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
},
cardBottomContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
},


})