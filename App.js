import { NavigationContainer } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	NativeStackView,
} from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

//CSS Framework
import { Provider as PaperProvider } from "react-native-paper";

//Pages import
import HomeScreen from "./pages/Home";
import LoginScreen from "./pages/Login";
import SearchScreen from "./pages/Search";

//Components import

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<PaperProvider>
			<StatusBar barStyle={"dark-content"} />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#fff2cc",
						},
						headerTintColor: "#000",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				>
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
					<Stack.Screen
						name="Search"
						options={{ title: "Search" }}
						component={SearchScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}
