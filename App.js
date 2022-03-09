import { NavigationContainer } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	NativeStackView,
} from "@react-navigation/native-stack";

//Pages import
import HomeScreen from "./pages/Home";
import LoginScreen from "./pages/Login";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					options={{ title: "Home" }}
					component={HomeScreen}
				/>
				<Stack.Screen
					name="Login"
					options={{ title: "Login" }}
					component={LoginScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
