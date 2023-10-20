import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
	return (
		<View className='flex-1 items-center justify-end bg-black'>
			<Text className='font-bold text-xl p-4 bg-orange-300 text-center'>
				Open up App.js
			</Text>
			<StatusBar style='auto' />
		</View>
	)
}
