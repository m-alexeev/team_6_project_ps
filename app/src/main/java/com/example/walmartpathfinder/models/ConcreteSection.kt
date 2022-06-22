package com.example.walmartpathfinder.models

class ConcreteSection(name: String, parent: Section? = null) : Section(name, parent) {
    var subsections: MutableList<Section> = mutableListOf<Section>();

    fun addSubsection(subsection: Section) {
        subsections.add(subsection);
        subsection.setParent(this);
    }

    override fun generateList(shoppingList: MutableList<Item>): MutableList<Item> {
        TODO("Not yet implemented")
    }

}