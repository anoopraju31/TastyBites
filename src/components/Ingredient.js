import { Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Ingredient = ({ measure, ingredient }) => {
	return (
		<View className='flex-row items-center space-x-4'>
			<View
				style={{ height: hp(1.5), width: hp(1.5) }}
				className='bg-amber-300 rounded-full'
			/>
			<View className='flex-row space-x-2'>
				<Text
					style={{ fontSize: hp(1.7) }}
					className='font-extrabold text-neutral-700'>
					{measure}
				</Text>
				<Text
					style={{ fontSize: hp(1.7) }}
					className='font-medium text-neutral-600'>
					{ingredient}
				</Text>
			</View>
		</View>
	)
}

export default Ingredient
