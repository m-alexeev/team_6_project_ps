package com.example.walmartpathfinder.models

abstract class Section(
    private var name: String,
    private var parent: Section?,
) {
    abstract fun sortItemList(unorderedList: MutableList<Item>): Pair<MutableList<Item>,MutableList<Item>>

    /* Check to see if product is the Descendant of the section and subsection */
    fun isDescendentOf(section: Section): Boolean {
        var cur = this
        while (cur.parent != null) {
            cur = cur.parent!!
            if (cur == section) {
                return true
            }
        }
        return false
    }

    fun setParent(parent : Section) {
        this.parent = parent
    }

    override fun toString(): String {
        return if (this.parent == null) (this.name) else (this.parent!!.name + "-" + this.name)
    }

}


