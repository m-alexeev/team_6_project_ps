package com.example.walmartpathfinder.models

abstract class Section(
    private var name: String,
    private var parent: Section,
) {
    abstract fun generateList(unorderedList: MutableList<Item>): MutableList<Item>

    fun isDescendentOf(section: Section): Boolean {
        var cur = this
        while (cur != null) {
            cur = cur.parent
            if (cur == section) {
                return true
            }
        }
        return false
    }

}


