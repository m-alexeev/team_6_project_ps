import React from "react";
import { Text, View } from "native-base";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Item } from "../models/Item";

interface Props {
	item: Item;
	handlePress: () => void;
}

const ShoppingListTopItem: React.FC<Props> = ({ item, handlePress }) => {

	return (
		<TouchableOpacity onPress={handlePress}>
			<View style={styles.container}>
				<View style={styles.checkboxContainer}>
					<View style={styles.left}>
						<Image
							style={styles.image}
							source={{
								uri: "https://corporate.walmart.com/_download?id=0000016d-f8b2-d758-a1ed-f8b290f10000",
							}}
						/>
					</View>
					<View style={styles.right}>
						<Text style={styles.label}>{item.name}</Text>
						<Text style={styles.parent}>{item.getAisle()}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 150,
		marginHorizontal: 15,
		marginTop: 10,
		alignSelf: "stretch",
		alignItems: "center",
    borderRadius: 15,
		shadowColor: "grey",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.75,
		shadowRadius: 5,
	},
	checkboxContainer: {
		alignSelf: "stretch",
		flexDirection: "row",
		padding: 15,
		justifyContent: 'space-between',
		flex: 1,
	},
	left: {
		flexDirection: "row",
	},
	right: {
		flexDirection: "column",
	},
	image: {
		width: 150,
    borderRadius: 15
  },
	label: {
		fontSize: 20,
		color: "#5b5b5b"
	},
	parent: {
		fontSize: 20,
		color: "#5b5b5b"
	},
})

export default ShoppingListTopItem;