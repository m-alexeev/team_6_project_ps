import React, { useState } from "react";
import { Instantiator } from "../models/Instantiator";
import { Item } from "../models/Item";
import { StyleSheet, View } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";
interface Props{

}

const Search: React.FC<Props> = () => {
    const items = Instantiator.items;

    const [searchValue, setSearchValue] = useState("");
    const [filteredItems, setFilteredItems] = useState(([] as Item[]))
  
    const searchFunction = (text: string) : void => {
        const filtered = items.filter( (item) => {
            // check if item name contains text
            const item_lower = `${item.name?.toLowerCase()}`;
            const text_lower = text.toLowerCase();
            return item_lower.includes(text_lower); 
        })
        setSearchValue(text)
        console.log(searchValue)
        console.log(filtered.map((item) => item.name))
    }

    return(
        <View style={styles.container}>
            <SearchBar
                placeholder="What are you looking for?"
                lightTheme
                round
                value={searchValue}
                onChangeText={ searchFunction }
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      padding: 2,
    },
    item: {
      backgroundColor: "#f5f520",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });

export default Search;