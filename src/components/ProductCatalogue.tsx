import { FlatList } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Instantiator } from "../models/Instantiator";
import { Item } from "../models/Item";
import ItemSeparatorView from "./ItemSeparator";
import ShoppingListItem from "./ShoppingListItem";


interface Props {

}

const ProductCatalogue: React.FC<Props> = () => {

	Instantiator.createStoreStructure();
	const items = Instantiator.items;
	const [filteredItems, setFilteredItems] = useState<Item[]>(items);
	const [search, setSearch] = useState("");


	const searchFilterFunction = (query: string) => {
		if (query) {
			const newData = items.filter((item: Item) => {
				const itemData = item.name
					? item.name.toUpperCase()
					: ''.toUpperCase();

				const textData = query.toUpperCase();
				return itemData.startsWith(textData);
			});
			setFilteredItems(newData);
			setSearch(query);
		}
		else {
			setFilteredItems(items);
			setSearch(query);
		}
	}


	return (
		<SafeAreaView style={{ flex: 1, alignSelf:"stretch"}}>
			<View style={styles.container}>
				{/* Search bar */}
				<TextInput
					style={styles.textInputStyle}
					onChangeText={(text) => searchFilterFunction(text)}
					value={search}
					underlineColorAndroid="transparent"
					placeholder="Search...">
				</TextInput>
				{/* Product List */}
				<FlatList<Item>
					data={filteredItems}
					ItemSeparatorComponent={ItemSeparatorView}
					renderItem={({ item }) =>
						<ShoppingListItem item={item} />
					}
					keyExtractor={item => `${item.name} ${item.parent?.name}`}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf:"stretch"
	},
	textInputStyle: {
		height: 40,
		borderWidth: 1,
		paddingLeft: 20,
		margin: 5,
		borderColor: '#009688',
		backgroundColor: '#FFFFFF',
	},
	list: {

	},
})

export default ProductCatalogue;