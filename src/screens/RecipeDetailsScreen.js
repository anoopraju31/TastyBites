import { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
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
import YouTubeIframe from 'react-native-youtube-iframe'

import { Ingredient, Loading, Stat } from '../components'
import YoutubeIframe from 'react-native-youtube-iframe'

const RecipeDetailsScreen = (props) => {
	const { idMeal, strMealThumb, strMeal } = props.route.params
	const navigation = useNavigation()
	const [isFavourite, setIsFavourite] = useState(false)
	const [meal, setMeal] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getMealIngredients = (meal) => {
			let ingredients = []

			if (meal) {
				for (let i = 1; i <= 20; i++) {
					if (meal[`strIngredient${i}`] || meal[`strMeasure${i}`]) {
						ingredients.push({
							id: i,
							measure: meal[`strMeasure${i}`],
							ingredient: meal[`strIngredient${i}`],
						})
					}
				}
			}

			return ingredients
		}

		const getMealData = async (id) => {
			try {
				setLoading(true)

				const response = await axios.get(
					`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
				)

				if (response && response.data) {
					const ingredients = getMealIngredients(response.data.meals[0])

					setMeal({
						...response.data.meals[0],
						ingredients,
					})
					setLoading(false)
				}
			} catch (err) {
				console.log('error: ', err.message)
				setLoading(false)
			}
		}
		getMealData(idMeal)
	}, [idMeal])

	const getYoutubeVideoId = (url) => {
		const regex = /[?&]v=([^&]+)/
		const match = url.match(regex)

		return match && match[1] ? match[1] : null
	}

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

			{/* Nav */}
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

					{/* misc */}
					<Animated.View
						entering={FadeInDown.delay(100)
							.duration(700)
							.springify()
							.damping(12)}
						className='flex-row justify-around'>
						<Stat Icon={ClockIcon} stat='35' title='Mins' />
						<Stat Icon={UsersIcon} stat='03' title='Servings' />
						<Stat Icon={FireIcon} stat='103' title='Cal' />
						<Stat Icon={Square3Stack3DIcon} stat='' title='Easy' />
					</Animated.View>

					{/* ingredients */}
					<Animated.View
						entering={FadeInDown.delay(200)
							.duration(700)
							.springify()
							.damping(12)}
						className='space-y-4'>
						<Text
							style={{ fontSize: hp(2.5) }}
							className='font-bold flex-1 text-neutral-700'>
							Ingredients
						</Text>

						<View>
							{meal?.ingredients.map(({ id, measure, ingredient }) => (
								<Ingredient
									key={id}
									measure={measure}
									ingredient={ingredient}
								/>
							))}
						</View>
					</Animated.View>

					{/* instructions */}
					<Animated.View
						entering={FadeInDown.delay(300)
							.duration(700)
							.springify()
							.damping(12)}
						className='space-y-4'>
						<Text
							style={{ fontSize: hp(2.5) }}
							className='font-bold flex-1 text-neutral-700'>
							Instructions
						</Text>
						<Text style={{ fontSize: hp(1.6) }} className='text-neutral-700'>
							{meal?.strInstructions}
						</Text>
					</Animated.View>

					{/* recipe video */}
					{meal.strYoutube && (
						<Animated.View
							entering={FadeInDown.delay(400)
								.duration(700)
								.springify()
								.damping(12)}
							className='space-y-4'>
							<Text
								style={{ fontSize: hp(2.5) }}
								className='font-bold flex-1 text-neutral-700'>
								Recipe Video
							</Text>
							<View>
								<YoutubeIframe
									videoId={getYoutubeVideoId(meal.strYoutube)}
									height={hp(30)}
								/>
							</View>
						</Animated.View>
					)}
				</View>
			)}
		</ScrollView>
	)
}

export default RecipeDetailsScreen
