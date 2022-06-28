import React from "react";
import { Instantiator } from "../models/Instantiator";
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import ShoppingListItem from "./ShoppingListItem";
import { Item } from "../models/Item";
import ItemSeparatorView from "./ItemSeparator";

interface Props {
    selectedItems: Item[]
}

const ShoppingList: React.FC<Props> = ({ selectedItems }) => {
    return (
        <SafeAreaView style={styles.container}>
            {selectedItems.length > 0 ?
                <FlatList<Item>
                    data={selectedItems}
                    renderItem={({ item }) =>
                        <ShoppingListItem item={item} />} keyExtractor={item => `${item.name} ${item.parent?.name}`}
                    ItemSeparatorComponent={ItemSeparatorView}
                />
                :
                <Text style={styles.noItems}>Add items to shopping list</Text>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch"
    },
    noItems:{
        textAlign:'center',
    }

})

export default ShoppingList;