import { Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MasonryList from '@react-native-seoul/masonry-list'
import RecipeCard from './RecipeCard'
import { useNavigation } from '@react-navigation/native'

const Recipes = ({ recipes }) => {
	const navigation = useNavigation()
	return (
		<View className='mx-4 space-y-3'>
			<Text
				style={{ fontSize: hp(3) }}
				className='font-semibold text-neutral-600'>
				Recipes
			</Text>

			<View className=''>
				<MasonryList
					data={recipes}
					keyExtractor={(item) => item.idMeal}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					renderItem={({ item, i }) => (
						<RecipeCard item={item} index={i} navigation={navigation} />
					)}
					onEndReachedThreshold={0.1}
				/>
			</View>
		</View>
	)
}

export default Recipes
