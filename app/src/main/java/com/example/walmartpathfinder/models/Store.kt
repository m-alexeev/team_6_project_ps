package com.example.walmartpathfinder.models

class Store(name: String) {
    private var sections: MutableList<Section> = mutableListOf();
    private var storeName: String = name;

    fun addSection(section: Section){
        sections.add(section);
    }

}