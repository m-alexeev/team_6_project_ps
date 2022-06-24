package com.example.walmartpathfinder.models

class ConcreteSection(name: String, parent: Section? = null) : Section(name, parent) {
    private var subsections: MutableList<Section> = mutableListOf<Section>()


    /*Allows user to add subsections to subsections list*/
    fun addSubsection(subsection: Section) {
        subsections.add(subsection)
        subsection.setParent(this)
    }

    fun getSubsections(): MutableList<Section> {
        return this.subsections
    }

    /* Check to see the item being checked is a descendant of the specific section */
    override fun sortItemList(unorderedList: MutableList<Item>): Pair<MutableList<Item>, MutableList<Item>> {
        var unordered = mutableListOf<Item>()
        var ordered = mutableListOf<Item>()

        for (item in unorderedList) {
            if (item.isDescendantOf(this)) {
                ordered.add(item)
            } else {
                unordered.add(item)
            }

        }

        /* Add all items back to ordered and unordered list and return both lists */
        var subsectionUnordered = ordered
        ordered = mutableListOf()
        for (subsection in this.subsections) {
            var listPair = subsection.sortItemList(subsectionUnordered)
            ordered.addAll(listPair.first)
            subsectionUnordered = listPair.second
        }

        return Pair(ordered, unordered)
    }

}