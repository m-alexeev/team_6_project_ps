package com.example.walmartpathfinder.models

class Item(name: String, parent: Section) : Section(name, parent) {
    override fun generateList(unorderedList: MutableList<Item>): Pair<MutableList<Item>, MutableList<Item>> {
        var ordered = mutableListOf<Item>()

        if (this in unorderedList) {
            ordered.add(this)
            unorderedList.remove(this)
        }

        return Pair(ordered, unorderedList)
    }

}