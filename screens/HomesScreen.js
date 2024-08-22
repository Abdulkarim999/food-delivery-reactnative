import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Category from '../components/category';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants';

export default function HomesScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content" />
      {/* Search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center mt-5 p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-l-2 border-gray-300 pl-2">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">Dar es Salaam</Text>
          </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full">
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>
	  {/* main */}
	  <ScrollView showsVerticalScrollIndicator={false}
	   contentContainerStyle={{
		paddingBottom:20
	   }}
	   >
		{/*categories */}
		<Category />

		{/* featured */}
		<View className="mt-5">
			{
				[featured,featured ,featured ].map((item,index)=>{
					return (
						<FeaturedRow 
						    key={index}
							title={item.title}
							restaurants={item.restaurants}
							description={item.description}
						/>	
					)
				})
			}
		</View>
	   </ScrollView>
    </SafeAreaView>
  );
}
