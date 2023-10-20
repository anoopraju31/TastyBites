import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import { categoryData } from '../constants'

const Categories = ({ activeCategory, setActiveCategory }) => {
	return (
		<View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='space-x-4'
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}>
				{categoryData.map((category, idx) => {
					let isActive = category.name === activeCategory
					let activeButtonClass = isActive ? 'bg-amber-400' : 'bg-black/10'
					return (
						<TouchableOpacity
							key={idx}
							onPress={() => setActiveCategory(category.name)}
							className='flex items-center space-y-1'>
							<View className={`rounded-full p-[6px]  ${activeButtonClass}`}>
								<Image
									source={{ uri: category.image }}
									style={{ width: hp(6), height: hp(6) }}
									className='rounded-full'
								/>
							</View>

							<Text className='text-neutral-600' style={{ fontSize: hp(1.6) }}>
								{' '}
								{category.name}{' '}
							</Text>
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		</View>
	)
}

export default Categories
