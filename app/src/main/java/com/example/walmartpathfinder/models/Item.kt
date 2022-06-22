package com.example.walmartpathfinder.models

class Item(name: String, parent: Section) : Section(name, parent) {
    override fun generateList(unorderedList: MutableList<Item>): MutableList<Item> {
        TODO("Not yet implemented")
    }

}