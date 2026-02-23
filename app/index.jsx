import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Searchbar, useTheme } from "react-native-paper";
import ThemedButtonFilter from "../components/ThemedButtonFilter";
import ThemedHomeMainHeader from "../components/ThemedHomeMainHeader";
import ThemedHomeSecondHeader from "../components/ThemedHomeSecondHeader";
import ThemedCard from "../components/ThemedCard";

//images
import food1 from "../assets/food/food1.png";
import PriceButton from "../components/PriceButton";
const Home = () => {
  const theme = useTheme({ colors: { onSurface: "#000000" } });
  const [searchQuery, setSearchQuery] = React.useState("");
  const data =[
    {
      id:1,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.8,
      price: 12.99,
    },
    {
      id:2,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 13,
    },
    {
      id:3,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 17.99,
    },
    
{
      id:4,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 19.99,
    },
    {
      id:5,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 14.99,
    },
    {
      id:6,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 16.99,
    },
    {
      id:7,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 18.99,
    },
    {
      id:8,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 15.99,
    },{
      id:9,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 20.99,
    },{
      id:10,
      image: food1,
      title: "Delicious Pizza",
      Description: "A classic Italian dish with a crispy crust and savory toppings.",
      rating: 4.5,
      price: 22.99,
    }
  ];
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ThemedHomeMainHeader title="Food For You" />
        <ThemedHomeSecondHeader description="Order your favorite food!" />
        <View style={[styles.SearchButtonContainer]}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholderTextColor={theme.colors.onSurface}
            elevation={2}
          />
          <ThemedButtonFilter></ThemedButtonFilter>  
        </View>
        <FlatList
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ThemedCard 
              id={item.id}
                image={item.image} 
                title={item.title} 
                Description={item.Description} 
                rating={item.rating} 
                price={item.price}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
    marginTop: 40,
    backgroundColor: "#ffffff",
    shadowRadius: 0,
    width: "80%",
    height: 62,
    borderRadius: 20,
  },
  SearchButtonContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 8,
  },
  cardContainer: {
    flex: 1,
    maxWidth: '48%',
    marginHorizontal: 4,
  },
  
});
