import { Image, Pressable, Text } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeInDown } from 'react-native-reanimated'

const RecipeCard = ({ item, index, navigation }) => {
	const isEven = index % 2 === 0
	return (
		<Animated.View
			entering={FadeInDown.delay(index * 100)
				.duration(600)
				.springify()
				.damping(12)}>
			<Pressable
				style={{
					width: '100%',
					paddingLeft: isEven ? 0 : 8,
					paddingRight: isEven ? 8 : 0,
				}}
				onPress={() => navigation.navigate('RecipeDetails', item)}
				className='flex justify-center mb-4 space-y-1'>
				<Image
					source={{ uri: item.strMealThumb }}
					style={{
						width: '100%',
						height: hp(index % 3 === 0 ? 25 : 35),
						borderRadius: 18,
					}}
					className='bg-black/5'
				/>

				<Text
					className='font-semibold ml-2 text-neutral-600 truncate'
					style={{ fontSize: hp(1.5) }}>
					{item.strMeal.length > 20
						? item.strMeal.slice(0, 20) + '...'
						: item.strMeal}
				</Text>
			</Pressable>
		</Animated.View>
	)
}

export default RecipeCard
