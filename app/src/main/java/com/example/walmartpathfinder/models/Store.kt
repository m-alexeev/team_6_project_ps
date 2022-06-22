package com.example.walmartpathfinder.models

class Store(name: String) {
    var sections: MutableList<Section> = mutableListOf()
    var storeName: String = name;

    fun addSection(section: Section){
        sections.add(section);
    }

}