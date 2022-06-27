import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface Props{
    title: string,
}
  
const SearchItem = ( prop: Props) => {
    return (
      <View style={styles.searchItem}>
        <Text>{prop.title}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    searchItem: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });
  
export default SearchItem;