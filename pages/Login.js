import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const image = {
	uri: "https://bryans-hosted.s3.amazonaws.com/loginBackground.jpeg",
};

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.image}>
				<Text>LOGIN PAGE</Text>
				<StatusBar style="auto" />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
});
