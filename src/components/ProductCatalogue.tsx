import { CheckboxEvent } from "expo-checkbox";
import { FlatList } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Instantiator } from "../models/Instantiator";
import { Item } from "../models/Item";
import ItemSeparatorView from "./ItemSeparator";
import ShoppingListItem from "./ShoppingListItem";
import ShoppingListTopItem from "./ShoppingListTopItem";


interface Props {

}

const ProductCatalogue: React.FC<Props> = () => {

	const items = Instantiator.items;
	const [showSearch, setShowSearch] = useState(false);
	const [filteredItems, setFilteredItems] = useState<Item[]>([...items]);
	const [search, setSearch] = useState("");

	const [topItem, setTopItem] = useState<Item|undefined>(undefined)
	const [selectedItems, setSelectedItems] = useState<Item[]>([]);

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
		setSearch(query);
	}

	const handlePressSearchItem = (id: string) => {
		const item = items.find(item => item.name === id)
		if (item && !selectedItems.includes(item)){
			const newSeletedItems = [...selectedItems, item];
			const newSeletedItemsSorted = Instantiator.store?.section.sortItemList(newSeletedItems)[0];
			if (newSeletedItemsSorted) {
				setSelectedItems(newSeletedItemsSorted);
				setTopItem(newSeletedItemsSorted.find((item)=>!item.checked));
			}
		}
		searchFilterFunction("");
		setShowSearch(false);
	}

	const handlePressCheckbox = (item: Item) => {
		const index = selectedItems.map(item => item.name).indexOf(item.name);
		const newSelectedItems = [...selectedItems];
		newSelectedItems[index].checked = !newSelectedItems[index].checked;
		const newTopItem = newSelectedItems.find((item)=>!item.checked);
		setTopItem(newTopItem);
		setSelectedItems(newSelectedItems);
	}

	const handlePressTopItem = () => {
		const item = selectedItems.filter((item)=>!item.checked)[0];
		handlePressCheckbox(item);
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
							<ShoppingListItem item={item} handlePress={handlePressSearchItem}/>
						}
						keyExtractor={item => item.name}
					/>
				}
				<Text style={styles.listHeader}>Your Shopping List</Text>
				{/* Shopping List */}
				{ topItem &&
						<ShoppingListTopItem item={topItem} handlePress={handlePressTopItem}></ShoppingListTopItem>
				}
				<FlatList<Item>
					data={selectedItems.filter((item)=>!item.checked).slice(1)}
					ItemSeparatorComponent={ItemSeparatorView}
					renderItem={({ item }) =>
						<ShoppingListItem item={item} checkbox 
						handlePress={()=>{}} 
						handlePressCheckbox={(e) => handlePressCheckbox(item)}/>
					}
					keyExtractor={item => item.name}
				/>
					
					
				<Text style={styles.listSecondaryHeader}>Finished</Text>
				<FlatList<Item>
					data={selectedItems.filter((item)=>item.checked)}
					ItemSeparatorComponent={ItemSeparatorView}
					renderItem={({ item }) =>
						<ShoppingListItem item={item} checkbox checked
						handlePress={()=>{}} 
						handlePressCheckbox={(e) => handlePressCheckbox(item)}/>
					}
					keyExtractor={item => item.name}
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
		marginBottom: 50,
	},
	close: {
		alignSelf: 'center',
		marginStart: 5,
		paddingTop: 30,
		color: "#306fd4",
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
		top: 50,
		width:350,
		maxHeight: 450,
		backgroundColor: "white",
		zIndex: 5,
		position: 'absolute',
		shadowColor: "grey",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.75,
		shadowRadius: 5
	},
	listHeader:{
		marginHorizontal: 20,
		fontSize: 24,
		fontWeight: "bold",
		color: '#444',
		borderBottomWidth: 1
	},
	listSecondaryHeader:{
		marginHorizontal: 20,
		fontSize: 20,
		color: '#5b5b5b',
		borderBottomWidth: 0.5
	},
})

export default ProductCatalogue;