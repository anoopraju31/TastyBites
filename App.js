import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, RecipeDetailsScreen, WelcomeScreen } from './src/screens'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Welcome'
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Welcome' component={WelcomeScreen} />
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='RecipeDetails' component={RecipeDetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
