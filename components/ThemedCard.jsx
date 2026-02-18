import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { use, useState } from 'react'

const ThemedCard = ({style,...props}) => {
    const [image,setImage]=useState(props.image)
    const [title,setTitle]=useState(props.title)
    const [Description,setDescription]=useState(props.Description)
    const [rating,setRating]=useState(props.rating)
    const [isFavorite,setIsFavorite]=useState(false)
  return (
    <TouchableOpacity>
      <TouchableOpacity style={styles.card}>
<Image source={image} style={{width: '100%', height: 120, borderRadius: 8}} />
<Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>{title}</Text>
<Text style={{fontSize: 14, color: '#888', marginTop: 5}}>{Description}</Text>

<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
 <Text style={styles.cardHeart}>{isFavorite ? '♥' : '♡'}</Text> 
</TouchableOpacity>

<TouchableOpacity >
<Text style={styles.cardStar}>★</Text> 
</TouchableOpacity>
<Text style={styles.cardRating}>{rating}</Text>


      </TouchableOpacity>



      </TouchableOpacity>
  )
}

export default ThemedCard

const styles = StyleSheet.create({

card:{
padding: 24,
backgroundColor: '#f0eded',
borderRadius: 8,
marginTop: 60,
width: '45%',
height: 250,
marginLeft: 20,
elevation: 4,

}
,
cardHeart:{
    fontSize: 30,
    alignSelf: 'flex-end',
    color: '#ff0000',
    position: 'absolute'
},
cardContainer:{
   // flexDirection: 'row',

},
cardStar:{
    fontSize: 30,
    color: '#ffcc00',

},

cardRating:{
    fontSize: 14,
    color: '#000000',
    position: 'absolute',
marginTop: 214,
marginLeft: 55,




}


})