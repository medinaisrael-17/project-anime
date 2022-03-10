import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>HOME PAGE</Text>
			<Button mode="contained" onPress={() => navigation.navigate("Login")}>
				Press Me
			</Button>
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
