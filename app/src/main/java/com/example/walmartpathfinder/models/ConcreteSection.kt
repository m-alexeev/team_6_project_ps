package com.example.walmartpathfinder.models

class ConcreteSection(name: String, parent: Section? = null) : Section(name, parent) {
    private var subsections: MutableList<Section> = mutableListOf<Section>()

    fun addSubsection(subsection: Section) {
        subsections.add(subsection)
        subsection.setParent(this)
    }

    override fun generateList(shoppingList: MutableList<Item>): Pair<MutableList<Item>,MutableList<Item>> {
        var unordered = mutableListOf<Item>()
        var ordered = mutableListOf<Item>()

        for (item in shoppingList) {
            if (item.isDescendentOf(this)) {
                ordered.add(item)
            } else {
                unordered.add(item)
            }

        }

        var subsectionUnordered = ordered
        ordered = mutableListOf()
        for (subsection in this.subsections) {
            var listPair = subsection.generateList(subsectionUnordered)
            ordered.addAll(listPair.first)
            subsectionUnordered = listPair.second
        }

        return Pair(ordered,unordered)
    }

}