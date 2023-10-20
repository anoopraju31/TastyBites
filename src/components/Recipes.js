import { Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MasonryList from '@react-native-seoul/masonry-list'
import { mealData } from '../constants'
import { RecipeCard } from './'

const Recipes = () => {
	return (
		<View className='mx-4 space-y-3'>
			<Text
				style={{ fontSize: hp(3) }}
				className='font-semibold text-neutral-600'>
				Recipes
			</Text>

			<View className=''>
				<MasonryList
					data={mealData}
					keyExtractor={(item) => item.name}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <RecipeCard />}
					//   refreshing={isLoadingNext}
					//   onRefresh={() => refetch({first: ITEM_CNT})}
					onEndReachedThreshold={0.1}
					//   onEndReached={() => loadNext(ITEM_CNT)}
				/>
			</View>
		</View>
	)
}

export default Recipes
