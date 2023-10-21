import { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {
	ChevronLeftIcon,
	ClockIcon,
	FireIcon,
} from 'react-native-heroicons/outline'
import {
	HeartIcon,
	Square3Stack3DIcon,
	UsersIcon,
} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import axios from 'axios'

import { Loading } from '../components'

const RecipeDetailsScreen = (props) => {
	const { idMeal, strMealThumb, strMeal } = props.route.params
	const navigation = useNavigation()
	const [isFavourite, setIsFavourite] = useState(false)
	const [meal, setMeal] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getMealData = async (id) => {
			try {
				setLoading(true)

				const response = await axios.get(
					`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
				)
				console.log('got meal data: ', response.data)
				if (response && response.data) {
					setMeal(response.data.meals[0])
					setLoading(false)
				}
			} catch (err) {
				console.log('error: ', err.message)
				setLoading(false)
			}
		}
		getMealData(idMeal)
	}, [idMeal])

	return (
		<ScrollView
			className='bg-white flex-1'
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 30 }}>
			<StatusBar style='light' />

			{/* recipe image */}
			<View className='flex-row justify-center'>
				<Animated.Image
					source={{ uri: strMealThumb }}
					style={{
						width: wp(98),
						height: hp(50),
						borderRadius: 32,
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,
						marginTop: 4,
					}}
					sharedTransitionTag={strMeal}
					entering={FadeInDown.delay(100).duration(600).springify().damping(12)}
				/>
			</View>
			<Animated.View
				entering={FadeIn.delay(200).duration(1000)}
				className='w-full absolute top-8 flex-row justify-between items-center'>
				{/* back button */}
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className='p-2 rounded-full justify-center items-center ml-5 bg-white'>
					<ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color='#fbbf24' />
				</TouchableOpacity>

				{/* Favorite button */}
				<TouchableOpacity
					onPress={() => setIsFavourite((prev) => !prev)}
					className='p-2 justify-center items-center rounded-full mr-5 bg-white'>
					<HeartIcon
						size={hp(3.5)}
						strokeWidth={4.5}
						color={isFavourite ? 'red' : 'gray'}
					/>
				</TouchableOpacity>
			</Animated.View>

			{/* meal description */}
			{loading ? (
				<Loading size='large' className='mt-16' />
			) : (
				<View className='px-4 flex justify-between space-y-4 pt-8'>
					{/* name and area */}
					<Animated.View
						entering={FadeInDown.duration(700).springify().damping(12)}
						className='space-y-2'>
						<Text
							style={{ fontSize: hp(3) }}
							className='font-bold flex-1 text-neutral-700'>
							{meal?.strMeal}
						</Text>
						<Text
							style={{ fontSize: hp(2) }}
							className='font-medium flex-1 text-neutral-500'>
							{meal?.strArea}
						</Text>
					</Animated.View>
				</View>
			)}
		</ScrollView>
	)
}

export default RecipeDetailsScreen
