import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, View } from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
	const navigation = useNavigation()
	const ring1Padding = useSharedValue(0)
	const ring2Padding = useSharedValue(0)

	useEffect(() => {
		ring1Padding.value = 0
		ring2Padding.value = 0

		const ring1Timer = setTimeout(
			() => (ring1Padding.value = withSpring(ring1Padding.value + hp(5))),
			100,
		)
		const ring2Timer = setTimeout(
			() => (ring2Padding.value = withSpring(ring2Padding.value + hp(5.5))),
			300,
		)

		const navigationTimer = setTimeout(() => navigation.navigate('Home'), 2500)

		return () => {
			clearTimeout(ring1Timer)
			clearTimeout(ring2Timer)
			clearTimeout(navigationTimer)
		}
	}, [])

	return (
		<View className='flex-1 justify-center items-center bg-amber-500'>
			<StatusBar style='light' />

			{/* Logo */}
			<Animated.View
				className='bg-white/20 rounded-full'
				style={{ padding: ring2Padding }}>
				<Animated.View
					className='bg-white/20 rounded-full'
					style={{ padding: ring1Padding }}>
					<Image
						source={require('../../assets/images/welcome.png')}
						style={{ width: hp(20), height: hp(20) }}
					/>
				</Animated.View>
			</Animated.View>

			{/* Title and Hero Text */}
			<View className='flex items-center space-y-2'>
				<Text
					style={{ fontSize: hp(7) }}
					className='font-bold text-white tracking-widest'>
					{' '}
					TastyBites{' '}
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
