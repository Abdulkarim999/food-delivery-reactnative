import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import * as Icon from 'react-native-feather';

const colors = ['#FFA500', '#FF6347', '#FFD700', '#32CD32', '#00BFFF']; // Array of colors to cycle through

export default function RestaurantCard({ restaurant }) {
  const [borderColor, setBorderColor] = useState(colors[0]); // Initial border color

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length; // Cycle through colors
        return colors[nextIndex];
      });
    }, 3000); // Change color every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          ...styles.card,
          borderColor, // Apply dynamic border color
		  borderWidth: 0.5,
        }}
      >
        <Image className="h-36 w-64" source={restaurant.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{restaurant.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={require('../assets/images/cheese.png')} className="h-4 w-4" />
            <Text className="text-xs">
              <Text className="text-green-700">{restaurant.stars}</Text>
              <Text className="text-gray-700">
                ({restaurant.reviews} reviews) . <Text className="font-semibold">{restaurant.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width="15" height="15" />
            <Text className="text-gray-700 text-xs">Nearby. {restaurant.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 5,
	
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 24, // Assuming 'mr-6' is 24 units
    backgroundColor: '#fff',
  },
});
