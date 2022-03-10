import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SearchScreen() {
	return (
		<View style={styles.container}>
			<Text>Search Page</Text>
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
