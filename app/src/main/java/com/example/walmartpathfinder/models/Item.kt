package com.example.walmartpathfinder.models

class Item(name: String, parent: Section) : Section(name, parent) {
    /* Check list to see if item is present in unordered list and add to ordered list */
    override fun sortItemList(unorderedList: MutableList<Item>): Pair<MutableList<Item>, MutableList<Item>> {
        var ordered = mutableListOf<Item>()

        if (this in unorderedList) {
            ordered.add(this)
            unorderedList.remove(this)
        }

        return Pair(ordered, unorderedList)
    }
}