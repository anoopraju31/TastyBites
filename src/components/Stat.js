import { Text, View } from 'react-native'
import { ClockIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Stat = ({ Icon, stat, title }) => {
	return (
		<View className='flex rounded-full bg-amber-300 p-2'>
			<View
				style={{ height: hp(6.5), width: hp(6.5) }}
				className='bg-white rounded-full flex items-center justify-center'>
				<Icon size={hp(4)} strokeWidth={2.5} color='#525252' />
			</View>
			<View className='flex items-center py-2 space-y-1'>
				<Text
					style={{ fontSize: hp(2) }}
					className='font-bold text-neutral-700'>
					{stat}
				</Text>
				<Text
					style={{ fontSize: hp(1.3) }}
					className='font-bold text-neutral-700'>
					{title}
				</Text>
			</View>
		</View>
	)
}

export default Stat
