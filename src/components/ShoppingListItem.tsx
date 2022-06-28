import { Text, View } from "native-base";
import Checkbox, { CheckboxEvent } from "expo-checkbox";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Item } from "../models/Item";

interface Props {
	item: Item;
	checkbox?: boolean;
	handlePress: (id?: string) => void;
	handlePressCheckbox: (event: CheckboxEvent) => void;
}

const ShoppingListItem: React.FC<Props> = ({ item, checkbox, handlePressCheckbox, handlePress }) => {
	return (
		<TouchableOpacity onPress={()=>handlePress(item.name)}>

			<View style={styles.container}>
				<View style={styles.checkboxContainer}>
					<View style={styles.left}>
						{checkbox &&
							<Checkbox
								style={styles.checkbox}
								color={item.checked ? "#04D300DE" : "#EFEEEE"}
								value={item.checked}
								onChange={handlePressCheckbox}
							/>
						}
						<Text style={styles.label}>{item.name}</Text>
					</View>
					<View>
						<Text style={styles.parent}>{item.parent?.name ? `Aisle - ${item.parent?.name}` : ""}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "stretch",
		alignItems: "center",
	},
	checkboxContainer: {
		alignSelf: "stretch",
		flexDirection: "row",
		paddingVertical: 15,
		marginLeft: 20,
		marginEnd: 30,
		justifyContent: 'space-between',
		flex: 1,
	},
	left: {
		flexDirection: "row"
	},
	checkbox: {
		width: 30,
		height: 30,
	},
	label: {
		alignSelf: "center",
		marginStart: 20,
		fontSize: 20,
		color: "#5b5b5b"
	},
	parent: {
		fontSize: 20,
		color: "#5b5b5b"
	}
})

export default ShoppingListItem;