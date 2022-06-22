package com.example.walmartpathfinder.models

class ConcreteSection(name: String, parent: Section) : Section(name, parent) {
    private var subsection: MutableList<Section> = mutableListOf<Section>();

    fun addSubsection(subcategory: Section) {
        subsection.add(subcategory);
    }

    override fun generateList(shoppingList: MutableList<Item>): MutableList<Item> {
        TODO("Not yet implemented")
    }

}