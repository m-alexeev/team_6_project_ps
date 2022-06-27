import React from "react";
import { Instantiator } from "../models/Instantiator";
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import ShoppingListItem from "./ShoppingListItem";
import { Item } from "../models/Item";
interface Props {

}

const ShoppingList: React.FC<Props> = () => {
    Instantiator.createStoreStructure()
    const items = Instantiator.items;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList<Item> 
                data={items}
                renderItem={({ item }) => 
                    <ShoppingListItem item={item} />} keyExtractor={item => `${item.name} ${item.parent?.name}`} 
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        alignSelf: "stretch"
    },
    
})

export default ShoppingList;