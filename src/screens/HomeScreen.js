import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { BellIcon } from 'react-native-heroicons/outline'

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
			</ScrollView>
		</View>
	)
}

export default HomeScreen
