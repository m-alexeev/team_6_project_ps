import { Item } from "./Item";

class ShoppingList{
    shoppingList: Item[] = []

    addItem(item: Item){
        this.shoppingList.push(item)
    }

    removeItem(item: Item){
        this.shoppingList.filter((val => {
            return val != item;
        }))
    }
}