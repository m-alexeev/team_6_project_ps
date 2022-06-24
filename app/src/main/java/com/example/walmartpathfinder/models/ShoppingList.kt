package com.example.walmartpathfinder.models

class ShoppingList(
    private var title: String,
    private var shoppingList: MutableList<Item> = mutableListOf(),
) {
    /* Add Items to List */
    fun addItem(item: Item) {
        shoppingList.add(item)
    }

    /* Remove Items from List */
    fun removeItem(item: Item) {
        if (shoppingList.contains(item)) {
            shoppingList.remove(item)
        }
    }

    override fun toString(): String {
        return this.title
    }

}