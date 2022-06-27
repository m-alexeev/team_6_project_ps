import { Checkbox, Container, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Item } from "../models/Item";

interface Props {
    item: Item;
}

const ShoppingListItem: React.FC<Props> = (props) => {
    const item = props.item;
    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <View style={styles.left}>
                    <Checkbox style={styles.checkbox} tintColors={{ true: "red", false: "green" }} value={item.checked}></Checkbox>
                    <Text style={styles.label}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.parent}>{item.parent?.name ? `Aisle - ${item.parent?.name}` : ""}</Text>
                </View>
            </View>
        </View>
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
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 20,
        marginEnd: 30,
        paddingBottom: 20,
        borderBottomColor: "#BCBCBC",
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        flex: 1,
    },
    left:{
        flexDirection: "row"
    },
    checkbox: {
        borderRadius: 15,
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