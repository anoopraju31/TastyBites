import { StatusBar } from 'expo-status-bar'
import { Image, Text, View } from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const WelcomeScreen = () => {
	return (
		<View className='flex-1 justify-center items-center bg-amber-500'>
			<StatusBar style='light' />

			{/* Logo */}
			<View className='bg-white/20 rounded-full' style={{ padding: hp(5.5) }}>
				<View className='bg-white/20 rounded-full' style={{ padding: hp(5) }}>
					<Image
						source={require('../../assets/images/welcome.png')}
						style={{ width: hp(20), height: hp(20) }}
					/>
				</View>
			</View>

			{/* Title and Hero Text */}
			<View className='flex items-center space-y-2'>
				<Text
					style={{ fontSize: hp(7) }}
					className='font-bold text-white tracking-widest'>
					{' '}
					Foody{' '}
				</Text>
				<Text
					style={{ fontSize: hp(2.5) }}
					className='font-medium text-white tracking-widest'>
					{' '}
					Food is always right!{' '}
				</Text>
			</View>
		</View>
	)
}

export default WelcomeScreen
