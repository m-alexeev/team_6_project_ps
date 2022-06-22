package com.example.walmartpathfinder.models

class ConcreteSection(sectionName: String): Section {
    private var subCategory: MutableList<Section> = mutableListOf<Section>();

    fun addSubCategory(subcategory: Section){
        subCategory.add(subcategory);
    }

    override fun generateList(){
        return;
    }
}