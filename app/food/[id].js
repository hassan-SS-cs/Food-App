import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import ThemedCard from '../../components/ThemedCard'
import OrderButton from '../../components/orderButton'

const FoodDetails = () => {
  const {image}= useLocalSearchParams();
  const {title}= useLocalSearchParams();
  const {Description}= useLocalSearchParams();
  const {rating}= useLocalSearchParams();
  const {price}= useLocalSearchParams();
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
  setCounter(counter + 1);
};

const decrementCounter = () => {
  if (counter > 1) {
    setCounter(counter - 1);
  }
};
  return (
    
    <View>
      <View style={styles.imageContainer}>
<Image 
      style={{width:250,height:250}}
      source={image}
      />
         </View>


      <View style={styles.titleContainer}>
 <Text 
 style={styles.title}>{title}
 </Text>
      </View>

<View style={styles.cardBottomContainer}>
    <View style={styles.cardRatingContainer}>
        <Text style={styles.cardStar}>★</Text>
        <Text style={styles.cardRating}>{rating}</Text>
    </View>
</View>

     <View style={styles.descriptionContainer}>
<Text 
style={styles.description}>{Description}
</Text>
     </View>

<View style={styles.CountContainer}>

<View style={styles.countButtonContainer}>
    <TouchableOpacity onPress={decrementCounter} style={styles.countButton}>
      <Text style={styles.countButtonText}>-</Text>
    </TouchableOpacity>
    <Text style={styles.countText}>{counter}</Text>

    <TouchableOpacity onPress={incrementCounter} style={styles.countButton}>
      <Text style={styles.countButtonText}>+</Text>
    </TouchableOpacity>
  </View>
</View>
      <View style={styles.BottomButtonContainer}>
       <View style={styles.priceButton}>
    <Text style={styles.priceButtonText}>${price}</Text>

       </View>
        <OrderButton/>
      </View>
      
      
    </View>
  )
}

export default FoodDetails

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },

  titleContainer: {
    justifyContent: 'center',
    marginTop: 100,
    marginLeft: 20,
  },

  descriptionContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  ratingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },

cardBottomContainer: {
    textAlign: 'left',
        marginLeft: 6,

    },

cardRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
cardStar: {
    fontSize: 30,
    color: '#ff0000',
  },
cardRating: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
  BottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
   priceButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 25,
    height: 50,
     width: 150,
        alignItems: 'center',
        marginTop: 132,
        marginLeft: 10,
  },
   priceButtonText: {
    color: '#ffffff',
     fontSize: 16,
    fontWeight: 'bold',
  },

  CountContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
      alignItems: "flex-end",
      marginRight: 30,
      marginTop: 10,
  },
  countText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 14,
  },
  countButtonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  countButton: {
    backgroundColor: '#ff0000',
    padding: 10,  
    borderRadius: 20,
    width: 50,
    alignItems: 'center',
     justifyContent: 'center',
  },
  countButtonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
})