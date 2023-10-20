import { Image, Pressable, Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const RecipeCard = ({ item, index }) => {
	const isEven = index % 2 === 0
	return (
		<View>
			<Pressable
				style={{
					width: '100%',
					paddingLeft: isEven ? 0 : 8,
					paddingRight: isEven ? 8 : 0,
				}}
				className='flex justify-center mb-4 space-y-1'>
				<Image
					source={{ uri: item.image }}
					style={{
						width: '100%',
						height: hp(index % 3 === 0 ? 25 : 35),
						borderRadius: 35,
					}}
					// className='bg-black/5'
				/>

				<Text
					className='font-semibold ml-2 text-neutral-600 truncate'
					style={{ fontSize: hp(1.5) }}>
					{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
				</Text>
			</Pressable>
		</View>
	)
}

export default RecipeCard
