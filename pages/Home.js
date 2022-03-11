import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>HOME PAGE</Text>
			<Button
				mode="contained"
				color="#ffffff"
				style={styles.button}
				onPress={() => navigation.navigate("Login")}
			>
				LOGIN
			</Button>
			<Button
				mode="contained"
				color="#ffffff"
				style={styles.button}
				onPress={() => navigation.navigate("Search")}
			>
				SEARCH
			</Button>
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
	button: {
		backgroundColor: "#696969",
	},
});
