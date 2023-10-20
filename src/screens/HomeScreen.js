import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { Categories } from '../components'

const HomeScreen = () => {
	return (
		<View className='flex-1 bg-white'>
			<StatusBar style='dark' />

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 50 }}
				className='space-y-6 pt-14'>
				{/* Avatar & Bell icon */}
				<View className='mx-4 flex-row justify-between items-center mb-2'>
					<Image
						source={require('../../assets/images/avatar.png')}
						style={{ width: hp(5.5), height: hp(5) }}
					/>
					<BellIcon size={hp(4)} color='gray' />
				</View>

				{/* Greeting */}
				<View className='mx-4 space-y-2 mb-2'>
					<Text style={{ fontSize: hp(1.7) }} className='text-neutral-600'>
						<View>
							<Text
								className='font-semibold text-neutral-600'
								style={{ fontSize: hp(3.8) }}>
								Make your own food,
							</Text>
						</View>

						<Text
							className='font-semibold text-neutral-600'
							style={{ fontSize: hp(3.8) }}>
							Stay at <Text className='text-amber-400'> Home</Text>
						</Text>
					</Text>
				</View>

				{/* Search bar */}
				<View className='mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]'>
					<TextInput
						placeholder='Search any recipe'
						placeholderTextColor='grey'
						style={{ fontSize: hp(1.7) }}
						className='flex-1 text-base mb-1 pl-3 tracking-wider'
					/>
					<View className='bg-white rounded-full p-3'>
						<MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color='gray' />
					</View>
				</View>

				{/* Categories */}
				<View>
					<Categories />
				</View>
			</ScrollView>
		</View>
	)
}

export default HomeScreen
