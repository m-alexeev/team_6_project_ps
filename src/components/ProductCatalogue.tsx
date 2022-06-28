import { CheckboxEvent } from "expo-checkbox";
import { FlatList } from "native-base";
import React, { useEffect, useState } from "react";
import { GestureResponderEvent, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Instantiator } from "../models/Instantiator";
import { Item } from "../models/Item";
import ItemSeparatorView from "./ItemSeparator";
import ShoppingList from "./ShoppingList";
import ShoppingListItem from "./ShoppingListItem";


interface Props {

}

const ProductCatalogue: React.FC<Props> = () => {

	const items = Instantiator.items;
	const [selectedItems, setSelectedItems] = useState<Item[]>([]);
	const [showSearch, setShowSearch] = useState(false);
	const [filteredItems, setFilteredItems] = useState<Item[]>([...items]);
	const [search, setSearch] = useState("");

	const searchFilterFunction = (query: string) => {
		if (query) {
			const newData = items.filter((item: Item) => {
				const itemData = item.name
					? item.name.toUpperCase()
					: ''.toUpperCase();

				const textData = query.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			setFilteredItems([...newData]);
		}
		else {
			setFilteredItems([...items]);
		}
		console.log(items);
		console.log(Instantiator.items);
		setSearch(query);
	}

	const handlePress = (id: string) => {
		const item = items.find(item => item.name === id)
		if (item && !selectedItems.includes(item)){
			const newSeletedItems = [...selectedItems, item];
			const newSeletedItemsSorted = Instantiator.store?.section.sortItemList(newSeletedItems)[0];
			if (newSeletedItemsSorted)
				setSelectedItems(newSeletedItemsSorted);
		}
	}


	const handlePressCheckbox = (event: CheckboxEvent) => {
		console.log(event.target.value);
	}

	return (
		<SafeAreaView style={{ flex: 1, alignSelf: "stretch" }}>
			<View style={styles.container}>
				{/* Search bar */}
				<View style={styles.topbar}>
					<TextInput
						style={styles.textInputStyle}
						onChangeText={(text) => searchFilterFunction(text)}
						value={search}
						onFocus={() => setShowSearch(true)}
						underlineColorAndroid="transparent"
						placeholder="Search...">
					</TextInput>
					<Text style={styles.close} onPress={() => setShowSearch(false)}>
						Cancel
					</Text>
				</View>
				{/* Product List */}
				{showSearch &&
					<FlatList<Item>
						style={styles.list}
						data={filteredItems}
						ItemSeparatorComponent={ItemSeparatorView}
						renderItem={({ item }) =>
							<ShoppingListItem item={item} handlePress={handlePress} handlePressCheckbox={handlePressCheckbox}/>
						}
						keyExtractor={item => `${item.name}`}
					/>
				}

				{/* Shopping List */}
				<FlatList<Item>
					data={selectedItems}
					ItemSeparatorComponent={ItemSeparatorView}
					renderItem={({ item }) =>
						<ShoppingListItem item={item} checkbox handlePress={handlePress} handlePressCheckbox={handlePressCheckbox}/>
					}
					keyExtractor={item => `${item.name}`}
					/>
			</View>	
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "stretch",
		marginHorizontal: 10,
	},
	topbar:{
		flex: 1,
		flexDirection: "row",
	},
	close: {
		alignSelf: 'center',
		marginStart: 5,
		marginVertical: "auto",
		color: "#306fd4"
	},
	textInputStyle: {
		flexGrow: 1,
		height: 40,
		fontSize: 20,
		borderWidth: 1,
		paddingLeft: 20,
		marginTop: 10,
		borderStyle: "none",
		backgroundColor: 'white',
	},
	list: {
		maxHeight: 450,
		zIndex: 10,
		shadowColor: "grey",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.75,
		shadowRadius: 5
	},
})

export default ProductCatalogue;