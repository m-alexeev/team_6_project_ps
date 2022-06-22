package com.example.walmartpathfinder.models

class ShoppingList {
    private var shoppingList:MutableList<Item> = mutableListOf();

    fun addItem(item: Item){
        shoppingList.add(item);
    }

    fun removeItem(item: Item){
        if (shoppingList.contains(item)){
            shoppingList.remove(item);
        }
    }

}