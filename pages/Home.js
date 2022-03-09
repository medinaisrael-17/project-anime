import { StyleSheet, Button, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>HOME PAGE</Text>
			<Button
				title="Go to Login"
				onPress={() => navigation.navigate("Login")}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
