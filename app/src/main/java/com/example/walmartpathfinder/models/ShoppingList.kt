package com.example.walmartpathfinder.models

class ShoppingList {
    private var shoppingList:MutableList<Item> = mutableListOf();

    /* Add Items to List */
    fun addItem(item: Item){
        shoppingList.add(item);
    }

    /* Remove Items from List */
    fun removeItem(item: Item){
        if (shoppingList.contains(item)){
            shoppingList.remove(item);
        }
    }

}