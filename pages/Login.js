import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
	uri: "https://bryans-hosted.s3.amazonaws.com/loginBackground.jpeg",
};

export default function LoginScreen() {
	return (
		<ImageBackground source={image} style={styles.image}>
			<View style={styles.container}>
				<Text style={styles.text}>LOGIN PAGE</Text>
				<StatusBar style="auto" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	text: {
		color: "white",
		alignItems: "center",
	},
	button: {
		alignItems: "center",
	},
});
